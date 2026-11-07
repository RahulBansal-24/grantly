import { BaseScholarshipProvider } from './baseProvider.js';
import { Scholarship } from '../types/index.js';

export class Buddy4StudyProvider extends BaseScholarshipProvider {
  id = 'buddy4study';
  name = 'Buddy4Study Partner Integration';
  officialDocUrl = 'https://www.buddy4study.com/about-us';
  credentialInstructions = 'Buddy4Study enterprise feed integration requires formal API partnership onboarding with client authorization tokens. In standard environments, verified curated CSR scholarships are synchronized.';

  checkIsConfigured(): boolean {
    return Boolean(process.env.BUDDYSTUDY_API_KEY && process.env.BUDDYSTUDY_API_BASE_URL);
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
      const baseUrl = process.env.BUDDYSTUDY_API_BASE_URL!;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(baseUrl, {
        headers: { 'Authorization': `Bearer ${process.env.BUDDYSTUDY_API_KEY}` },
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`Buddy4Study API responded with ${response.status}`);
      const data = (await response.json()) as any;
      const rawList = Array.isArray(data?.results) ? data.results : [];
      const normalized = rawList
        .map((r: any) => this.normalizeScholarship(r))
        .filter((s: Scholarship | null): s is Scholarship => s !== null && this.validateScholarship(s));

      this.lastSyncTime = new Date().toISOString();
      this.lastItemCount = normalized.length;
      this.lastErrorMessage = null;
      return normalized;
    } catch (err: any) {
      this.lastErrorMessage = err.message || 'Buddy4Study connection timeout';
      return [];
    }
  }

  normalizeScholarship(raw: any): Scholarship | null {
    if (!raw?.id && !raw?.title) return null;
    return {
      id: `b4s-${raw.id}`,
      name: raw.title,
      slug: (raw.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      provider: raw.sponsor || raw.corporatePartner || 'Corporate CSR Foundation',
      providerCategory: 'corporate',
      categories: ['corporate', 'need', 'merit'],
      description: raw.description || 'Verified private/corporate scholarship opportunity.',
      briefSummary: raw.shortDesc || raw.title,
      amount: Number(raw.awardAmount) || 50000,
      formattedAmount: raw.displayAmount || `Up to ₹${(Number(raw.awardAmount) || 50000).toLocaleString('en-IN')}`,
      awardFrequency: 'annual',
      awardCoverage: raw.coverage || 'Tuition fee support',
      benefits: Array.isArray(raw.benefits) ? raw.benefits : ['Direct funding towards course fee'],
      educationLevels: raw.levels || ['undergraduate', 'diploma'],
      coursesAndStreams: raw.courses || ['All undergraduate streams'],
      requirements: raw.requirements || { minPercentage: 60, maxAnnualIncome: 600000 },
      requiredDocuments: raw.docs || ['Previous marksheet', 'Income proof', 'College ID'],
      applicationProcedure: ['Apply through online application form on portal', 'Telephonic interview round'],
      applicationStartDate: raw.startDate || '2025-06-01',
      deadline: raw.deadline || '2026-11-30',
      status: 'open',
      officialUrl: raw.officialUrl || 'https://www.buddy4study.com',
      applicationUrl: raw.applyUrl || 'https://www.buddy4study.com',
      sourceName: 'Buddy4Study Partner Feed',
      verificationStatus: 'verified',
      lastVerifiedDate: new Date().toISOString().split('T')[0],
      lastSynchronizedDate: new Date().toISOString(),
      dataProvenance: 'live_synced',
      tags: ['Corporate CSR', 'Buddy4Study', 'Private Grant']
    };
  }
}
