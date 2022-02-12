import _database from '../models/index.js'

const Customer = _database.customers

// GET ALL CUSTOMERS
const get_all_customers = async (req, res, next) => {
    let customers = await Customer.findAll({})
    res.status(200).send(customers)
}

export { get_all_customers }
