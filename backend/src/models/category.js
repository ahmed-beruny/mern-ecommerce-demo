const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, // trim whitespace
        required: true,
        maxlength: 32,
        unique: true
    }
}, { timestamps: true });
