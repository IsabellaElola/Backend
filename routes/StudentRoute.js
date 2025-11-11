import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const studentRouters = express.Router();

studentRouters.get('/all', StudentController.fetchStudents);
studentRouters.post('/new', StudentController.createStudents);
studentRouters.put('/edit/:studentId', StudentController.editStudents);
studentRouters.delete('/delete/:studentId', StudentController.deleteStudents);
export default studentRouters;