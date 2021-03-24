import express from 'express'
import {getProductById, getProducts} from '../controllers/productController.js'
const router = express.Router()

//Functionality is in controllers
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router
