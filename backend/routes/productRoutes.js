const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/productControllers')

//@desc Get all products form db
//@route GET /api/product
//@access Public
router.get('/', getAllProducts)

//@desc Get a products form db
//@route GET /api/product/:id
//@access Public
router.get('/:id', getProductById)

module.exports = router;