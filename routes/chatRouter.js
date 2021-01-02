const express = require('express');
const chatRouter = express.Router();
const chatController = require('../controllers/chatController');

chatRouter.route('/').get(chatController.getAllChatRooms);
chatRouter.route('/').post(chatController.createChatRoom);

module.exports = chatRouter;