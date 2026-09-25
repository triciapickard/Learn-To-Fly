import express, { type Express } from 'express';
import { API_BASE_PATH } from '@shared/constants.js';

export function createApp(): Express {
  const app = express();

  app.get(`${API_BASE_PATH}/health`, (_req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
}
