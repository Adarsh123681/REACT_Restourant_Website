const mongoose = require("mongoose");

const  orderSchema = new mongoose.order({
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
    quantity : {
        type : Number,
        required : true
    }
});

const orderFood = mongoose.model("Order",  orderSchema);
module.exports = orderFood
  