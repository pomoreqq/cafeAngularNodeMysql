const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt')
const {Users} = require('../models/Users')
const {sign} = require('jsonwebtoken')


router.post('/', async (req,res) => {
    const {username,password} =  req.body
    bcrypt.hash(password,10).then((hashedPassword) => {
        Users.create({
            username: username,
            password: hashedPassword
        })
    })
    res.json({message: 'succes'})
})

router.post('/login', async (req,res) => {
    const {username, password} = req.body;

    const user = await Users.findOne({where: {
        username: username
    }})

    if (!user) {
        return res.json({error: 'user not found'})
    } else {
        bcrypt.compare(password,user.password).then((match) => {
            if (!match) {
                res.json({error: ' Wrong passowrd'})
            } else {
                const accessToken = sign({username: user.username, id: user.id}, 'SECRET')
                res.json(accessToken)
            }
        })
    }
})





module.exports =  router
