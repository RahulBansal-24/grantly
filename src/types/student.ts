import { EducationLevel, SocialCategory, GenderEligibility } from './scholarship';

export interface StudentProfile {
  // Personal
  firstName?: string;
  lastName?: string;
  age?: number;
  dateOfBirth?: string;
  state?: string;
  domicile?: string;
  gender?: GenderEligibility;
  socialCategory?: SocialCategory;
  isPersonWithDisability?: boolean;
  disabilityPercentage?: number;

  // Educational
  educationLevel?: EducationLevel;
  degreeCourse?: string; // e.g. "B.Tech in Computer Science"
  stream?: string; // e.g. "Engineering & Technology", "Medical", "Commerce", "Arts"
  institutionName?: string;
  institutionType?: 'Government' | 'Private' | 'Aided' | 'Any';
  currentAcademicYear?: number; // 1, 2, 3, 4, etc.
  percentage?: number; // Current / recent exam percentage e.g. 84.5
  cgpa?: number; // e.g. 8.5
  previousExamPercentage?: number; // e.g. 10th or 12th board score

  // Financial
  annualFamilyIncome?: number; // in INR, e.g. 250000
  incomeCategory?: 'below_1_lakh' | '1_to_2.5_lakh' | '2.5_to_8_lakh' | 'above_8_lakh';

  // Special / Diversity
  isFirstGenerationLearner?: boolean;
  isSingleGirlChild?: boolean;
  isOrphan?: boolean;
  hasSportsDistinction?: boolean;
  achievements?: string[];

  // Profile metadata
  createdAt: string;
  updatedAt: string;
  isGuest: boolean;
}

export type ApplicationStatus =
  | 'saved'
  | 'planning'
  | 'applied'
  | 'under_review'
  | 'approved'
  | 'rejected';

export interface DocumentItem {
  id: string;
  name: string;
  required: boolean;
  isUploadedOrReady: boolean;
  notes?: string;
}

export interface ApplicationRecord {
  id: string;
  scholarshipId: string;
  scholarshipName: string;
  provider: string;
  amount: number;
  formattedAmount: string;
  deadline: string;
  status: ApplicationStatus;
  appliedDate?: string;
  notes: string;
  documentsChecklist: DocumentItem[];
  timeline: {
    status: ApplicationStatus;
    timestamp: string;
    note?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface SavedScholarship {
  scholarshipId: string;
  savedAt: string;
  notes?: string;
}
