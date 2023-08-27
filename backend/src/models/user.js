const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, // trim whitespace
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true, // trim whitespace
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        trim: true, // trim whitespace
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);