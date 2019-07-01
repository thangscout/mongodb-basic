const express = require('express');
const router = express.Router();

const {Category} = require('../models/category');

router.post('/new', async (req, res)=>{
    const {title, description} = req.body;
    const newCategory = new Category({title, description});
    let resultSave = await newCategory.save();
    res.json({resultSave});
});

router.get('/', async (req, res)=>{
    let listCategory = await Category.find({})
        .populate({
            path:'products',
            select:' title description'
        })
    res.json({listCategory});
})

exports.CATEGORY_ROUTER = router;