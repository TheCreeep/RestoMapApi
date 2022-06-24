import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js';
import {
    DataController,
    SearchController,
    SearchByNameController,
    AllCuisinesController,
    AllBoroughsController,
    SearchByIdController
} from '../controllers/data.js';

import { AddGradeController } from '../controllers/add.js';

router.get('/', HomeController);
router.get('/data', DataController);
router.get('/data/search', SearchController);
router.get('/data/name_search', SearchByNameController);
router.get('/data/id_search', SearchByIdController);
router.get('/data/cuisines', AllCuisinesController);
router.get('/data/boroughs', AllBoroughsController);
router.post('/data/add_grade', AddGradeController);

export default router