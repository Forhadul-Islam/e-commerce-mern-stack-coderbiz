const chatRoom = require("../schemas/chatRoom");

exports.getAllChatRooms = async (req, res, next) =>{
    try {
       const rooms = await chatRoom.find({}).populate('creator')
       res.json(rooms)
    } catch (err) {
        
    }
}


exports.createChatRoom = async (req, res, next) =>{
    try {
        const {name, creator} = req.body;
        const room = await chatRoom.create({
            name,
            creator
        })
        res.json(room)

    } catch (error) {
        
    }
}