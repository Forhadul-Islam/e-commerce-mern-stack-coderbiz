const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController')


authRouter.route('/signup').post(authController.signup)
authRouter.route('/login').post(authController.login)
authRouter.route('/logout').get(authController.logout)
authRouter.route('/checkuser').get(authController.checkUser)


module.exports = authRouter;



