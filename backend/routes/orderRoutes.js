import express from 'express'
import {protect} from '../middleware/authMiddleware.js'
import {addOrderItems, orderItems} from '../controllers/orderController.js'
const router = express.Router()

//Functionality is in controllers
router.route('/').post(protect, addOrderItems)

export default router
