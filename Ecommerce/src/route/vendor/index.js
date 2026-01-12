import express from 'express'
import { createProductController } from '../../controller/products/index.js'
const router=express.Router()
router.post('/products',createProductController)

export default router