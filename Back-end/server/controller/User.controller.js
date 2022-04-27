const express = require('express');

const router = express.Router();

const User = require('../models/User.model')

router.post("/",async(req, res)=>{
    try {
        const user = await User.create(req.body)
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})

router.get("/",async(req, res)=>{
    try {
        const user = await User.find()
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", async(req,res)=>{
    
    try {
        const user = await User.find({_id:req.params.id})
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;