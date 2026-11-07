import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../index.js';

describe('GRANTLY Backend API Endpoints', () => {
  it('GET /api/health returns 200 and healthy status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.service).toContain('GRANTLY');
  });

  it('GET /api/scholarships returns verified scholarship list', async () => {
    const res = await request(app).get('/api/scholarships');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.meta.totalAvailable).toBeGreaterThan(0);
  });

  it('GET /api/scholarships?q=aicte filters accurately by keyword', async () => {
    const res = await request(app).get('/api/scholarships?q=aicte');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.data.every((s: any) =>
      s.name.toLowerCase().includes('aicte') ||
      s.provider.toLowerCase().includes('aicte') ||
      s.tags.some((t: string) => t.toLowerCase().includes('aicte'))
    )).toBe(true);
  });

  it('GET /api/scholarships/:id returns details of a valid scholarship', async () => {
    const res = await request(app).get('/api/scholarships/nsp-central-sector-2025');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.id).toBe('nsp-central-sector-2025');
    expect(res.body.data.requirements.minPercentage).toBe(80);
  });

  it('GET /api/scholarships/non-existent-id returns 404', async () => {
    const res = await request(app).get('/api/scholarships/non-existent-id');
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });

  it('GET /api/providers/status reports status of all 5 provider adapters', async () => {
    const res = await request(app).get('/api/providers/status');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBe(5);
    const ids = res.body.data.map((p: any) => p.id);
    expect(ids).toContain('myscheme-apisetu');
    expect(ids).toContain('datagov-india');
    expect(ids).toContain('nsp-portal');
    expect(ids).toContain('buddy4study');
    expect(ids).toContain('state-schemes-unified');
  });
});
