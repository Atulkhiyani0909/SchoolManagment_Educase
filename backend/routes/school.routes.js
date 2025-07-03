// routes/school.routes.js
import express from 'express';
import { getAllSchools, addSchool ,intialRoute} from '../controllers/school.controllers.js';

const router = express.Router();

router.get('/listSchools', getAllSchools);
router.post('/addSchool', addSchool);
router.get('/',intialRoute);

export default router;
