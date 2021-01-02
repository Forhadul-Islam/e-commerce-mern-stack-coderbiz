const express = require('express');
const { loadUserToRequest } = require('../controllers/authController');
const stripeRouter = express.Router();
const stripeController = require('../controllers/stripeController');


stripeRouter.use(loadUserToRequest);
stripeRouter.route('/singlePayment').post(stripeController.singlePayment);


module.exports = stripeRouter;