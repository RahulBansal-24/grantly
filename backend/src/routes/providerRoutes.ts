import { Router, Request, Response } from 'express';
import { scholarshipRepository } from '../services/scholarshipAggregator.js';

export const providerRouter = Router();

// Backward compatible endpoint for system monitoring
providerRouter.get('/status', async (req: Request, res: Response) => {
  const sources = await scholarshipRepository.getSources();
  const report = await scholarshipRepository.getCollectionReport();

  const statuses = sources.map(s => ({
    id: s.id,
    name: s.name,
    isConfigured: true,
    isLiveAvailable: true,
    requiresCredentials: false,
    sourceType: s.sourceType,
    region: s.region,
    recordsVerified: s.recordsVerified || 0
  }));

  res.json({
    success: true,
    data: statuses,
    summary: {
      totalProviders: statuses.length,
      configuredCount: statuses.length,
      unconfiguredCount: 0,
      totalVerifiedScholarships: report?.summary.totalScholarships || 0,
      dataArchitecture: 'web_sourced_public_database'
    }
  });
});

providerRouter.post('/sync', async (req: Request, res: Response) => {
  const result = await scholarshipRepository.getScholarships(true);
  res.json({
    success: true,
    message: 'Reloaded scholarship records from local verified dataset.',
    data: result
  });
});
