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
  eligibleStates?: string[];
  eligibleDomicile?: string[];
  gender?: 'all' | 'female' | 'male' | 'transgender';
  socialCategories?: ('General' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'Minority' | 'Any')[];
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
  awardCoverage: string;
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

export interface ProviderStatus {
  id: string;
  name: string;
  isConfigured: boolean;
  isLiveAvailable: boolean;
  requiresCredentials: boolean;
  lastSyncTime: string | null;
  itemsFetched: number;
  statusMessage: string;
  officialDocUrl: string;
  credentialInstructions: string;
}
