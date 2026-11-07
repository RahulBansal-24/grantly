import { Scholarship } from '../types/index.js';
import { providerRegistry } from '../integrations/providerRegistry.js';
import { FALLBACK_SCHOLARSHIPS } from '../data/fallbackScholarships.js';

export class ScholarshipAggregator {
  private cache: Scholarship[] = [];
  private lastFetchedAt: number = 0;
  private readonly CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

  public async getScholarships(forceRefresh: boolean = false): Promise<{
    scholarships: Scholarship[];
    total: number;
    liveSyncedCount: number;
    verifiedCuratedCount: number;
    lastSynchronizedAt: string;
  }> {
    const now = Date.now();
    if (!forceRefresh && this.cache.length > 0 && now - this.lastFetchedAt < this.CACHE_TTL_MS) {
      return this.formatResponse(this.cache);
    }

    const mergedMap = new Map<string, Scholarship>();

    // 1. Seed with verified curated fallback dataset
    for (const item of FALLBACK_SCHOLARSHIPS) {
      mergedMap.set(item.id, item);
    }

    // 2. Query each configured provider in parallel with individual error resilience
    const providers = providerRegistry.getAllProviders();
    const fetchPromises = providers.map(async (provider) => {
      try {
        const liveItems = await provider.fetchScholarships();
        return liveItems;
      } catch (err) {
        console.warn(`Provider ${provider.name} failed:`, err);
        return [];
      }
    });

    const results = await Promise.all(fetchPromises);
    for (const items of results) {
      for (const item of items) {
        // Deduplicate by slug or id
        mergedMap.set(item.id, item);
      }
    }

    this.cache = Array.from(mergedMap.values());
    this.lastFetchedAt = now;

    return this.formatResponse(this.cache);
  }

  public async getScholarshipById(id: string): Promise<Scholarship | null> {
    const { scholarships } = await this.getScholarships();
    const found = scholarships.find(s => s.id === id || s.slug === id);
    return found || null;
  }

  private formatResponse(scholarships: Scholarship[]) {
    let liveSyncedCount = 0;
    let verifiedCuratedCount = 0;

    for (const s of scholarships) {
      if (s.dataProvenance === 'live_synced') {
        liveSyncedCount++;
      } else {
        verifiedCuratedCount++;
      }
    }

    return {
      scholarships,
      total: scholarships.length,
      liveSyncedCount,
      verifiedCuratedCount,
      lastSynchronizedAt: new Date(this.lastFetchedAt || Date.now()).toISOString()
    };
  }
}

export const scholarshipAggregator = new ScholarshipAggregator();
