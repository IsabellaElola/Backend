import * as  UserController from '../controllers/UserController.js'
import express from 'express';

const userRouters = express.Router();

userRouters.post('/new', UserController.register);
userRouters.post('/login', UserController.login);

export default userRouters;
