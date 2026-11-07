import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Scholarship, SourceDefinition, CollectionReport } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveDataFilePath(filename: string): string {
  const candidates = [
    path.resolve(process.cwd(), 'data', filename),
    path.resolve(process.cwd(), '..', 'data', filename),
    path.resolve(__dirname, '..', '..', '..', 'data', filename),
    path.resolve(__dirname, '..', '..', 'data', filename)
  ];

  for (const c of candidates) {
    if (fs.existsSync(c)) {
      return c;
    }
  }
  return candidates[0];
}

export class ScholarshipRepository {
  private scholarshipsCache: Scholarship[] = [];
  private sourcesCache: SourceDefinition[] = [];
  private reportCache: CollectionReport | null = null;
  private lastLoadedAt: number = 0;

  public async getScholarships(forceReload: boolean = false): Promise<{
    scholarships: Scholarship[];
    total: number;
    indianCount: number;
    internationalCount: number;
    activeCount: number;
    lastSynchronizedAt: string;
  }> {
    if (!forceReload && this.scholarshipsCache.length > 0) {
      return this.formatScholarshipsResponse();
    }

    try {
      const filePath = resolveDataFilePath('scholarships.json');
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        this.scholarshipsCache = JSON.parse(raw);
        this.lastLoadedAt = Date.now();
      } else {
        console.warn(`[WARN] Scholarships dataset file not found at: ${filePath}`);
        this.scholarshipsCache = [];
      }
    } catch (err) {
      console.error('[ERROR] Failed to load scholarships dataset from file:', err);
    }

    return this.formatScholarshipsResponse();
  }

  public async getScholarshipById(id: string): Promise<Scholarship | null> {
    await this.getScholarships();
    const clean = id.toLowerCase().trim();
    const found = this.scholarshipsCache.find(
      s => s.id.toLowerCase() === clean || s.slug.toLowerCase() === clean
    );
    return found || null;
  }

  public async getSources(): Promise<SourceDefinition[]> {
    if (this.sourcesCache.length > 0) {
      return this.sourcesCache;
    }

    try {
      const filePath = resolveDataFilePath('sources.json');
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        this.sourcesCache = JSON.parse(raw);
      }
    } catch (err) {
      console.error('[ERROR] Failed to load sources file:', err);
    }

    return this.sourcesCache;
  }

  public async getCollectionReport(): Promise<CollectionReport | null> {
    if (this.reportCache) {
      return this.reportCache;
    }

    try {
      const filePath = resolveDataFilePath('collection-report.json');
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        this.reportCache = JSON.parse(raw);
      }
    } catch (err) {
      console.error('[ERROR] Failed to load collection report file:', err);
    }

    return this.reportCache;
  }

  private formatScholarshipsResponse() {
    const indianCount = this.scholarshipsCache.filter(s => s.country === 'India').length;
    const internationalCount = this.scholarshipsCache.filter(s => s.country !== 'India').length;
    const activeCount = this.scholarshipsCache.filter(s => s.status === 'open').length;

    return {
      scholarships: this.scholarshipsCache,
      total: this.scholarshipsCache.length,
      indianCount,
      internationalCount,
      activeCount,
      lastSynchronizedAt: new Date(this.lastLoadedAt || Date.now()).toISOString()
    };
  }
}

export const scholarshipRepository = new ScholarshipRepository();
// Backward-compatible alias
export const scholarshipAggregator = scholarshipRepository;
