const mongoose = require("mongoose");

let RegisterjwtUser = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    }

})

module.exports = mongoose.model("RegisterjwtUser", RegisterjwtUser);