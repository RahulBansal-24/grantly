export type EligibilityStatus = 'ELIGIBLE' | 'NEEDS_INFORMATION' | 'NOT_ELIGIBLE';

export type CriterionStatus = 'SATISFIED' | 'FAILED' | 'MISSING_INFO' | 'NOT_APPLICABLE';

export interface CriterionEvaluation {
  id: string;
  criterionName: string;
  category: 'education' | 'academic' | 'income' | 'location' | 'social_demographic' | 'institution' | 'special';
  status: CriterionStatus;
  isMandatory: boolean;
  requiredDisplay: string;
  studentDisplay: string;
  explanation: string;
  suggestedAction?: string;
}

export interface EligibilityResult {
  scholarshipId: string;
  status: EligibilityStatus;
  overallMatchScore: number; // 0 to 100 percentage
  criteria: CriterionEvaluation[];
  satisfiedCount: number;
  failedCount: number;
  missingCount: number;
  mandatoryFailedCount: number;
  mandatoryMissingCount: number;
  summaryHeadline: string;
  reasons: string[];
  missingFields: string[];
  actionableRecommendation: string;
  calculatedAt: string;
}

export interface ScoreWeightConfig {
  educationWeight: number;
  academicWeight: number;
  incomeWeight: number;
  locationWeight: number;
  demographicWeight: number;
}
