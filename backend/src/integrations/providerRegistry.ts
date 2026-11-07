import { MySchemeProvider } from './mySchemeProvider.js';
import { DataGovProvider } from './dataGovProvider.js';
import { NspProvider } from './nspProvider.js';
import { Buddy4StudyProvider } from './buddy4studyProvider.js';
import { StateSchemeProvider } from './stateSchemeProvider.js';
import { BaseScholarshipProvider } from './baseProvider.js';
import { ProviderStatus } from '../types/index.js';

export class ProviderRegistry {
  private providers: BaseScholarshipProvider[] = [
    new MySchemeProvider(),
    new DataGovProvider(),
    new NspProvider(),
    new Buddy4StudyProvider(),
    new StateSchemeProvider()
  ];

  public getAllProviders(): BaseScholarshipProvider[] {
    return this.providers;
  }

  public getProvider(id: string): BaseScholarshipProvider | undefined {
    return this.providers.find(p => p.id === id);
  }

  public getAllStatuses(): ProviderStatus[] {
    return this.providers.map(p => p.getStatus());
  }
}

export const providerRegistry = new ProviderRegistry();
