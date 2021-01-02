const mongoose = require('mongoose');
const { stringify } = require('querystring');
const validator = require('validator');
const Course = require('./course')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"]
    },
    email:{
        type: String,
        unique: true,
        lowercase:true,
        required: [true, 'Email is invalid'],
        validate: [validator.isEmail, 'Email is invalid!']
    },
    phone:{
        type: Number
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    coursesOwned:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    clearance: {
        type: String,
        enum: {
            values: ['user', 'admin', 'instructor'],
            message: 'The clearance value is invalid'
        },
        default: 'user'
    } 
}, {timestamps: true});


const User = mongoose.model('User', userSchema);

module.exports = User;