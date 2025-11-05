import * as BookController from '../controllers/BookController.js';
import express from 'express';

const bookRouters = express.Router();

bookRouters.get('/all', BookController.fetchBooks);
bookRouters.post('/new', BookController.createBook);
bookRouters.put('/edit/:bookId', BookController.editBooks);
bookRouters.delete('/delete/:bookId', BookController.deleteBooks);
export default bookRouters;