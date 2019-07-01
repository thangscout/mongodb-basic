const express = require('express');
const router = express.Router();

const {Product} = require('../models/product');
const {Category} = require('../models/category');

router.get('/', async (req, res)=>{
    let listProduct = await Product.find({});
    res.json({listProduct});
});

router.post('/new', async (req, res)=>{
    const {title, description, price, categoryID} = req.body;
    let newProduct = new Product({title, description, price, categoryID});
    let resultSave = await newProduct.save();

    let {_id: ProductID} = resultSave; /** */
    let infoCategoryAfterUpdate = await Category.findByIdAndUpdate(categoryID, {
        $push: { products: ProductID}
    }, {new: true});

    res.json({productInfo: resultSave, categoryInfo:  infoCategoryAfterUpdate});
})

exports.PRODUCT_ROUTER = router;