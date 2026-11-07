import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../index.js';

describe('GRANTLY Backend API Endpoints', () => {
  it('GET /api/health returns 200 and healthy status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.service).toContain('GRANTLY');
    expect(res.body.architecture).toBe('web_sourced_public_database');
  });

  it('GET /api/scholarships returns verified scholarship list from web-sourced dataset', async () => {
    const res = await request(app).get('/api/scholarships');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThanOrEqual(50);
    expect(res.body.meta.totalAvailable).toBeGreaterThan(50);
    expect(res.body.meta.indianCount).toBeGreaterThan(0);
    expect(res.body.meta.internationalCount).toBeGreaterThan(0);
  });

  it('GET /api/scholarships?q=aicte filters accurately by keyword', async () => {
    const res = await request(app).get('/api/scholarships?q=aicte');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
    expect(res.body.data.every((s: any) =>
      s.name.toLowerCase().includes('aicte') ||
      s.provider.toLowerCase().includes('aicte') ||
      s.description.toLowerCase().includes('aicte') ||
      s.tags.some((t: string) => t.toLowerCase().includes('aicte'))
    )).toBe(true);
  });

  it('GET /api/scholarships/:id returns details of a valid scholarship by ID or slug', async () => {
    const listRes = await request(app).get('/api/scholarships?limit=1');
    const firstItem = listRes.body.data[0];

    const res = await request(app).get(`/api/scholarships/${firstItem.id}`);
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.id).toBe(firstItem.id);
    expect(res.body.data.name).toBe(firstItem.name);
    expect(res.body.data.officialUrl).toBeDefined();
  });

  it('GET /api/scholarships/non-existent-id returns 404', async () => {
    const res = await request(app).get('/api/scholarships/non-existent-id-404');
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });

  it('GET /api/sources returns verified legitimate public sources', async () => {
    const res = await request(app).get('/api/sources');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(20);
    expect(res.body.meta.totalSources).toBeGreaterThan(20);
  });

  it('GET /api/collection-report returns dataset collection summary and audit', async () => {
    const res = await request(app).get('/api/collection-report');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.summary.totalScholarships).toBeGreaterThan(50);
    expect(res.body.data.dataIntegrityAudit.uniqueIdsValid).toBe(true);
  });

  it('GET /api/providers/status reports web-sourced database architecture', async () => {
    const res = await request(app).get('/api/providers/status');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.summary.dataArchitecture).toBe('web_sourced_public_database');
    expect(res.body.summary.unconfiguredCount).toBe(0);
  });
});
