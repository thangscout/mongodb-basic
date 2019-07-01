const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const uri = 'mongodb://localhost/mongodb-basic';

const POST_ROUTER = require('./routers/post.router');

app.set('views', './views');
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/post', POST_ROUTER);

app.get('/', async (req, res)=>{
    try {
        let listDocs = await Post.find({});
        res.json({ listDocs})
    } catch (error) {
        res.json({error});
    }
});

mongoose.connect(uri);
mongoose.connection.once('open', ()=>{
    console.log('Mongo client connected');
    app.listen(port, ()=> console.log(`Server started at port ${port}`));
})