import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { getUrls, getUrl, createUrl, deleteUrl } from '../controllers/url.js';

const router = express.Router();

router.get('/', getUrls);

router.get('/:id', getUrl);

// Shorter URL Generator
router.post('/', createUrl);

router.delete('/:id', deleteUrl);

export default router;