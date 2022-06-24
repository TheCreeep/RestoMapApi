import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js';
import { DataController, SearchController, SearchByNameController, AllCuisinesController, AllBoroughsController } from '../controllers/data.js';

router.get('/', HomeController);
router.get('/data', DataController);
router.get('/data/search', SearchController);
router.get('/data/name_search', SearchByNameController);
router.get('/data/cuisines', AllCuisinesController);
router.get('/data/boroughs', AllBoroughsController);

export default router