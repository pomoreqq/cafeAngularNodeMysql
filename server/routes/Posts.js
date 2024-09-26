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


router.get('/byId/:id',async (req,res) => {
    const id = req.params.id
    const post = await Posts.findByPk(id)
    res.json(post)
})






module.exports =  router
