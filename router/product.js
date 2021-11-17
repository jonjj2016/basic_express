const express = require('express');
const {get, getById, create} = require('../controllers/product')
const {getMiddleware} = require('../middlewares/productMiddleware')

const router = express.Router();

router.get('/', getMiddleware ,get)

router.get('/:id', getById);
router.post('/', create)



module.exports = router;