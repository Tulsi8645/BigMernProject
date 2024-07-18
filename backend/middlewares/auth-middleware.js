const jwt= require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware=async(req,res,next)=>{
    const token=req.header("Authorization")
    
    if(!token){
        //if token doesnt exist, we will receive a 401 unauthorized HTTP response
    
    return res.status(401).json({message:"Unauthorized HTTP,Token not provided"});
    }
    //Assuming token is in the format "Bearer <jwtToken> "
    const jwtToken=token.replace("Bearer","").trim();
    console.log("token from auth middleware", jwtToken);

    try {
        const isVerified=jwt.verify(jwtToken, process.env.JWT_SECRET_kEY);
        
        const userData=await User.findOne({email:isVerified.email});
        console.log(isVerified);
        select({
            password:0,
        });
        console.log(userData);
        req.user=userData;
        req.token=token;
        req.userID=userData._id;

        next()  
    } catch (error) {
       return res.status(401).json({message:"Unauthorized HTTP,Token not provided"}); 
    }
    
    
};

module.exports=authMiddleware;