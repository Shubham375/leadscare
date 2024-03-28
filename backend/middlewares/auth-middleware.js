const JWT = require("jsonwebtoken");
const userDetails = require("../models/user-models");

const checkJWT = async(req,res,next)=>{
    try {
        const user = req.header("Authorization");
        const token = user.replace("Bearer","").trim();
        if(!user){
            res.status(400).json({msg:"Not Token"})
        }

        const verify = JWT.verify(token,process.env.JWTSK);
        if(!verify){
            res.status(400).json({msg:"Invalid Token"});
        }
        req.user = await userDetails.findOne({email:verify.email}).select({password:0});
        next()
    } catch (error) {
        res.status(400).json({msg:"server error"});
    }
};

module.exports = checkJWT;