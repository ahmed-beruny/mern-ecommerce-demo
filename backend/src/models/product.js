const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, // trim whitespace
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        trim: true, // trim whitespace
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true, // trim whitespace
        required: true,
        maxlength: 32
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    quantity: {
        type: Number,
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    shipping: {
        required: false,
        type: Boolean
    }

}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);
