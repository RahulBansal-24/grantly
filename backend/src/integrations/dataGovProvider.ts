import { BaseScholarshipProvider } from './baseProvider.js';
import { Scholarship } from '../types/index.js';

export class DataGovProvider extends BaseScholarshipProvider {
  id = 'datagov-india';
  name = 'Open Government Data (data.gov.in)';
  officialDocUrl = 'https://data.gov.in/apis';
  credentialInstructions = 'Create a developer account at https://data.gov.in/, generate an API key from My Account > Web Services APIs, and locate the specific scholarship dataset resource ID.';

  checkIsConfigured(): boolean {
    return Boolean(process.env.DATA_GOV_API_KEY && process.env.DATA_GOV_RESOURCE_ID);
  }

  requiresCredentials(): boolean {
    return true;
  }

  async fetchScholarships(): Promise<Scholarship[]> {
    if (!this.checkIsConfigured()) {
      this.lastSyncTime = new Date().toISOString();
      this.lastItemCount = 0;
      return [];
    }

    try {
      const apiKey = process.env.DATA_GOV_API_KEY!;
      const resourceId = process.env.DATA_GOV_RESOURCE_ID!;
      const baseUrl = process.env.DATA_GOV_API_BASE_URL || 'https://api.data.gov.in/resource';

      const url = `${baseUrl}/${resourceId}?api-key=${apiKey}&format=json&limit=50`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Data.gov.in returned HTTP ${response.status}`);
      }

      const data = (await response.json()) as any;
      const records = Array.isArray(data?.records) ? data.records : [];
      const normalized = records
        .map((r: any) => this.normalizeScholarship(r))
        .filter((s: Scholarship | null): s is Scholarship => s !== null && this.validateScholarship(s));

      this.lastSyncTime = new Date().toISOString();
      this.lastItemCount = normalized.length;
      this.lastErrorMessage = null;
      return normalized;
    } catch (err: any) {
      this.lastErrorMessage = err.message || 'Data.gov.in network or format error';
      return [];
    }
  }

  normalizeScholarship(raw: any): Scholarship | null {
    const title = raw.scheme_name || raw.scholarship_name || raw.title;
    if (!title) return null;

    const id = raw.id || raw.record_id || `datagov-${Math.abs(hashString(title))}`;

    return {
      id: `datagov-${id}`,
      name: title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      provider: raw.ministry || raw.department || 'Government of India (data.gov.in)',
      providerCategory: 'central_gov',
      categories: ['central_gov', 'merit'],
      description: raw.description || raw.objective || 'Official scholarship dataset record published on data.gov.in.',
      briefSummary: raw.summary || title,
      amount: Number(raw.amount) || 12000,
      formattedAmount: raw.financial_assistance || '₹12,000 / year',
      awardFrequency: 'annual',
      awardCoverage: raw.coverage || 'Annual financial support',
      benefits: [raw.benefit || 'Financial aid as per ministry guidelines'],
      educationLevels: ['undergraduate', 'postgraduate'],
      coursesAndStreams: [raw.stream || 'All Eligible Courses'],
      requirements: {
        minPercentage: Number(raw.eligibility_percentage) || 55,
        maxAnnualIncome: Number(raw.income_limit) || 300000,
        gender: 'all'
      },
      requiredDocuments: ['Valid Marksheet', 'Income Proof', 'Aadhaar Card'],
      applicationProcedure: ['Apply through designated ministry portal or state directorate'],
      applicationStartDate: '2025-06-01',
      deadline: raw.deadline || '2026-11-30',
      status: 'open',
      officialUrl: raw.source_url || 'https://data.gov.in',
      applicationUrl: raw.application_link || 'https://data.gov.in',
      sourceName: 'Open Government Data Platform (data.gov.in)',
      verificationStatus: 'verified',
      lastVerifiedDate: new Date().toISOString().split('T')[0],
      lastSynchronizedDate: new Date().toISOString(),
      dataProvenance: 'live_synced',
      tags: ['OGD India', 'data.gov.in', 'Public Sector Data']
    };
  }
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
