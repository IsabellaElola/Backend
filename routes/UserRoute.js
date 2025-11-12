import * as  UserController from '../controllers/UserController.js'
import express from 'express';

const userRouters = express.Router();

userRouters.post('/new', UserController.register);

export default userRouters;
