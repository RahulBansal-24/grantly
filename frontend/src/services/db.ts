import Dexie, { Table } from 'dexie';
import { StudentProfile, StudentProfileRecord, ApplicationRecord, SavedScholarship } from '../types/student';
import { Scholarship } from '../types/scholarship';

export class GrantlyDatabase extends Dexie {
  studentProfile!: Table<StudentProfileRecord, string>;
  savedScholarships!: Table<SavedScholarship, string>;
  applications!: Table<ApplicationRecord, string>;
  cachedScholarships!: Table<Scholarship, string>;

  constructor() {
    super('GrantlyDB');
    this.version(1).stores({
      studentProfile: 'id', // 'current' as key
      savedScholarships: 'scholarshipId, savedAt',
      applications: 'id, scholarshipId, status, deadline, createdAt',
      cachedScholarships: 'id, slug, providerCategory, deadline, status'
    });
  }
}

export const db = new GrantlyDatabase();

// Default initial guest profile
export const DEFAULT_GUEST_PROFILE: StudentProfile = {
  isGuest: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

/**
 * High-level Database Access Operations
 */
export const profileStorage = {
  async getProfile(): Promise<StudentProfile | null> {
    try {
      const record = await db.studentProfile.get('current');
      return record || null;
    } catch (err) {
      console.warn('Failed to read profile from IndexedDB, falling back to localStorage:', err);
      const fallback = localStorage.getItem('grantly_profile_fallback');
      return fallback ? JSON.parse(fallback) : null;
    }
  },

  async saveProfile(profile: Partial<StudentProfile>): Promise<StudentProfile> {
    const existing = await this.getProfile();
    const updated: StudentProfile = {
      ...(existing || DEFAULT_GUEST_PROFILE),
      ...profile,
      updatedAt: new Date().toISOString()
    };

    try {
      await db.studentProfile.put({ ...updated, id: 'current' });
    } catch (err) {
      console.warn('IndexedDB write error, saving to localStorage:', err);
    }

    // Also mirror to localStorage for instantaneous fallback
    try {
      localStorage.setItem('grantly_profile_fallback', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }

    return updated;
  },

  async clearProfile(): Promise<void> {
    await db.studentProfile.delete('current');
    localStorage.removeItem('grantly_profile_fallback');
  }
};

export const bookmarkStorage = {
  async getAll(): Promise<SavedScholarship[]> {
    return db.savedScholarships.toArray();
  },

  async isSaved(scholarshipId: string): Promise<boolean> {
    const item = await db.savedScholarships.get(scholarshipId);
    return Boolean(item);
  },

  async toggleSave(scholarshipId: string, notes?: string): Promise<boolean> {
    const exists = await this.isSaved(scholarshipId);
    if (exists) {
      await db.savedScholarships.delete(scholarshipId);
      return false;
    } else {
      await db.savedScholarships.put({
        scholarshipId,
        savedAt: new Date().toISOString(),
        notes
      });
      return true;
    }
  },

  async remove(scholarshipId: string): Promise<void> {
    await db.savedScholarships.delete(scholarshipId);
  }
};

export const applicationStorage = {
  async getAll(): Promise<ApplicationRecord[]> {
    return db.applications.orderBy('createdAt').reverse().toArray();
  },

  async getById(id: string): Promise<ApplicationRecord | undefined> {
    return db.applications.get(id);
  },

  async getByScholarshipId(scholarshipId: string): Promise<ApplicationRecord | undefined> {
    return db.applications.where('scholarshipId').equals(scholarshipId).first();
  },

  async createOrUpdate(app: Partial<ApplicationRecord> & { scholarshipId: string }): Promise<ApplicationRecord> {
    const existing = await this.getByScholarshipId(app.scholarshipId);
    const now = new Date().toISOString();

    const record: ApplicationRecord = {
      id: existing ? existing.id : `app_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      scholarshipId: app.scholarshipId,
      scholarshipName: app.scholarshipName || existing?.scholarshipName || 'Scholarship Application',
      provider: app.provider || existing?.provider || '',
      amount: app.amount ?? existing?.amount ?? 0,
      formattedAmount: app.formattedAmount || existing?.formattedAmount || '',
      deadline: app.deadline || existing?.deadline || '',
      status: app.status || existing?.status || 'planning',
      appliedDate: app.appliedDate || existing?.appliedDate,
      notes: app.notes !== undefined ? app.notes : (existing?.notes || ''),
      documentsChecklist: app.documentsChecklist || existing?.documentsChecklist || [],
      timeline: existing?.timeline || [
        {
          status: app.status || 'planning',
          timestamp: now,
          note: 'Application record created'
        }
      ],
      createdAt: existing ? existing.createdAt : now,
      updatedAt: now
    };

    if (existing && app.status && app.status !== existing.status) {
      record.timeline.push({
        status: app.status,
        timestamp: now,
        note: `Status updated to ${app.status.replace('_', ' ')}`
      });
    }

    await db.applications.put(record);
    return record;
  },

  async updateStatus(id: string, status: ApplicationRecord['status'], note?: string): Promise<void> {
    const app = await db.applications.get(id);
    if (!app) return;

    const now = new Date().toISOString();
    app.status = status;
    app.updatedAt = now;
    if (status === 'applied' && !app.appliedDate) {
      app.appliedDate = now.split('T')[0];
    }
    app.timeline.push({
      status,
      timestamp: now,
      note: note || `Application transitioned to ${status.replace('_', ' ')}`
    });

    await db.applications.put(app);
  },

  async delete(id: string): Promise<void> {
    await db.applications.delete(id);
  }
};

/**
 * Complete Data Export & Import
 */
export const dataManager = {
  async exportAllData(): Promise<string> {
    const profile = await profileStorage.getProfile();
    const saved = await bookmarkStorage.getAll();
    const applications = await applicationStorage.getAll();

    const bundle = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      platform: 'GRANTLY',
      data: {
        profile,
        saved,
        applications
      }
    };

    return JSON.stringify(bundle, null, 2);
  },

  async importData(jsonString: string): Promise<{ success: boolean; message: string }> {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.data) {
        throw new Error('Invalid backup file format: missing data container.');
      }

      if (parsed.data.profile) {
        await profileStorage.saveProfile(parsed.data.profile);
      }

      if (Array.isArray(parsed.data.saved)) {
        await db.savedScholarships.clear();
        await db.savedScholarships.bulkPut(parsed.data.saved);
      }

      if (Array.isArray(parsed.data.applications)) {
        await db.applications.clear();
        await db.applications.bulkPut(parsed.data.applications);
      }

      return { success: true, message: 'All student data successfully imported and synced!' };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to parse JSON backup file.';
      return { success: false, message };
    }
  },

  async clearAllData(): Promise<void> {
    await db.studentProfile.clear();
    await db.savedScholarships.clear();
    await db.applications.clear();
    localStorage.removeItem('grantly_profile_fallback');
  }
};
