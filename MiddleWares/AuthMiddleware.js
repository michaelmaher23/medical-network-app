const jwt =require( "jsonwebtoken");

const User =require( "../Models/UserModel.js");
const { errorHandler } = require("./Error.js");

const protect = async (req, res, next) => {

try{ 
   let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded)
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("the token failed please , try again in onother time");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("We need to know if you are the real owner of this account");
  }}catch(err){
  errorHandler(err,req,res)
}
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an Admin");
  }

};
module.exports= { protect, admin };
