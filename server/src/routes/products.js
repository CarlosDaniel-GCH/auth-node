const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', authMiddleware, productController.getProducts)

router.post('/', authMiddleware, productController.createProduct)

module.exports = router