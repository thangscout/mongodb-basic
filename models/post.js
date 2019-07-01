const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const postsSchema = new Schema({
    title: String,
    description: String,
    date: {type: Date, default: Date.now},
    status: {type: Number, default: -1}
});

const Post = mongoose.model('post', postsSchema);

module.exports = {
    Post
};
