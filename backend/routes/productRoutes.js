import express from 'express'
import {
	getProductById,
	getProducts,
	deleteProduct,
} from '../controllers/productController.js'
const router = express.Router()
import {protect, admin} from '../middleware/authMiddleware.js'

//Functionality is in controllers
router.route('/').get(getProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router
