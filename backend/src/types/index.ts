export type ProviderCategory =
  | 'central_gov'
  | 'state_gov'
  | 'private'
  | 'corporate_csr'
  | 'corporate'
  | 'foundation_ngo'
  | 'ngo'
  | 'premier_university'
  | 'university'
  | 'international_government'
  | 'international_university'
  | 'international';

export type ScholarshipCategory =
  | 'central_gov'
  | 'state_gov'
  | 'corporate_csr'
  | 'corporate'
  | 'foundation_ngo'
  | 'ngo'
  | 'premier_university'
  | 'university'
  | 'international_government'
  | 'international_university'
  | 'international'
  | 'merit'
  | 'need'
  | 'research'
  | 'stem'
  | 'minority'
  | 'women'
  | 'disability'
  | 'sports';

export type EducationLevel =
  | 'school'
  | 'high_school'
  | 'diploma'
  | 'undergraduate'
  | 'postgraduate'
  | 'phd'
  | 'vocational';

export type AwardFrequency =
  | 'one_time'
  | 'one-time'
  | 'annual'
  | 'monthly'
  | 'per-semester'
  | 'variable';

export type FundingType =
  | 'full_funding'
  | 'tuition_waiver'
  | 'fixed_award'
  | 'partial_funding'
  | 'loan_scholarship';

export type VerificationStatus =
  | 'Officially Verified'
  | 'Source Verified'
  | 'Needs Verification'
  | 'Expired'
  | 'Archived'
  | 'verified'
  | 'pending'
  | 'unverified';

export type ScholarshipStatus = 'open' | 'closed' | 'upcoming' | 'coming_soon';

export type DataProvenance = 'verified_curated' | 'live_synced' | 'sample_demo';

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
  socialCategories?: string[];
  religions?: string[];
  disabilityOnly?: boolean;
  minDisabilityPercentage?: number;
  institutionTypes?: string[];
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
  country: string;
  state: string;
  fundingType: FundingType;
  currency: string;
  amount: number;
  formattedAmount: string;
  minAmount?: number;
  maxAmount?: number;
  awardFrequency: AwardFrequency;
  awardCoverage: string;
  benefits: string[];
  educationLevels: EducationLevel[];
  coursesAndStreams: string[];
  eligibleNationalities: string[];
  requirements: EligibilityRequirement;
  requiredDocuments: string[];
  applicationProcedure: string[];
  applicationStartDate: string;
  deadline: string;
  isDeadlinePassed?: boolean;
  status: ScholarshipStatus;
  officialUrl: string;
  applicationUrl: string;
  sourceUrl: string;
  sourceName: string;
  dateCollected: string;
  lastVerifiedDate: string;
  lastSynchronizedDate: string;
  verificationStatus: VerificationStatus;
  dataProvenance: DataProvenance;
  tags: string[];
}

export interface SourceDefinition {
  id: string;
  name: string;
  url: string;
  country: string;
  region: string;
  sourceType: string;
  classification: string;
  collectionMethod: string;
  description: string;
  enabled: boolean;
  recordsDiscovered?: number;
  recordsVerified?: number;
  lastSuccessfulCollectionDate?: string;
  status?: string;
}

export interface CollectionReport {
  reportId: string;
  collectionTimestamp: string;
  evaluationDate: string;
  summary: {
    totalScholarships: number;
    indianScholarships: number;
    internationalScholarships: number;
    activeScholarships: number;
    upcomingScholarships: number;
    closedOrExpiredScholarships: number;
    officiallyVerified: number;
    sourceVerified: number;
    needsVerification: number;
    expiredRecords: number;
    duplicatesRemoved: number;
    totalSourcesProcessed: number;
    sourcesSkipped: number;
  };
  breakdownByCategory: Record<string, number>;
  breakdownByCountry: Record<string, number>;
  breakdownByEducationLevel: Record<string, number>;
  dataIntegrityAudit: {
    uniqueIdsValid: boolean;
    allUrlsValid: boolean;
    allDeadlinesFormatted: boolean;
    deterministicSchemaCompliant: boolean;
  };
}
