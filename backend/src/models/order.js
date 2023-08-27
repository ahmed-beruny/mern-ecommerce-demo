
const orderSchema = new Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref: 'Product'
            },
            name: String,
            count: Number,
            price: Number
        }

    ],
    transaction_id: {},
    amount: {
        type: Number
    },
    address: String,
    status: {
        type: String,
        default: 'Not processed',
        enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] // enum means string objects
    },
    updated: Date,
    user: {
        type: ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);