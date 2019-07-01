const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    title: String,
    description: String,
    price: Number
});

const Product = mongoose.model('product', ProductsSchema);

module.exports = {
    Product
};