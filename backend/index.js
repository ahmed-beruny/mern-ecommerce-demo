const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv');
const authRoutes = require('./src/routes/auth');
const userRoutes = require('./src/routes/user');
const categoryRoutes = require('./src/routes/category');
const productRoutes = require('./src/routes/product');
const cors = require('cors');

// Cors
app.use(cors());

env.config();

// DB Connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes Middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

// Port
const port = process.env.PORT || 8000;

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});