// imports
const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        validate :  isEmail
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    }
});

// encrytion
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// static method to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if(user) {
        const auth = bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
    }
}   

const User = mongoose.model("user", userSchema);

module.exports = User;