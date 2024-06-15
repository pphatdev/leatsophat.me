import express from 'express';
export const ROUTE = express();
import path from 'path';
import { fileURLToPath } from 'url';
const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);

ROUTE.use(express.static(path.join(__dirname, '../public')));
ROUTE.use('/css', express.static(path.join(__dirname, '../public/css')));
ROUTE.use('/js', express.static(path.join(__dirname, '../public/js')));
ROUTE.use('/img', express.static(path.join(__dirname, '../public/images')));

export default ROUTE;