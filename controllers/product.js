const asyncHandler = require('express-async-handler');
const Product = require('../modals/product')

const get = asyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.status(200).json({
        status: true,
        data: products
    })
});

const getById = asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json({
        status: true,
        data: product
    })
});
const create = asyncHandler(async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        status: true,
        data: product
    })

});

module.exports = {
    get,
    getById,
    create
}