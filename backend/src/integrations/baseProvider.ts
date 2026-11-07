import { Scholarship, ProviderStatus } from '../types/index.js';

export interface IScholarshipProvider {
  id: string;
  name: string;
  officialDocUrl: string;

  getStatus(): ProviderStatus;
  fetchScholarships(): Promise<Scholarship[]>;
  normalizeScholarship(raw: any): Scholarship | null;
  validateScholarship(scholarship: Scholarship): boolean;
}

export abstract class BaseScholarshipProvider implements IScholarshipProvider {
  abstract id: string;
  abstract name: string;
  abstract officialDocUrl: string;
  abstract credentialInstructions: string;

  protected lastSyncTime: string | null = null;
  protected lastItemCount: number = 0;
  protected lastErrorMessage: string | null = null;

  public getStatus(): ProviderStatus {
    const isConfigured = this.checkIsConfigured();
    return {
      id: this.id,
      name: this.name,
      isConfigured,
      isLiveAvailable: isConfigured && !this.lastErrorMessage,
      requiresCredentials: this.requiresCredentials(),
      lastSyncTime: this.lastSyncTime,
      itemsFetched: this.lastItemCount,
      statusMessage: this.lastErrorMessage
        ? `Sync failed: ${this.lastErrorMessage}`
        : isConfigured
        ? 'Adapter configured and operational'
        : 'Credentials required for live synchronization. Operating on verified curated fallback.',
      officialDocUrl: this.officialDocUrl,
      credentialInstructions: this.credentialInstructions
    };
  }

  abstract checkIsConfigured(): boolean;
  abstract requiresCredentials(): boolean;
  abstract fetchScholarships(): Promise<Scholarship[]>;
  abstract normalizeScholarship(raw: any): Scholarship | null;

  public validateScholarship(scholarship: Scholarship): boolean {
    if (!scholarship.id || !scholarship.name || !scholarship.provider) {
      return false;
    }
    if (!scholarship.deadline || !scholarship.officialUrl) {
      return false;
    }
    return true;
  }
}
