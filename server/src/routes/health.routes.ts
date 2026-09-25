import { Router } from 'express';
import { getHealth } from '../controllers/health.controller.js';

export function healthRouter(gitSha: string | undefined): Router {
  const router = Router();
  router.get('/health', getHealth(gitSha));
  return router;
}
