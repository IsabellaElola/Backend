import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const studentRouters = express.Router();

studentRouters.get('/all', StudentController.fetchchStudent);
studentRouters.post('/new', StudentController.createStudent);
studentRouters.put('/edit/:studnetId', BookController.editStudent);
studentRouters.delete('/delete/:studentId', BookController.deleteStudent);
export default studentRouters;