import express from 'express'
import {protect} from '../middleware/authMiddleware.js'
import {addOrderItems, getOrderById} from '../controllers/orderController.js'
const router = express.Router()

//Functionality is in controllers
router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
export default router
