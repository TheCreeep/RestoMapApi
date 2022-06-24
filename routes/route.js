import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js';
import { DataController, SearchController } from '../controllers/data.js';

router.get('/', HomeController);
router.get('/data', DataController);
router.get('/data/name_search', SearchController);


export default router