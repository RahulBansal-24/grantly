import { Router, Request, Response, NextFunction } from 'express';
import { scholarshipRepository } from '../services/scholarshipAggregator.js';
import { scholarshipQuerySchema } from '../validators/scholarshipValidator.js';
import { Scholarship } from '../types/index.js';

export const scholarshipRouter = Router();

scholarshipRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = scholarshipQuerySchema.parse(req.query);
    const forceRefresh = req.query.refresh === 'true';

    const { scholarships, total, indianCount, internationalCount, activeCount, lastSynchronizedAt } =
      await scholarshipRepository.getScholarships(forceRefresh);

    let filtered = [...scholarships];

    // Search query
    if (query.q) {
      const q = query.q.toLowerCase().trim();
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.provider.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        (s.briefSummary && s.briefSummary.toLowerCase().includes(q)) ||
        (s.country && s.country.toLowerCase().includes(q)) ||
        (s.state && s.state.toLowerCase().includes(q)) ||
        s.coursesAndStreams.some(c => c.toLowerCase().includes(q)) ||
        s.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Country filter
    if (query.country) {
      const targetCountry = query.country.toLowerCase();
      filtered = filtered.filter(s => s.country && s.country.toLowerCase() === targetCountry);
    }

    // Category filter
    if (query.category) {
      filtered = filtered.filter(s => s.categories.includes(query.category as any));
    }

    // Provider Category
    if (query.providerCategory) {
      filtered = filtered.filter(s => s.providerCategory === query.providerCategory);
    }

    // Education Level
    if (query.educationLevel) {
      filtered = filtered.filter(s => s.educationLevels.includes(query.educationLevel as any));
    }

    // State
    if (query.state) {
      const stateQuery = query.state.toLowerCase();
      filtered = filtered.filter(s => {
        if (s.state && s.state.toLowerCase() === stateQuery) return true;
        if (!s.requirements.eligibleStates || s.requirements.eligibleStates.length === 0) return true;
        if (s.requirements.eligibleStates.includes('All India')) return true;
        return s.requirements.eligibleStates.some(st => st.toLowerCase() === stateQuery);
      });
    }

    // Funding Type
    if (query.fundingType) {
      filtered = filtered.filter(s => s.fundingType === query.fundingType);
    }

    // Verification Status
    if (query.verificationStatus) {
      filtered = filtered.filter(s => s.verificationStatus === query.verificationStatus);
    }

    // Gender
    if (query.gender && query.gender !== 'all') {
      filtered = filtered.filter(s => {
        return !s.requirements.gender || s.requirements.gender === 'all' || s.requirements.gender === query.gender;
      });
    }

    // Status
    if (query.status) {
      filtered = filtered.filter(s => s.status === query.status);
    }

    // Income
    if (query.maxIncome !== undefined) {
      filtered = filtered.filter(s => {
        if (!s.requirements.maxAnnualIncome) return true;
        return query.maxIncome! <= s.requirements.maxAnnualIncome;
      });
    }

    // Percentage
    if (query.minPercentage !== undefined) {
      filtered = filtered.filter(s => {
        if (!s.requirements.minPercentage) return true;
        return query.minPercentage! >= s.requirements.minPercentage;
      });
    }

    // Sorting
    if (query.sortBy === 'amount') {
      filtered.sort((a, b) => query.sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount);
    } else if (query.sortBy === 'deadline') {
      filtered.sort((a, b) => {
        const da = new Date(a.deadline).getTime();
        const db = new Date(b.deadline).getTime();
        return query.sortOrder === 'desc' ? db - da : da - db;
      });
    } else if (query.sortBy === 'newest') {
      filtered.sort((a, b) => {
        const da = new Date(a.lastVerifiedDate).getTime();
        const db = new Date(b.lastVerifiedDate).getTime();
        return db - da;
      });
    }

    // Pagination
    const page = query.page || 1;
    const limit = query.limit || 50;
    const startIndex = (page - 1) * limit;
    const paginated = filtered.slice(startIndex, startIndex + limit);

    res.json({
      success: true,
      data: paginated,
      meta: {
        totalFiltered: filtered.length,
        totalAvailable: total,
        page,
        limit,
        totalPages: Math.ceil(filtered.length / limit),
        indianCount,
        internationalCount,
        activeCount,
        lastSynchronizedAt
      }
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/scholarships/:id - Details by ID or Slug
scholarshipRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = String(req.params.id);
    const scholarship = await scholarshipRepository.getScholarshipById(id);

    if (!scholarship) {
      res.status(404).json({
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: `Scholarship with ID or Slug '${id}' was not found in the verified dataset.`
        }
      });
      return;
    }

    res.json({
      success: true,
      data: scholarship
    });
  } catch (err) {
    next(err);
  }
});
