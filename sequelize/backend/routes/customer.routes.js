import express from 'express'
import { get_all_customers } from '../controllers/customer.controllers.js'

const router = express.Router()
const use = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next)

// GET ALL CUSTOMERS
router.get('/getAllCustomers', use(get_all_customers))

export default router
