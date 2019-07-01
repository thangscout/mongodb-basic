const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: String,
    description: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    ]
});

const Category = mongoose.model('category', CategorySchema);

module.exports = {
    Category
};