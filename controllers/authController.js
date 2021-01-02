const User = require('../schemas/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {ErrorHandler} = require('../utils/ErrorHandler');


require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;
const JWT_EXPIRATION_NUM = process.env.JWT_EXPIRATION_NUM;
const NODE_ENV = process.env.NODE_ENV;

const encryptPassword = async (password) =>{
    return await bcrypt.hash(password, 12)
}

//generating token
const makeJWT = (id) =>{
    return jwt.sign({id},
            JWT_SECRET, 
            {expiresIn: JWT_EXPIRES}
        )
}

//function for sending
const sendToken = (user, statusCode, req, res) =>{
    const token = makeJWT(user._id);
    const options = {
        expires: new Date(Date.now() + JWT_EXPIRATION_NUM),
        secure: NODE_ENV === 'production',
        httpOnly: NODE_ENV === 'production',
    };
    res.cookie('jwt', token, options);
    res.status(statusCode).json({
        status: 'success',
        user, 
        token
    })
}

exports.signup = async (req, res, next) =>{
    try{
        const {username,phone, email, password} = req.body;
        if(!phone || phone.length !== 11){
           return next(new ErrorHandler(400, 'You must use a valid phone number!'));
        }
        if(!username){
           return next(new ErrorHandler(400, 'You must fill your username!'));
        }
        if(!email || !password){
           return next(new ErrorHandler(400, 'Please enter an email and password!'));
        }
        if(password.length < 7){
           return next(new ErrorHandler(401, "Ops! Password must be at least 7 characters"))
        }
        const hashedPassword = await encryptPassword(password);
        const newUser = await User.create({
            email, 
            password: hashedPassword,
            username,
            phone
        })
        newUser.password = null;
        sendToken(newUser, 201, req, res)
    }catch(err) {
        return next(err)
    }
}


exports.login = async (req, res, next) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return next(new ErrorHandler(400, 'Please enter an email and password!'));
         }
        const user = await User.findOne({email}).populate('coursesOwned').select('+password');
        if(!user){ 
            return next(new ErrorHandler(400, "Ops!Incorrect email or password!"))
        }
        const compared = await bcrypt.compare(password, user.password);
        if(!compared) {
            return next(new ErrorHandler(400, "Ops! Incorrect email or password!"))
        }
        user.password = null
        sendToken(user, 200, req, res)
    }catch(err){
       return next(err)
    }
}



exports.logout = async (req, res, next) =>{
    try {
        const options = {
            expires: new Date(Date.now() + 10000),
            secure: NODE_ENV === 'production',
            httpOnly: NODE_ENV === 'production',
        };
        res.cookie('jwt', 'ExpiredToken', options);
        res.status(200).json({
            status: 'success'
        })
    } catch (err) {
        next(err)
    }
}

const decryptJWT = async (token) =>{
    return await jwt.verify(token, JWT_SECRET);
}

exports.checkJwt = async (token, next) =>{
    try {
        const jwtInfo = await decryptJWT(token);
    if(jwtInfo){
        const user = await User.find({_id: jwtInfo.id});
        if(!user){
            next(new ErrorHandler('User not found'));
        }
        return user;
    }
    } catch (err) {
        console.log(err)
    }
    
}

exports.checkUser = async (req, res, next) =>{
    try {
        const jwt = await req.headers.authorization.split(' ')[1]
        const token = JSON.parse(jwt);
        // let token;
        // if(req.cookies) token = req.cookies.jwt;
        if(!token || token == undefined || token === 'ExpiredToken'){
            next(
                new ErrorHandler(401, 'User does not have a valid credentials')
            )
        }
        const jwtInfo = await decryptJWT(token);
        if(jwtInfo.exp >  Date.now()/1000){
            const user = await User.find({_id:jwtInfo.id}).populate('coursesOwned');
            if(!user) {
                next(new ErrorHandler(401, 'User not found'))
            }else{
                console.log(user[0])
                res.status(200).json({
                    status: 'success',
                    user
                })
            }
        }else{
            const err = new ErrorHandler(401, 'User does not have a valid credentials');
            next(err)
        }
    } catch (err) {
        next(err)
    }
}

exports.loadUserToRequest = async (req, res, next) =>{
   try {
    let token;
    if(req.cookies && req.cookies.jwt) token = req.cookies.jwt;
    if(!token || token==="ExpiredToken"){
        next(new ErrorHandler('Invalid credentials!'));
    }
    const jwtInfo = await decryptJWT(token);
    if(jwtInfo){
        const user = await User.find({_id: jwtInfo.id});
        if(user) {
            req.user = user
            next()
        }else{
            next(new ErrorHandler('user not found!'))
        }
       
    }
   } catch (err) {
       next(err)
   }
}


const getUser = async (req, res, next) =>{
    try {
        let token;
        if(req.cookies && req.cookies.jwt) token = req.cookies.jwt;
        if(!token || token==="ExpiredToken"){
            next(new ErrorHandler('Invalid credentials!'));
        }
        const jwtInfo = await decryptJWT(token);
        if(jwtInfo){
            const user = await User.find({_id: jwtInfo.id});
            if(user) {
                return user[0];
            }else{
                next(new ErrorHandler('user not found!'))
            }
           
        }
       } catch (err) {
           next(err)
       }
}


exports.verifyUser = async (req, res, next) =>{
    try {
        const user = await getUser(req, res, next)
        if(user.clearance === 'user' || user.clearance === 'admin'){
            next()
        }else{
            res.status(403).json('You are not authorized')
        }
    } catch (err) {
        res.status(403).json('Sorry! You are unknown for me to perform this operation!')
    }

}
exports.verifyAdmin = async (req, res, next) =>{
    try {
        const user = await getUser(req, res, next)
        if(user.clearance === 'admin'){
            next()
        }else{
            res.status(403).json('You are not authorized')
        }
    } catch (err) {
        res.status(403).json('You are not allowed to perform this operation')
    }

}