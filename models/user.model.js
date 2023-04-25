const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        minLength: 5,
        maxLength: 50,
        required: true,
        match: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        match: /\S+@\S+\.\S+/,
        lowercase: true
    },
    createdAt:{
        type: Date,
        immutable: true,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default:Date.now,
   },
   userType:{
        type: String,
        required: true,
        default: "customer"
   },
   userStatus:{
    type: String,
    required: true,
    default: "approved"
   } 
});
userSchema.pre('save', function(next) {
    const hashedPassword = bcrypt.hashSync(this.password, 11);
    this.password = hashedPassword;
    next();
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;