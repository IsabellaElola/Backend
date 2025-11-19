import * as BookController from '../controllers/BookController.js';
import express from 'express';
import checktoken from '../middleware/authentcationHandler.js';

const bookRouters = express.Router();

bookRouters.use(checktoken);
bookRouters.get('/all', BookController.fetchBooks);
bookRouters.post('/new', BookController.createBook);
bookRouters.put('/edit/:bookId', BookController.editBooks);
bookRouters.delete('/delete/:bookId', BookController.deleteBooks);
export default bookRouters;

