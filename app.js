const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb://localhost:27017/test',{
})
const productRouter = require('./router/product')
const PORT = process.env.PORT || 4000;
const server = express()
server.use(express.json());

server.use('/products', productRouter)

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})