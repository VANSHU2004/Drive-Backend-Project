const mongoose = require("mongoose")

// Normal Schema
// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// })

// Production level

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [3 , "Username must be at least 3 character long"]
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [13 , "Email must me atleast 13 characters long"]
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [5 , "Password must be atleast 5 characters long"]
    }


})

const user = mongoose.model('user' , userSchema)

module.exports = user;