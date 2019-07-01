const express = require('express');
const router = express.Router();

const {Post} = require('../models/post');

router.get('/', async (req, res)=>{
    try {
        let listPost = await Post.find({});
        res.json({listPost});
    } catch (error) {
        res.json({error});
    }
});

router.get('/add/:title/:description', async (req, res)=>{
    const { title, description} = req.params;

    let infoPost = new Post ({title, description});
    let infoPostAfterInserted = await infoPost.save();
    res.json({infoPostAfterInserted});
});

router.get('/search/:postID', async (req, res)=>{
    const {postID} = req.params;
    let infoPost = await Post.findById(postID);
    // let infoPost = await Post.findOne({_id: postID});
    res.json({infoPost});
});

router.post('/update/:postID', async (req, res)=>{
    const {postID} = req.params;
    let {title, description} = req.body;

    let resultAfterUpdate = await Post.findByIdAndUpdate(postID, {
        title, description
    }, {new: true});

    if(!resultAfterUpdate) res.json({error: true, message: 'Cannot_update'});

    res.json({error: false, postNew: resultAfterUpdate});
});

router.get('/delete/:postID', async (req, res)=>{
    const { postID} = req.params;
    
    let resultAfterDelete = await Post.findByIdAndDelete(postID);
    res.json(resultAfterDelete);
})

module.exports = router;