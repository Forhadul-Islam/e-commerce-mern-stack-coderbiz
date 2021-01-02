const mongoose = require('mongoose');
const {Schema} = mongoose;



const messageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})


const chatRoomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    messages: [messageSchema]

}, {timestamps: true})


module.exports = ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);