import { describe, it, expect } from 'vitest';
import { EligibilityEngine } from '../eligibilityEngine';
import { Scholarship } from '../../types/scholarship';
import { StudentProfile } from '../../types/student';

describe('GRANTLY Deterministic Eligibility Engine', () => {
  const baseScholarship: Scholarship = {
    id: 'test-sch-1',
    name: 'National Merit STEM Fellowship',
    slug: 'national-merit-stem-fellowship',
    provider: 'Department of Science and Technology',
    providerCategory: 'central_gov',
    categories: ['central_gov', 'merit', 'stem'],
    description: 'Premier merit-cum-means assistance for UG STEM scholars.',
    briefSummary: 'Merit-cum-means fellowship for STEM students.',
    amount: 100000,
    formattedAmount: '₹1,00,000 / year',
    awardFrequency: 'annual',
    awardCoverage: 'Tuition and contingency allowance',
    benefits: ['₹1,00,000 annual grant', 'Direct bank transfer via PFMS'],
    educationLevels: ['undergraduate'],
    coursesAndStreams: ['Engineering', 'Computer Science'],
    requirements: {
      educationLevels: ['undergraduate'],
      minPercentage: 75,
      maxAnnualIncome: 300000,
      gender: 'all'
    },
    requiredDocuments: ['Income Certificate', 'Marksheet', 'Enrollment Proof'],
    applicationProcedure: ['Apply online on portal', 'Upload verified documents'],
    applicationStartDate: '2025-01-01',
    deadline: '2026-12-31',
    status: 'open',
    officialUrl: 'https://scholarships.gov.in',
    applicationUrl: 'https://scholarships.gov.in/apply',
    sourceName: 'National Scholarship Portal',
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-11-01',
    lastSynchronizedDate: '2026-11-05',
    dataProvenance: 'verified_curated',
    tags: ['NSP', 'STEM', 'UG']
  };

  it('marks student as ELIGIBLE when all mandatory criteria are satisfied', () => {
    const profile: StudentProfile = {
      educationLevel: 'undergraduate',
      percentage: 82,
      annualFamilyIncome: 200000,
      gender: 'male',
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01',
      isGuest: true
    };

    const result = EligibilityEngine.evaluateScholarship(baseScholarship, profile);

    expect(result.status).toBe('ELIGIBLE');
    expect(result.mandatoryFailedCount).toBe(0);
    expect(result.mandatoryMissingCount).toBe(0);
    expect(result.overallMatchScore).toBeGreaterThanOrEqual(80);
    expect(result.criteria.every(c => c.status === 'SATISFIED')).toBe(true);
  });

  it('marks student as NOT_ELIGIBLE when academic percentage is below requirement', () => {
    const profile: StudentProfile = {
      educationLevel: 'undergraduate',
      percentage: 72, // Below 75
      annualFamilyIncome: 200000,
      gender: 'female',
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01',
      isGuest: true
    };

    const result = EligibilityEngine.evaluateScholarship(baseScholarship, profile);

    expect(result.status).toBe('NOT_ELIGIBLE');
    expect(result.mandatoryFailedCount).toBe(1);
    const academicCrit = result.criteria.find(c => c.id === 'academic_score');
    expect(academicCrit?.status).toBe('FAILED');
    expect(academicCrit?.explanation).toContain('is below the minimum required');
  });

  it('marks student as NOT_ELIGIBLE when income ceiling is exceeded', () => {
    const profile: StudentProfile = {
      educationLevel: 'undergraduate',
      percentage: 85,
      annualFamilyIncome: 450000, // Exceeds 300,000
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01',
      isGuest: true
    };

    const result = EligibilityEngine.evaluateScholarship(baseScholarship, profile);

    expect(result.status).toBe('NOT_ELIGIBLE');
    expect(result.mandatoryFailedCount).toBe(1);
    const incomeCrit = result.criteria.find(c => c.id === 'annual_income');
    expect(incomeCrit?.status).toBe('FAILED');
  });

  it('marks as NEEDS_INFORMATION when mandatory criteria are missing, NEVER treating missing as failed', () => {
    const profile: StudentProfile = {
      educationLevel: 'undergraduate',
      // percentage missing!
      annualFamilyIncome: 200000,
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01',
      isGuest: true
    };

    const result = EligibilityEngine.evaluateScholarship(baseScholarship, profile);

    expect(result.status).toBe('NEEDS_INFORMATION');
    expect(result.mandatoryFailedCount).toBe(0);
    expect(result.mandatoryMissingCount).toBe(1);
    expect(result.missingFields).toContain('Academic Performance');
    const academicCrit = result.criteria.find(c => c.id === 'academic_score');
    expect(academicCrit?.status).toBe('MISSING_INFO');
  });

  it('handles empty profile gracefully and defaults to NEEDS_INFORMATION', () => {
    const result = EligibilityEngine.evaluateScholarship(baseScholarship, null);

    expect(result.status).toBe('NEEDS_INFORMATION');
    expect(result.mandatoryFailedCount).toBe(0);
    expect(result.mandatoryMissingCount).toBeGreaterThan(0);
    expect(result.overallMatchScore).toBe(0);
  });

  it('correctly handles boundary conditions: exact percentage and exact income ceiling', () => {
    const exactBoundaryProfile: StudentProfile = {
      educationLevel: 'undergraduate',
      percentage: 75, // Exactly 75%
      annualFamilyIncome: 300000, // Exactly 3,00,000
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01',
      isGuest: true
    };

    const result = EligibilityEngine.evaluateScholarship(baseScholarship, exactBoundaryProfile);

    expect(result.status).toBe('ELIGIBLE');
    expect(result.mandatoryFailedCount).toBe(0);
  });

  it('evaluates state domicile requirement correctly', () => {
    const stateScholarship: Scholarship = {
      ...baseScholarship,
      id: 'karnataka-ssp-scheme',
      requirements: {
        ...baseScholarship.requirements,
        eligibleStates: ['Karnataka']
      }
    };

    const studentFromKarnataka: StudentProfile = {
      educationLevel: 'undergraduate',
      percentage: 80,
      annualFamilyIncome: 200000,
      state: 'Karnataka',
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01',
      isGuest: true
    };

    const studentFromMaharashtra: StudentProfile = {
      ...studentFromKarnataka,
      state: 'Maharashtra',
      domicile: 'Maharashtra'
    };

    const res1 = EligibilityEngine.evaluateScholarship(stateScholarship, studentFromKarnataka);
    expect(res1.status).toBe('ELIGIBLE');

    const res2 = EligibilityEngine.evaluateScholarship(stateScholarship, studentFromMaharashtra);
    expect(res2.status).toBe('NOT_ELIGIBLE');
    expect(res2.reasons[0]).toContain('state scheme requires domicile');
  });

  it('evaluates gender restrictions correctly', () => {
    const femaleScholarship: Scholarship = {
      ...baseScholarship,
      id: 'pragati-girls-scheme',
      requirements: {
        ...baseScholarship.requirements,
        gender: 'female'
      }
    };

    const femaleStudent: StudentProfile = {
      educationLevel: 'undergraduate',
      percentage: 80,
      annualFamilyIncome: 200000,
      gender: 'female',
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01',
      isGuest: true
    };

    const maleStudent: StudentProfile = {
      ...femaleStudent,
      gender: 'male'
    };

    expect(EligibilityEngine.evaluateScholarship(femaleScholarship, femaleStudent).status).toBe('ELIGIBLE');
    expect(EligibilityEngine.evaluateScholarship(femaleScholarship, maleStudent).status).toBe('NOT_ELIGIBLE');
  });

  it('correctly ranks scholarships: ELIGIBLE first, then NEEDS_INFO, then NOT_ELIGIBLE', () => {
    const sch1 = { ...baseScholarship, id: '1' };
    const sch2 = { ...baseScholarship, id: '2' };
    const sch3 = { ...baseScholarship, id: '3' };

    const eligibleRes = EligibilityEngine.evaluateScholarship(sch1, {
      educationLevel: 'undergraduate',
      percentage: 85,
      annualFamilyIncome: 150000,
      createdAt: '',
      updatedAt: '',
      isGuest: true
    });

    const needsInfoRes = EligibilityEngine.evaluateScholarship(sch2, {
      educationLevel: 'undergraduate',
      annualFamilyIncome: 150000,
      createdAt: '',
      updatedAt: '',
      isGuest: true
    });

    const notEligibleRes = EligibilityEngine.evaluateScholarship(sch3, {
      educationLevel: 'undergraduate',
      percentage: 50, // Fails
      annualFamilyIncome: 150000,
      createdAt: '',
      updatedAt: '',
      isGuest: true
    });

    const ranked = EligibilityEngine.rankScholarships([
      { scholarship: sch3, result: notEligibleRes },
      { scholarship: sch1, result: eligibleRes },
      { scholarship: sch2, result: needsInfoRes },
    ]);

    expect(ranked[0].result.status).toBe('ELIGIBLE');
    expect(ranked[1].result.status).toBe('NEEDS_INFORMATION');
    expect(ranked[2].result.status).toBe('NOT_ELIGIBLE');
  });
});
