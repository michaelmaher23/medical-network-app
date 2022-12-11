const jwt = require("jsonwebtoken");
const User =require( "../Models/UserModel.js");
const auth = async (req, res, next) => {
    try {  
      let  token = req.headers.authorization.split(" ")[1];
     
      if(!token) 
       res.status(400).json({msg: "Invalid Authentication."})
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET )
      if(!decoded) 
       res.status(400).json({msg: "Invalid Authentication."})
  
      const user = await User.findOne({_id: decoded.id}).select("-password")
      if(!user)
       res.status(400).json({msg: "User does not exist."})
       console.log(user.email)
      req.user = user;
  
      next()
    } catch (err) {
      return res.status(404).json({msg: err.message})
    }
  }
  module.exports= {  auth };
