const express = require('express');

const router = express.Router();

const {Posts} = require('../models/Posts')

router.get('/', async (req,res) => {
   const allPosts = await Posts.findAll()
   res.json(allPosts)
})


router.post('/', async (req,res) => {

    const post = req.body

    const newPost = await Posts.create(post)
    res.json(newPost)
    console.log(newPost)
})








module.exports =  router
