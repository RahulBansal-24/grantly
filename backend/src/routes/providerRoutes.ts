import { Router, Request, Response } from 'express';
import { providerRegistry } from '../integrations/providerRegistry.js';
import { scholarshipAggregator } from '../services/scholarshipAggregator.js';

export const providerRouter = Router();

providerRouter.get('/status', (req: Request, res: Response) => {
  const statuses = providerRegistry.getAllStatuses();
  res.json({
    success: true,
    data: statuses,
    summary: {
      totalProviders: statuses.length,
      configuredCount: statuses.filter(s => s.isConfigured).length,
      unconfiguredCount: statuses.filter(s => !s.isConfigured).length
    }
  });
});

providerRouter.post('/sync', async (req: Request, res: Response) => {
  const result = await scholarshipAggregator.getScholarships(true);
  res.json({
    success: true,
    message: 'Triggered synchronization across all configured scholarship adapters.',
    data: result
  });
});
