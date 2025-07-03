// routes/school.routes.js
import express from 'express';
import { getAllSchools, addSchool } from '../controllers/school.controllers.js';

const router = express.Router();

router.get('/listSchools', getAllSchools);
router.post('/addSchool', addSchool);

export default router;
