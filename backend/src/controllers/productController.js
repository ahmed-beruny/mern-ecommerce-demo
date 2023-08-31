

const Product = require('../models/product');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({}).populate('category');
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.createProduct = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error.message)
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(400).json({ error: error.message });
    }
}
