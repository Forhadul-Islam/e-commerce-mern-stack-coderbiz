const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User  = require('../schemas/user');

const serverWork = async (req, res, cart) =>{
    const {_id} = req.user[0];
    const user = await User.findById({_id})
    let cartItem = [];
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        cartItem.push(item.id)
    }
    user.coursesOwned = [...user.coursesOwned, ...cartItem]
    user.markModified('coursesOwned')
    await user.save()

}

exports.singlePayment = async (req, res) =>{
    const user = req.user[0];
    const {username, phone, email, total, token, cart} = req.body;
    const amount = Math.round(parseInt(total * 100))
    try {
        const status = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: token.id,
            description: 'Payment from coderBiz course enrollment!(demo project)'
        })
        serverWork(req, res, cart)
        res.status(200).json(status)
    }catch (err) {
        console.log(err)
        res.status(err.statusCode).json(err.message)
    }
    
}