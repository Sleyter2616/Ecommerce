import express from 'express'
import {protect} from '../middleware/authMiddleware.js'
import {authUser, getUserProfile} from '../controllers/userController.js'
const router = express.Router()

//Functionality is in controllers
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
export default router
