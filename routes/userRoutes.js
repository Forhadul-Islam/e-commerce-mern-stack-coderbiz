const express = require('express');
const { loadUserToRequest } = require('../controllers/authController');
const {Router} = express;
const userRouter = Router();
const userController = require('../controllers/userController');

userRouter.route('/').get(userController.getUsers);
userRouter.route('/:id').put(userController.updateUser);

module.exports = userRouter;