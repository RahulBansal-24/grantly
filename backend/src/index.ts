import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { scholarshipRouter } from './routes/scholarshipRoutes.js';
import { sourcesRouter } from './routes/sourcesRoutes.js';
import { providerRouter } from './routes/providerRoutes.js';
import { scholarshipRepository } from './services/scholarshipAggregator.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';

// Security Headers
app.use(helmet({
  contentSecurityPolicy: false // Allow API calls from frontend dev server
}));

// CORS Configuration
app.use(cors({
  origin: [FRONTEND_ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:4173'],
  credentials: true
}));

app.use(express.json({ limit: '1mb' }));

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests created from this IP, please try again after 15 minutes.'
    }
  }
});

app.use('/api/', apiLimiter);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'GRANTLY Scholarship Web-Sourced Database Engine',
    version: '2.0.0',
    architecture: 'web_sourced_public_database'
  });
});

// Direct Collection Report endpoint
app.get('/api/collection-report', async (req, res) => {
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

// Routes
app.use('/api/scholarships', scholarshipRouter);
app.use('/api/sources', sourcesRouter);
app.use('/api/providers', providerRouter);

// Centralized Error Handler
app.use(errorHandler);

export { app };

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`GRANTLY Backend API Server listening on port ${PORT}`);
  });
}
