// to make routes clean , now it;s working as after using middle ware in the main app page, here we have to submit requests as a root '/'
const express = require('express');
const router = express.Router();
const Postmodel = require('../models/post');

// gets back all the posts
router.get('/', async (req,res) => {
    try{
        const posts = await Postmodel.find();
        res.json(posts);
    }
    catch(err){
        res.json({message : err});
    }
   });
// Finding a specific post
router.get('/:id',async (req,res) => {
//  console.log(req.params.id);
try{
    const post = await Postmodel.findById(req.params.id);
    res.json(post);
}
catch(err){
    res.json({error : err});
}
});
// Update a post
router.get('/:id',async (req,res) => {
    //  console.log(req.params.id);
    try{
        const updatedPost = await Postmodel.updateOne({_id : req.params.id},
            {$set : { title : req.body.title , description : req.body.description}});
        res.json(updatedPost);
    }
    catch(err){
        res.json({error : err});
    }
    });
// Delete a post of a partcular id
router.get('/:id',async (req,res) => {
    //  console.log(req.params.id);
    try{
        const removedPost = await Postmodel.remove({_id : req.params.id});
        res.json(removedPost);
    }
    catch(err){
        res.json({error : err});
    }
    });
// submits a new post
router.post('/',async (req,res) => {
    const post = new Postmodel(
        {
            title : req.body.title,
            description : req.body.description
        }
    );
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message : err});
    }

    // way to do this thing with a promise
    // post.save().then(data => {
    //     res.json(data);
    // }).catch(err => {
    //     res.json({message : err});
    // });
});
   module.exports=router;