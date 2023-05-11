import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { getUrls, getUrl, createUrl, updateUrl, deleteUrl } from '../controllers/c_url.js';
import { validateUrl } from '../middleware/c_url.js';

const router = express.Router();

router.get('/', getUrls);

router.get('/:id', getUrl);

router.patch('/:id', updateUrl);

// Shorter URL Generator
router.post('/', validateUrl, createUrl);

router.delete('/:id', deleteUrl);

export default router;