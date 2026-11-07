import { Scholarship, EligibilityRequirement, EducationLevel, SocialCategory, GenderEligibility } from '../types/scholarship';
import { StudentProfile } from '../types/student';
import {
  CriterionEvaluation,
  CriterionStatus,
  EligibilityResult,
  EligibilityStatus
} from '../types/eligibility';

/**
 * GRANTLY Deterministic Rule-Based Eligibility Matching Engine
 * 
 * High-performance, transparent, zero-AI evaluation engine that deterministically
 * tests student profiles against structured scholarship criteria.
 * 
 * Core Invariant:
 * 1. Missing information is NEVER treated as a failure; it moves status to NEEDS_INFORMATION.
 * 2. Any definitive mandatory condition failure immediately marks NOT_ELIGIBLE.
 * 3. ELIGIBLE is returned only when all mandatory criteria are verified and satisfied.
 * 4. Transparent match score (0-100%) assists with ranking but never overrides status.
 */

export class EligibilityEngine {
  /**
   * Evaluates a single scholarship against a student's profile.
   */
  public static evaluateScholarship(
    scholarship: Scholarship,
    profile: StudentProfile | null | undefined
  ): EligibilityResult {
    const criteria: CriterionEvaluation[] = [];
    const req = scholarship.requirements || {};

    // 1. Education Level
    if (req.educationLevels && req.educationLevels.length > 0) {
      criteria.push(this.evaluateEducationLevel(req.educationLevels, profile?.educationLevel));
    }

    // 2. Minimum Percentage / CGPA
    if (req.minPercentage !== undefined || req.minCgpa !== undefined) {
      criteria.push(this.evaluateAcademicRequirement(req, profile));
    }

    // 3. Maximum Annual Family Income
    if (req.maxAnnualIncome !== undefined && req.maxAnnualIncome > 0) {
      criteria.push(this.evaluateIncomeRequirement(req.maxAnnualIncome, profile?.annualFamilyIncome));
    }

    // 4. State / Domicile
    if (req.eligibleStates && req.eligibleStates.length > 0 && !req.eligibleStates.includes('All India')) {
      criteria.push(this.evaluateStateRequirement(req.eligibleStates, profile?.state, profile?.domicile));
    }

    // 5. Gender Eligibility
    if (req.gender && req.gender !== 'all') {
      criteria.push(this.evaluateGenderRequirement(req.gender, profile?.gender));
    }

    // 6. Social Category / Reservation
    if (req.socialCategories && req.socialCategories.length > 0 && !req.socialCategories.includes('Any')) {
      criteria.push(this.evaluateSocialCategoryRequirement(req.socialCategories, profile?.socialCategory));
    }

    // 7. Course / Stream
    if ((req.courses && req.courses.length > 0) || (req.streams && req.streams.length > 0)) {
      criteria.push(this.evaluateStreamRequirement(req.streams, req.courses, profile?.stream, profile?.degreeCourse));
    }

    // 8. Age Criteria
    if (req.minAge !== undefined || req.maxAge !== undefined) {
      criteria.push(this.evaluateAgeRequirement(req.minAge, req.maxAge, profile?.age, profile?.dateOfBirth));
    }

    // 9. Disability Criteria
    if (req.disabilityOnly) {
      criteria.push(this.evaluateDisabilityRequirement(
        req.minDisabilityPercentage,
        profile?.isPersonWithDisability,
        profile?.disabilityPercentage
      ));
    }

    // 10. Special Conditions (e.g., First Generation, Single Girl Child)
    if (req.firstGenerationOnly) {
      criteria.push(this.evaluateSpecialCondition(
        'first_generation',
        'First Generation Learner',
        'Must be first person in immediate family pursuing higher education',
        profile?.isFirstGenerationLearner
      ));
    }

    if (req.singleGirlChildOnly) {
      criteria.push(this.evaluateSpecialCondition(
        'single_girl_child',
        'Single Girl Child Status',
        'Must be an only girl child in family',
        profile?.isSingleGirlChild
      ));
    }

    // Count states
    let mandatoryFailed = 0;
    let mandatoryMissing = 0;
    let satisfiedCount = 0;
    let failedCount = 0;
    let missingCount = 0;

    const reasons: string[] = [];
    const missingFields: string[] = [];

    for (const c of criteria) {
      if (c.status === 'SATISFIED') {
        satisfiedCount++;
      } else if (c.status === 'FAILED') {
        failedCount++;
        if (c.isMandatory) {
          mandatoryFailed++;
          reasons.push(c.explanation);
        }
      } else if (c.status === 'MISSING_INFO') {
        missingCount++;
        if (c.isMandatory) {
          mandatoryMissing++;
          missingFields.push(c.criterionName);
        }
      }
    }

    // Determine Status
    let status: EligibilityStatus;
    let summaryHeadline = '';
    let actionableRecommendation = '';

    if (mandatoryFailed > 0) {
      status = 'NOT_ELIGIBLE';
      summaryHeadline = `Does not meet ${mandatoryFailed} mandatory requirement${mandatoryFailed > 1 ? 's' : ''}`;
      actionableRecommendation = `Review the failed criteria below. If your academic records or circumstances have updated, edit your profile.`;
    } else if (mandatoryMissing > 0 || !profile) {
      status = 'NEEDS_INFORMATION';
      summaryHeadline = `Information needed to verify eligibility (${mandatoryMissing} item${mandatoryMissing > 1 ? 's' : ''})`;
      actionableRecommendation = `Complete ${missingFields.slice(0, 2).join(' & ')} in your profile to verify your eligibility status.`;
    } else {
      status = 'ELIGIBLE';
      summaryHeadline = `Fully eligible! You satisfy all verified criteria.`;
      actionableRecommendation = `Ready to apply! Prepare required documents and check the application portal before the deadline.`;
    }

    // Transparent Match Score (0 to 100%)
    const overallMatchScore = this.calculateMatchScore(scholarship, profile, criteria);

    return {
      scholarshipId: scholarship.id,
      status,
      overallMatchScore,
      criteria,
      satisfiedCount,
      failedCount,
      missingCount,
      mandatoryFailedCount: mandatoryFailed,
      mandatoryMissingCount: mandatoryMissing,
      summaryHeadline,
      reasons,
      missingFields,
      actionableRecommendation,
      calculatedAt: new Date().toISOString()
    };
  }

  /**
   * Education Level evaluation
   */
  private static evaluateEducationLevel(
    allowedLevels: EducationLevel[],
    studentLevel?: EducationLevel
  ): CriterionEvaluation {
    const formatLevel = (l: string) => l.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase());
    const requiredDisplay = allowedLevels.map(formatLevel).join(', ');

    if (!studentLevel) {
      return {
        id: 'education_level',
        criterionName: 'Education Level',
        category: 'education',
        status: 'MISSING_INFO',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: 'Not specified in profile',
        explanation: `Requires student to be in: ${requiredDisplay}.`,
        suggestedAction: 'Update your current level of education in your profile.'
      };
    }

    const isMatch = allowedLevels.includes(studentLevel);
    const studentDisplay = formatLevel(studentLevel);

    return {
      id: 'education_level',
      criterionName: 'Education Level',
      category: 'education',
      status: isMatch ? 'SATISFIED' : 'FAILED',
      isMandatory: true,
      requiredDisplay,
      studentDisplay,
      explanation: isMatch
        ? `Your education level (${studentDisplay}) matches eligibility requirements.`
        : `Requires ${requiredDisplay}, but your profile states ${studentDisplay}.`,
      suggestedAction: isMatch ? undefined : 'Verify your current enrollment level in profile settings.'
    };
  }

  /**
   * Academic Score evaluation (Percentage / CGPA)
   */
  private static evaluateAcademicRequirement(
    req: EligibilityRequirement,
    profile?: StudentProfile | null
  ): CriterionEvaluation {
    const minPct = req.minPercentage;
    const minCgpa = req.minCgpa;

    const requiredParts: string[] = [];
    if (minPct !== undefined) requiredParts.push(`Min ${minPct}%`);
    if (minCgpa !== undefined) requiredParts.push(`Min ${minCgpa} CGPA (10-point scale)`);
    const requiredDisplay = requiredParts.join(' or ');

    const hasPct = profile?.percentage !== undefined && profile.percentage !== null;
    const hasCgpa = profile?.cgpa !== undefined && profile.cgpa !== null;

    if (!hasPct && !hasCgpa) {
      return {
        id: 'academic_score',
        criterionName: 'Academic Performance',
        category: 'academic',
        status: 'MISSING_INFO',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: 'Not specified in profile',
        explanation: `Requires academic record meeting ${requiredDisplay}.`,
        suggestedAction: 'Enter your latest exam percentage or CGPA in your profile.'
      };
    }

    // Convert CGPA to percentage roughly if needed (CBSE/UGC standard: CGPA * 9.5) or compare directly
    let isSatisfied = false;
    const studentDisplayParts: string[] = [];

    if (hasPct) {
      studentDisplayParts.push(`${profile!.percentage}%`);
      if (minPct !== undefined && profile!.percentage! >= minPct) {
        isSatisfied = true;
      }
    }

    if (hasCgpa) {
      studentDisplayParts.push(`${profile!.cgpa} CGPA`);
      if (minCgpa !== undefined && profile!.cgpa! >= minCgpa) {
        isSatisfied = true;
      } else if (minPct !== undefined) {
        // CGPA equivalent to percentage check
        const approxPct = profile!.cgpa! * 9.5;
        if (approxPct >= minPct) isSatisfied = true;
      }
    }

    const studentDisplay = studentDisplayParts.join(' / ');

    return {
      id: 'academic_score',
      criterionName: 'Academic Performance',
      category: 'academic',
      status: isSatisfied ? 'SATISFIED' : 'FAILED',
      isMandatory: true,
      requiredDisplay,
      studentDisplay,
      explanation: isSatisfied
        ? `Your academic performance (${studentDisplay}) satisfies the requirement (${requiredDisplay}).`
        : `Your academic performance (${studentDisplay}) is below the minimum required (${requiredDisplay}).`,
      suggestedAction: isSatisfied ? undefined : 'Ensure your entered score reflects your most recent qualifying examination.'
    };
  }

  /**
   * Income evaluation
   */
  private static evaluateIncomeRequirement(
    maxIncome: number,
    studentIncome?: number
  ): CriterionEvaluation {
    const formatINR = (val: number) => `₹${val.toLocaleString('en-IN')}`;
    const requiredDisplay = `Annual family income ≤ ${formatINR(maxIncome)}`;

    if (studentIncome === undefined || studentIncome === null) {
      return {
        id: 'annual_income',
        criterionName: 'Annual Family Income',
        category: 'income',
        status: 'MISSING_INFO',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: 'Not specified in profile',
        explanation: `Requires gross family annual income to be at or below ${formatINR(maxIncome)}.`,
        suggestedAction: 'Add your annual household income in your profile.'
      };
    }

    const isSatisfied = studentIncome <= maxIncome;
    const studentDisplay = formatINR(studentIncome);

    return {
      id: 'annual_income',
      criterionName: 'Annual Family Income',
      category: 'income',
      status: isSatisfied ? 'SATISFIED' : 'FAILED',
      isMandatory: true,
      requiredDisplay,
      studentDisplay,
      explanation: isSatisfied
        ? `Your annual family income (${studentDisplay}) is within the permissible limit of ${formatINR(maxIncome)}.`
        : `Your annual family income (${studentDisplay}) exceeds the ceiling of ${formatINR(maxIncome)}.`,
      suggestedAction: isSatisfied ? undefined : 'Government need-based schemes strictly enforce the income certificate ceiling.'
    };
  }

  /**
   * State / Domicile evaluation
   */
  private static evaluateStateRequirement(
    allowedStates: string[],
    studentState?: string,
    studentDomicile?: string
  ): CriterionEvaluation {
    const requiredDisplay = allowedStates.join(', ');

    if (!studentState && !studentDomicile) {
      return {
        id: 'state_domicile',
        criterionName: 'State Domicile / Residence',
        category: 'location',
        status: 'MISSING_INFO',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: 'Not specified in profile',
        explanation: `Open specifically to permanent residents of: ${requiredDisplay}.`,
        suggestedAction: 'Specify your resident or domicile state in your profile.'
      };
    }

    const clean = (s: string) => s.trim().toLowerCase();
    const allowedClean = allowedStates.map(clean);

    const matchState = studentState && allowedClean.includes(clean(studentState));
    const matchDomicile = studentDomicile && allowedClean.includes(clean(studentDomicile));
    const isSatisfied = Boolean(matchState || matchDomicile);
    const studentDisplay = [studentState, studentDomicile].filter(Boolean).join(' (Domicile: ') + (studentDomicile && studentState ? ')' : '');

    return {
      id: 'state_domicile',
      criterionName: 'State Domicile / Residence',
      category: 'location',
      status: isSatisfied ? 'SATISFIED' : 'FAILED',
      isMandatory: true,
      requiredDisplay,
      studentDisplay,
      explanation: isSatisfied
        ? `Your state of domicile (${studentDisplay}) qualifies for this scheme.`
        : `This state scheme requires domicile in: ${requiredDisplay}, whereas your profile is registered as: ${studentDisplay}.`,
      suggestedAction: isSatisfied ? undefined : 'Check if you possess a valid domicile certificate for this specific state.'
    };
  }

  /**
   * Gender evaluation
   */
  private static evaluateGenderRequirement(
    requiredGender: GenderEligibility,
    studentGender?: GenderEligibility
  ): CriterionEvaluation {
    const requiredDisplay = requiredGender === 'female' ? 'Female students only' :
      requiredGender === 'transgender' ? 'Transgender students only' :
      requiredGender === 'male' ? 'Male students only' : 'All Genders';

    if (!studentGender) {
      return {
        id: 'gender',
        criterionName: 'Gender Criteria',
        category: 'social_demographic',
        status: 'MISSING_INFO',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: 'Not specified in profile',
        explanation: `Restricted to: ${requiredDisplay}.`,
        suggestedAction: 'Indicate your gender in profile settings.'
      };
    }

    const isSatisfied = (requiredGender === 'all') || (studentGender === requiredGender);
    const studentDisplay = studentGender.charAt(0).toUpperCase() + studentGender.slice(1);

    return {
      id: 'gender',
      criterionName: 'Gender Criteria',
      category: 'social_demographic',
      status: isSatisfied ? 'SATISFIED' : 'FAILED',
      isMandatory: true,
      requiredDisplay,
      studentDisplay,
      explanation: isSatisfied
        ? `You fulfill the gender requirement (${requiredDisplay}).`
        : `Exclusively designated for: ${requiredDisplay}. Your profile indicates ${studentDisplay}.`,
      suggestedAction: isSatisfied ? undefined : 'Review female-focused or all-gender opportunities instead.'
    };
  }

  /**
   * Social Category evaluation
   */
  private static evaluateSocialCategoryRequirement(
    allowedCategories: SocialCategory[],
    studentCategory?: SocialCategory
  ): CriterionEvaluation {
    const requiredDisplay = allowedCategories.join(', ');

    if (!studentCategory) {
      return {
        id: 'social_category',
        criterionName: 'Social Category / Reservation',
        category: 'social_demographic',
        status: 'MISSING_INFO',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: 'Not specified in profile',
        explanation: `Designated for students belonging to: ${requiredDisplay}.`,
        suggestedAction: 'Add your social category in your profile if comfortable.'
      };
    }

    const isSatisfied = allowedCategories.includes(studentCategory) || allowedCategories.includes('Any');

    return {
      id: 'social_category',
      criterionName: 'Social Category / Reservation',
      category: 'social_demographic',
      status: isSatisfied ? 'SATISFIED' : 'FAILED',
      isMandatory: true,
      requiredDisplay,
      studentDisplay: studentCategory,
      explanation: isSatisfied
        ? `Your category (${studentCategory}) is eligible for this scheme.`
        : `Designated for: ${requiredDisplay}. Your profile indicates ${studentCategory}.`,
      suggestedAction: isSatisfied ? undefined : 'Explore general merit or other category-specific opportunities.'
    };
  }

  /**
   * Stream / Course evaluation
   */
  private static evaluateStreamRequirement(
    allowedStreams?: string[],
    allowedCourses?: string[],
    studentStream?: string,
    studentCourse?: string
  ): CriterionEvaluation {
    const streamsList = allowedStreams && allowedStreams.length > 0 ? allowedStreams : [];
    const coursesList = allowedCourses && allowedCourses.length > 0 ? allowedCourses : [];
    const requiredDisplay = [...streamsList, ...coursesList].join(', ') || 'Any discipline';

    if (!studentStream && !studentCourse) {
      return {
        id: 'course_stream',
        criterionName: 'Course / Academic Stream',
        category: 'education',
        status: 'MISSING_INFO',
        isMandatory: false, // Stream can often be broad
        requiredDisplay,
        studentDisplay: 'Not specified in profile',
        explanation: `Prioritizes students enrolled in: ${requiredDisplay}.`,
        suggestedAction: 'Specify your degree course and field of study.'
      };
    }

    const clean = (s: string) => s.toLowerCase().trim();
    const studentStr = clean(`${studentStream || ''} ${studentCourse || ''}`);

    const hasMatch = [...streamsList, ...coursesList].some(reqItem => {
      const itemClean = clean(reqItem);
      return studentStr.includes(itemClean) || itemClean.includes(clean(studentStream || 'xyz')) || itemClean.includes(clean(studentCourse || 'xyz'));
    });

    const studentDisplay = [studentCourse, studentStream].filter(Boolean).join(' - ');

    return {
      id: 'course_stream',
      criterionName: 'Course / Academic Stream',
      category: 'education',
      status: hasMatch ? 'SATISFIED' : 'FAILED',
      isMandatory: false,
      requiredDisplay,
      studentDisplay,
      explanation: hasMatch
        ? `Your course of study (${studentDisplay}) aligns with eligible streams.`
        : `Prefers: ${requiredDisplay}. Your profile lists ${studentDisplay}.`,
      suggestedAction: hasMatch ? undefined : 'Review whether your degree falls under an allied eligible discipline.'
    };
  }

  /**
   * Age evaluation
   */
  private static evaluateAgeRequirement(
    minAge?: number,
    maxAge?: number,
    studentAge?: number,
    studentDob?: string
  ): CriterionEvaluation {
    const requiredDisplay = minAge && maxAge ? `${minAge} to ${maxAge} years` :
      minAge ? `Minimum ${minAge} years` :
      maxAge ? `Maximum ${maxAge} years` : 'Any age';

    // Compute student age from DOB if age not directly given
    let calculatedAge = studentAge;
    if (calculatedAge === undefined && studentDob) {
      const birthDate = new Date(studentDob);
      const diffMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(diffMs);
      calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    if (calculatedAge === undefined) {
      return {
        id: 'age_limit',
        criterionName: 'Age Limit',
        category: 'social_demographic',
        status: 'MISSING_INFO',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: 'Not specified in profile',
        explanation: `Applicant must be ${requiredDisplay}.`,
        suggestedAction: 'Provide your age or date of birth in your profile.'
      };
    }

    const minOk = minAge === undefined || calculatedAge >= minAge;
    const maxOk = maxAge === undefined || calculatedAge <= maxAge;
    const isSatisfied = minOk && maxOk;

    return {
      id: 'age_limit',
      criterionName: 'Age Limit',
      category: 'social_demographic',
      status: isSatisfied ? 'SATISFIED' : 'FAILED',
      isMandatory: true,
      requiredDisplay,
      studentDisplay: `${calculatedAge} years old`,
      explanation: isSatisfied
        ? `Your age (${calculatedAge} years) satisfies the age eligibility range (${requiredDisplay}).`
        : `Your age (${calculatedAge} years) falls outside the permitted age range (${requiredDisplay}).`,
      suggestedAction: isSatisfied ? undefined : 'Ensure your date of birth is entered accurately.'
    };
  }

  /**
   * Disability Evaluation
   */
  private static evaluateDisabilityRequirement(
    minDisabilityPct?: number,
    isDisability?: boolean,
    studentDisabilityPct?: number
  ): CriterionEvaluation {
    const minPct = minDisabilityPct || 40; // Standard 40% benchmark under RPwD Act 2016
    const requiredDisplay = `Person with Disability (min ${minPct}% benchmark disability)`;

    if (isDisability === undefined) {
      return {
        id: 'disability_status',
        criterionName: 'Disability Benchmark',
        category: 'social_demographic',
        status: 'MISSING_INFO',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: 'Not specified in profile',
        explanation: `Exclusively reserved for persons with disabilities (benchmark ≥ ${minPct}%).`,
        suggestedAction: 'Indicate your disability status in your profile.'
      };
    }

    if (!isDisability) {
      return {
        id: 'disability_status',
        criterionName: 'Disability Benchmark',
        category: 'social_demographic',
        status: 'FAILED',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: 'No disability indicated',
        explanation: `This opportunity is exclusively reserved for candidates with benchmark disabilities (≥ ${minPct}%).`,
        suggestedAction: 'View open merit and general category scholarships.'
      };
    }

    if (studentDisabilityPct !== undefined && studentDisabilityPct < minPct) {
      return {
        id: 'disability_status',
        criterionName: 'Disability Benchmark',
        category: 'social_demographic',
        status: 'FAILED',
        isMandatory: true,
        requiredDisplay,
        studentDisplay: `${studentDisabilityPct}% disability recorded`,
        explanation: `Requires a minimum ${minPct}% benchmark disability certificate; your recorded certificate is ${studentDisabilityPct}%.`,
        suggestedAction: 'Verify the percentage stated on your official UDID card or civil surgeon certificate.'
      };
    }

    return {
      id: 'disability_status',
      criterionName: 'Disability Benchmark',
      category: 'social_demographic',
      status: 'SATISFIED',
      isMandatory: true,
      requiredDisplay,
      studentDisplay: `Eligible PwD status verified${studentDisabilityPct ? ` (${studentDisabilityPct}%)` : ''}`,
      explanation: `You satisfy the disability benchmark requirements.`,
      suggestedAction: undefined
    };
  }

  /**
   * Special condition evaluation
   */
  private static evaluateSpecialCondition(
    id: string,
    name: string,
    description: string,
    studentValue?: boolean
  ): CriterionEvaluation {
    if (studentValue === undefined) {
      return {
        id,
        criterionName: name,
        category: 'special',
        status: 'MISSING_INFO',
        isMandatory: true,
        requiredDisplay: description,
        studentDisplay: 'Not specified in profile',
        explanation: `Scheme requires: ${description}.`,
        suggestedAction: `Check the box in your profile if ${name.toLowerCase()} applies to you.`
      };
    }

    return {
      id,
      criterionName: name,
      category: 'special',
      status: studentValue ? 'SATISFIED' : 'FAILED',
      isMandatory: true,
      requiredDisplay: description,
      studentDisplay: studentValue ? 'Yes' : 'No',
      explanation: studentValue
        ? `You meet the special eligibility condition: ${description}.`
        : `Does not satisfy mandatory criterion: ${description}.`,
      suggestedAction: studentValue ? undefined : 'Look for opportunities without this restriction.'
    };
  }

  /**
   * Transparent matching percentage calculation (0 - 100%)
   * Used for smart sorting & relevance ranking, NEVER overriding eligibility status.
   */
  public static calculateMatchScore(
    scholarship: Scholarship,
    profile: StudentProfile | null | undefined,
    criteria: CriterionEvaluation[]
  ): number {
    if (!profile) return 0;
    if (criteria.length === 0) return 50; // Base score if no specific requirements

    let totalWeight = 0;
    let earnedWeight = 0;

    const weights: Record<string, number> = {
      education: 30,
      academic: 25,
      income: 20,
      location: 15,
      social_demographic: 10,
      institution: 5,
      special: 10
    };

    for (const c of criteria) {
      const weight = weights[c.category] || 10;
      totalWeight += weight;

      if (c.status === 'SATISFIED') {
        earnedWeight += weight;
      } else if (c.status === 'MISSING_INFO') {
        // Partial credit for missing information so it ranks decently for discovery
        earnedWeight += weight * 0.4;
      } else if (c.status === 'FAILED') {
        earnedWeight += 0;
      }
    }

    if (totalWeight === 0) return 60;
    const rawScore = Math.round((earnedWeight / totalWeight) * 100);
    return Math.min(100, Math.max(0, rawScore));
  }

  /**
   * Rank and sort scholarships:
   * 1. ELIGIBLE first, then NEEDS_INFORMATION, then NOT_ELIGIBLE.
   * 2. Within each group, sort by overall match score descending.
   * 3. Secondary sort by upcoming deadline.
   */
  public static rankScholarships(
    scholarships: { scholarship: Scholarship; result: EligibilityResult }[]
  ): { scholarship: Scholarship; result: EligibilityResult }[] {
    const statusPriority: Record<EligibilityStatus, number> = {
      ELIGIBLE: 1,
      NEEDS_INFORMATION: 2,
      NOT_ELIGIBLE: 3
    };

    return [...scholarships].sort((a, b) => {
      // 1. Status priority
      const pDiff = statusPriority[a.result.status] - statusPriority[b.result.status];
      if (pDiff !== 0) return pDiff;

      // 2. Overall match score
      const scoreDiff = b.result.overallMatchScore - a.result.overallMatchScore;
      if (scoreDiff !== 0) return scoreDiff;

      // 3. Deadline urgency
      const dateA = new Date(a.scholarship.deadline).getTime();
      const dateB = new Date(b.scholarship.deadline).getTime();
      return dateA - dateB;
    });
  }

  /**
   * Bulk evaluation helper
   */
  public static evaluateAllScholarships(
    scholarships: Scholarship[],
    profile: StudentProfile | null | undefined
  ): Map<string, EligibilityResult> {
    const map = new Map<string, EligibilityResult>();
    for (const s of scholarships) {
      map.set(s.id, this.evaluateScholarship(s, profile));
    }
    return map;
  }
}
