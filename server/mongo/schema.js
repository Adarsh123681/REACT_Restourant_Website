const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require( "jsonwebtoken");
const  mernSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    address: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required : true
    },
    cpassword: {
        type: String,
        required : true
    },
    tokens : [{
        token : {
            type: String,
            required : true
        }
    }]
    
});

 const JWT_SECRET_KEY = "ADARSHTRIPATHIISVERYGOODDOINGMERNDEVELOPMENT";

 mernSchema.pre("save" , async function(next){
    if(this.isModified("password")){
          this.password = await bcrypt.hash(this.password , 12);
          this.cpassword = await bcrypt.hash(this.cpassword , 12);
    }
    next();
})

mernSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id : this.id },JWT_SECRET_KEY.SECRET_KEY);
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}
const user = mongoose.model("adarsh",  mernSchema);
module.exports = user

 