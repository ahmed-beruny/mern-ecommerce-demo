const mongoose = require('mongoose');
const Orders = require('../models/order');


//get all orders
exports.getOrders = async(req, res) => {
    const orders = await Orders.find();
    res.json(orders);
}

//get one order
exports.getOrder = async(req, res) => {
    const order = await Orders.findById(req.params.id);
    res.json(order);
}

//create one order
exports.createOrder = async(req, res) => {
    const order = new Orders(req.body);
    await order.save();
    res.json(order);
}

//update one order
exports.updateOrder = async(req, res) => {
    const order = await Orders.findByIdAndUpdate(req.params.id, req.body);
    res.json(order);
}

//delete one order
exports.deleteOrder = async(req, res) => {
    await Orders.findByIdAndRemove(req.params.id);
    res.json({ message: 'Order deleted' });
}


