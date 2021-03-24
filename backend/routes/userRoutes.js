import express from 'express'
import {authUser} from '../controllers/userController.js'
const router = express.Router()

//Functionality is in controllers
router.post('/login', authUser)

export default router
