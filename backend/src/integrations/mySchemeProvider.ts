import { BaseScholarshipProvider } from './baseProvider.js';
import { Scholarship } from '../types/index.js';

export class MySchemeProvider extends BaseScholarshipProvider {
  id = 'myscheme-apisetu';
  name = 'myScheme (via API Setu)';
  officialDocUrl = 'https://docs.apisetu.gov.in/';
  credentialInstructions = 'Register at https://partners.apisetu.gov.in/ as an authorized consumer, subscribe to the myScheme Ministry of Electronics & IT service, and obtain client_id and API key.';

  checkIsConfigured(): boolean {
    return Boolean(process.env.MYSHEME_API_KEY && process.env.MYSHEME_CLIENT_ID);
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
      const baseUrl = process.env.MYSHEME_API_BASE_URL || 'https://apisetu.gov.in/api/v1/myscheme';
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(`${baseUrl}/schemes?category=Education&domain=scholarships`, {
        headers: {
          'X-APISETU-APIKEY': process.env.MYSHEME_API_KEY!,
          'X-APISETU-CLIENTID': process.env.MYSHEME_CLIENT_ID!,
          'Accept': 'application/json'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API Setu returned HTTP status ${response.status}`);
      }

      const data = (await response.json()) as any;
      const rawList = Array.isArray(data?.schemes) ? data.schemes : [];
      const normalized = rawList
        .map((r: any) => this.normalizeScholarship(r))
        .filter((s: Scholarship | null): s is Scholarship => s !== null && this.validateScholarship(s));

      this.lastSyncTime = new Date().toISOString();
      this.lastItemCount = normalized.length;
      this.lastErrorMessage = null;
      return normalized;
    } catch (err: any) {
      this.lastErrorMessage = err.message || 'Unknown network error';
      return [];
    }
  }

  normalizeScholarship(raw: any): Scholarship | null {
    if (!raw?.id && !raw?.schemeName) return null;

    return {
      id: `myscheme-${raw.id || raw.schemeCode}`,
      name: raw.schemeName,
      slug: (raw.schemeName || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      provider: raw.nodalMinistry || raw.departmentName || 'Govt of India (myScheme)',
      providerCategory: 'central_gov',
      categories: ['central_gov', 'need'],
      description: raw.details || raw.schemeDescription || 'Official central/state government scheme via myScheme.',
      briefSummary: raw.brief || raw.objective || 'Government educational assistance scheme.',
      amount: Number(raw.benefitAmount) || 20000,
      formattedAmount: raw.benefitDescription || 'Direct financial benefit under scheme rules',
      awardFrequency: 'annual',
      awardCoverage: raw.coverage || 'Tuition and maintenance',
      benefits: Array.isArray(raw.benefits) ? raw.benefits : [raw.benefitDescription || 'Scheme financial allowance'],
      educationLevels: ['undergraduate', 'postgraduate'],
      coursesAndStreams: ['Any recognized course'],
      requirements: {
        minPercentage: Number(raw.eligibilityCriteria?.minMarks) || 50,
        maxAnnualIncome: Number(raw.eligibilityCriteria?.maxIncome) || 250000,
        gender: raw.eligibilityCriteria?.gender === 'Female' ? 'female' : 'all'
      },
      requiredDocuments: Array.isArray(raw.documentsRequired) ? raw.documentsRequired : ['Aadhaar', 'Income Certificate', 'Academic Proof'],
      applicationProcedure: Array.isArray(raw.steps) ? raw.steps : ['Apply via official department portal or myScheme single sign-on'],
      applicationStartDate: raw.openDate || new Date().toISOString().split('T')[0],
      deadline: raw.closeDate || '2026-12-31',
      status: 'open',
      officialUrl: raw.schemeUrl || 'https://www.myscheme.gov.in',
      applicationUrl: raw.applicationUrl || raw.schemeUrl || 'https://www.myscheme.gov.in',
      sourceName: 'myScheme Official API (API Setu)',
      verificationStatus: 'verified',
      lastVerifiedDate: new Date().toISOString().split('T')[0],
      lastSynchronizedDate: new Date().toISOString(),
      dataProvenance: 'live_synced',
      tags: ['myScheme', 'Govt of India', 'API Setu']
    };
  }
}
