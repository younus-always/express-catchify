import { describe, it, expect, beforeEach } from 'vitest';
import express from 'express';
import request from 'supertest';
import catchify from '../index.js';

describe('express-catchify', () => {
      let app;

      beforeEach(() => {
            app = express();

            // Example async route
            app.get('/async', catchify(async (req, res) => {
                  res.json({ message: 'success' });
            }));

            // Example async route that throws
            app.get('/error', catchify(async () => {
                  throw new Error('Test error');
            }));

            // Error handler
            app.use((err, req, res, next) => {
                  res.status(500).json({ message: err.message });
            });
      });

      it('should return success for async route', async () => {
            const res = await request(app).get('/async');
            expect(res.status).toBe(200);
            expect(res.body.message).toBe('success');
      });

      it('should catch async errors', async () => {
            const res = await request(app).get('/error');
            expect(res.status).toBe(500);
            expect(res.body.message).toBe('Test error');
      });
});
