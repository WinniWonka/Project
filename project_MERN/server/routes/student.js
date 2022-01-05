import express from 'express'
import { getStudents, createStudent } from '../controllers/student.js';
import student from '../models/student.js';

const router = express.Router();

//callback function
router.get('/', getStudents);
router.post('/', createStudent);

export default router;