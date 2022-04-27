const express = require('express');

const app = express()
const connect = require('./configs/db')
app.use(express.json())

const userController = require('./controller/User.controller')

app.use("/users", userController)
app.use("/users", userController)

const port = process.env.PORT || 1111
app.listen(port, async()=>{
    await connect()
    console.log(`server is running on port ${port}`)
})