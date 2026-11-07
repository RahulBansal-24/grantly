import { Router, Request, Response } from 'express';
import { scholarshipRepository } from '../services/scholarshipAggregator.js';

export const sourcesRouter = Router();

// GET /api/sources - List all legitimate public sources monitored by GRANTLY
sourcesRouter.get('/', async (req: Request, res: Response) => {
  const sources = await scholarshipRepository.getSources();
  res.json({
    success: true,
    data: sources,
    meta: {
      totalSources: sources.length,
      operationalCount: sources.filter(s => s.status === 'operational').length,
      categories: Array.from(new Set(sources.map(s => s.sourceType)))
    }
  });
});

// GET /api/sources/report or /api/collection-report - Dataset verification audit & statistics
sourcesRouter.get('/report', async (req: Request, res: Response) => {
  const report = await scholarshipRepository.getCollectionReport();
  if (!report) {
    res.status(404).json({
      success: false,
      error: {
        code: 'REPORT_NOT_FOUND',
        message: 'Collection report has not been generated yet.'
      }
    });
    return;
  }

  res.json({
    success: true,
    data: report
  });
});
