import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { createCustomUrl } from '../controllers/customurl.js';

const router = express.Router();

router.post('/custom', createCustomUrl);

export default router;