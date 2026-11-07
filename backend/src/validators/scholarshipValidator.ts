import { z } from 'zod';

export const scholarshipQuerySchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  providerCategory: z.string().optional(),
  educationLevel: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  fundingType: z.string().optional(),
  verificationStatus: z.string().optional(),
  maxIncome: z.string().regex(/^\d+$/).transform(Number).optional(),
  minPercentage: z.string().regex(/^\d+$/).transform(Number).optional(),
  gender: z.enum(['all', 'female', 'male', 'transgender']).optional(),
  status: z.enum(['open', 'closed', 'upcoming', 'coming_soon']).optional(),
  sortBy: z.enum(['relevance', 'deadline', 'amount', 'newest']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
  page: z.string().regex(/^\d+$/).transform(Number).optional(),
  limit: z.string().regex(/^\d+$/).transform(Number).optional()
});

export const syncQuerySchema = z.object({
  force: z.enum(['true', 'false']).transform(v => v === 'true').optional()
});
