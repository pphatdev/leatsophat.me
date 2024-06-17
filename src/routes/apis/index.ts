import express from 'express';
import { ROUTE as USERS } from './users.js';
import { VERSION } from '../../../configs/index.js';
import { info } from '../../../configs/info.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);
export const ROUTE = express();

/**
 * Static Route
*/
const API = `/api/${VERSION}`


/**
 * User Route Control
 *--------------------------------------------------------------|
 * Method | endpoint                    | middleware            |
 *--------------------------------------------------------------|
 * POST   | /api/${VERSION}/users       |                       |
 * GET    | /api/${VERSION}/users       |                       |
 * GET    | /api/${VERSION}/users/:id   |                       |
 * PUT    | /api/${VERSION}/users       |                       |
 * DELETE | /api/${VERSION}/users/:id   |                       |
 *--------------------------------------------------------------|
*/
ROUTE.use(`${API}/users` , USERS)

export default ROUTE;