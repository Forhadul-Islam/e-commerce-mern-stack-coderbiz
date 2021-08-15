const express = require('express');
const { verifyUser, verifyAdmin } = require('../controllers/authController');
const productRouter = express.Router();
const productController = require('../controllers/productController')


// productRouter.route('/').post(productController.addSingleProduct)
// productRouter.route('/').get(productController.getAllProducts)

productRouter.route('/')
    .get(productController.getAllProducts)
    .post(verifyAdmin, productController.addSingleProduct)



productRouter.route('/:id')
    .get(productController.getProductById)
    .put(verifyAdmin, productController.updateProductById)
    .delete(verifyAdmin, productController.removeSingleProduct)
        


module.exports = productRouter;