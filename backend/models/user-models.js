const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    fristname:{
        type: String,require:true
    },
    lastname:{
        type: String,require:true
    },
    email:{
        type: String,require:true
    },
    number:{
        type: String,require:true
    },
    sponsorname:{
        type: String,require:false
    },
    sponsoremail:{
        type: String,require:false
    },
    password:{
        type: String,require:true
    },
    purchasepack:{
        type: String,require:true
    },
    refferalcode:{
        type: String,require:true
    },
    reffers:{
        type: String,default:"0"
    },
    earnings:{type:Array,default:[]},
    isadmin:{
        type: Boolean,default:false
    }
});

UserSchema.methods.generateToken = function(){
    try {
        return JWT.sign(
            {
                userId:this._id.toString(),
                fristname:this.fristname,
                lastname:this.lastname,
                email:this.email
            },
            process.env.JWTSK,
            {
                expiresIn:"20d"
            }
        )
    } catch (error) {
        console.log(error);
    }
}



const User = new mongoose.model("User",UserSchema);

module.exports = User;