const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})


const courseSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    instructor: {
        type: String,
        required: true,
        trim: true
    },
    features: {
        type: Array
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    sale: {
        type: Number || Boolean,
        // max: 1,
        // min: .01,
        required: false,
        trim: true
    },
    comments: [commentSchema]
}, {timestamps: true})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;