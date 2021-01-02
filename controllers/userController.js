const User = require("../schemas/user")

exports.getUsers = async (req, res, next) =>{
    try {
        const users = await User.find({}).populate('coursesOwned')
        res.status(200).json(users)
    } catch (err) {
        res.status.json('You might not allowed to get the data. Sorry sir!')
    }
}

exports.updateUser = async (req, res, next) =>{
 try {
      const updatedData = req.body;
      const userId = req.params.id;
     const user = await User.findById({_id:userId})
     if(user){
            const response = await User.updateOne({_id: userId}, {$set: updatedData}, { runValidators: true })
            res.status(200).json(response)
     }
     res.status(400),json('user not exists!')

     
 } catch (err) {
     res.status(403).json('faild to update!')
 }
}