export type ProviderCategory =
  | 'central_gov'
  | 'state_gov'
  | 'private'
  | 'corporate'
  | 'ngo'
  | 'university'
  | 'international';

export type ScholarshipCategory =
  | 'central_gov'
  | 'state_gov'
  | 'private'
  | 'corporate'
  | 'ngo'
  | 'university'
  | 'merit'
  | 'need'
  | 'research'
  | 'international'
  | 'stem'
  | 'minority';

export type EducationLevel =
  | 'high_school'
  | 'diploma'
  | 'undergraduate'
  | 'postgraduate'
  | 'phd'
  | 'vocational';

export type AwardFrequency =
  | 'one-time'
  | 'annual'
  | 'monthly'
  | 'per-semester'
  | 'variable';

export type SocialCategory =
  | 'General'
  | 'OBC'
  | 'SC'
  | 'ST'
  | 'EWS'
  | 'Minority'
  | 'Any';

export type GenderEligibility = 'all' | 'female' | 'male' | 'transgender';

export type DataProvenance = 'live_synced' | 'verified_curated' | 'sample_demo';

export interface EligibilityRequirement {
  minAge?: number;
  maxAge?: number;
  educationLevels?: EducationLevel[];
  courses?: string[];
  streams?: string[];
  minPercentage?: number;
  minCgpa?: number;
  maxAnnualIncome?: number;
  eligibleStates?: string[]; // Empty or contains 'All India' means all states
  eligibleDomicile?: string[];
  gender?: GenderEligibility;
  socialCategories?: SocialCategory[];
  disabilityOnly?: boolean;
  minDisabilityPercentage?: number;
  institutionTypes?: ('Government' | 'Private' | 'Aided' | 'Any')[];
  specialConditions?: string[];
  firstGenerationOnly?: boolean;
  singleGirlChildOnly?: boolean;
}

export interface Scholarship {
  id: string;
  name: string;
  slug: string;
  provider: string;
  providerCategory: ProviderCategory;
  categories: ScholarshipCategory[];
  description: string;
  briefSummary: string;
  amount: number;
  formattedAmount: string;
  awardFrequency: AwardFrequency;
  awardCoverage: string; // e.g. "Full tuition + ₹12,000/year living allowance"
  benefits: string[];
  educationLevels: EducationLevel[];
  coursesAndStreams: string[];
  requirements: EligibilityRequirement;
  requiredDocuments: string[];
  applicationProcedure: string[];
  applicationStartDate: string;
  deadline: string;
  isDeadlinePassed?: boolean;
  status: 'open' | 'closed' | 'coming_soon';
  officialUrl: string;
  applicationUrl: string;
  sourceName: string;
  verificationStatus: 'verified' | 'pending' | 'unverified';
  lastVerifiedDate: string;
  lastSynchronizedDate: string;
  dataProvenance: DataProvenance;
  tags: string[];
}
