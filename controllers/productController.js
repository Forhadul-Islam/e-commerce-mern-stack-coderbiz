const Course = require('../schemas/course');
const { verifyUser } = require('./authController');


exports.getAllProducts = async (req, res, next) =>{
    try {
        const courses = await Course.find({});
        res.status(200).json(courses);
        
    } catch (err) {
        console.log(err)
        res.status(404).json('cannot provide result')
    }
    
}

exports.addSingleProduct = async (req, res, next) => {
    const course = req.body;
    try {
       const product = await Course.create(course);
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
        res.status(500).json('something went wrong! could not added product')
    }
    
}


exports.getProductById = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const product = await Course.findById({_id: id});
        res.status(200).json(product)
    } catch (err) {
        res.status(404).json("product not found! Sorry :(")
    }
}


exports.updateProductById = async (req, res, next) =>{
    try {
        const updatedData = req.body;
        const productId = req.params.id
        const product = await Course.findOneAndUpdate({_id: productId}, {$set: {...updatedData}, returnOriginal: true})
        console.log(updatedData)
        console.log(productId)
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json('Product could not update')
    }
}



exports.removeSingleProduct = async (req, res, next) =>{
    try {

        const id = req.params.id
        const response = await Course.findByIdAndDelete(id);
        console.log(id, response)
        res.status(200).json(response ? 'Product Deleted Successfully': "sorry the product not exists")
    } catch (err) {
        console.log(err)
        res.status(404).json('You are unauthorize to delete a product!')
    }
}


