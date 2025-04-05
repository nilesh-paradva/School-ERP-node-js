const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    // required field
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", 'teacher', 'student'],
        default: "student",
    },

    // optional field
    phone: {
        type: Number,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    avatar: {
        type: String,
        default: null
    },
    dob: {
        type: Date,
        default: Date.now()
    },
    gender: {
        type: String,
        default: null
    },
    school: {
        type: String,
        default: null
    },
    class: {
        type: Number,
        default: null
    },
    teacherId: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        default: null
    }
}, {timestamps : true})

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;