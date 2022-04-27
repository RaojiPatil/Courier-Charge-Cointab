const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    weight:{type:String},
    pincode:{type:String},
    order_type:{type:String},
    zone:{type:String}
})

const User = mongoose.model("User", userSchema);
module.exports = User;