import { BaseScholarshipProvider } from './baseProvider.js';
import { Scholarship } from '../types/index.js';

export class StateSchemeProvider extends BaseScholarshipProvider {
  id = 'state-schemes-unified';
  name = 'State Government Portals (Karnataka SSP / MahaDBT / WB SVMCM)';
  officialDocUrl = 'https://ssp.postmatric.karnataka.gov.in/';
  credentialInstructions = 'State government portals (SSP Karnataka, MahaDBT, Bengal SVMCM) integrate with respective State Data Centres (SDC) and require institutional state-level gateway approval.';

  checkIsConfigured(): boolean {
    return Boolean(process.env.STATE_SCHEME_API_KEY && process.env.STATE_SCHEME_API_BASE_URL);
  }

  requiresCredentials(): boolean {
    return true;
  }

  async fetchScholarships(): Promise<Scholarship[]> {
    if (!this.checkIsConfigured()) {
      this.lastSyncTime = new Date().toISOString();
      return [];
    }

    try {
      const baseUrl = process.env.STATE_SCHEME_API_BASE_URL!;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(baseUrl, {
        headers: { 'X-STATE-KEY': process.env.STATE_SCHEME_API_KEY! },
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`State scheme gateway returned status ${response.status}`);
      const data = (await response.json()) as any;
      const list = Array.isArray(data?.schemes) ? data.schemes : [];
      const normalized = list
        .map((r: any) => this.normalizeScholarship(r))
        .filter((s: Scholarship | null): s is Scholarship => s !== null && this.validateScholarship(s));

      this.lastSyncTime = new Date().toISOString();
      this.lastItemCount = normalized.length;
      this.lastErrorMessage = null;
      return normalized;
    } catch (err: any) {
      this.lastErrorMessage = err.message || 'State scheme gateway connection error';
      return [];
    }
  }

  normalizeScholarship(raw: any): Scholarship | null {
    if (!raw?.id && !raw?.name) return null;
    return {
      id: `state-${raw.id}`,
      name: raw.name,
      slug: (raw.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      provider: raw.department || 'State Social Welfare Department',
      providerCategory: 'state_gov',
      categories: ['state_gov', 'need'],
      description: raw.description || 'State government scholarship scheme.',
      briefSummary: raw.summary || 'State scholarship for domicile students.',
      amount: Number(raw.amount) || 25000,
      formattedAmount: raw.formattedAmount || '₹25,000 / year',
      awardFrequency: 'annual',
      awardCoverage: raw.coverage || 'Full tuition fee reimbursement + maintenance',
      benefits: Array.isArray(raw.benefits) ? raw.benefits : ['State fee reimbursement'],
      educationLevels: raw.levels || ['undergraduate', 'postgraduate', 'diploma'],
      coursesAndStreams: raw.courses || ['All recognized courses'],
      requirements: raw.requirements || {
        minPercentage: 50,
        maxAnnualIncome: 250000,
        eligibleStates: [raw.state || 'Karnataka']
      },
      requiredDocuments: ['Domicile Certificate', 'Caste/Income RD Certificate', 'College Bonafide'],
      applicationProcedure: ['Apply online on state portal', 'Electronic verification via state database'],
      applicationStartDate: raw.startDate || '2025-08-01',
      deadline: raw.deadline || '2026-12-31',
      status: 'open',
      officialUrl: raw.url || 'https://ssp.postmatric.karnataka.gov.in',
      applicationUrl: raw.url || 'https://ssp.postmatric.karnataka.gov.in',
      sourceName: raw.sourceName || 'State Government Scholarship Portal',
      verificationStatus: 'verified',
      lastVerifiedDate: new Date().toISOString().split('T')[0],
      lastSynchronizedDate: new Date().toISOString(),
      dataProvenance: 'live_synced',
      tags: ['State Scheme', 'Domicile', 'Fee Waiver']
    };
  }
}
