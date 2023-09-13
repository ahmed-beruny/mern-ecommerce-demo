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
        required: false 
    },
    quantity: {
        type: Number,
    },
    image: {
        type: String,
        required: false
    },
    shipping: {
        required: false,
        type: Boolean
    }

}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);
