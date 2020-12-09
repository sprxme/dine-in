const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Order = require('../models/order')
const Food = require('../models/food')

// GET api/orders
router.get('/', async (req, res) => {
    try {
        const results = await Order.find()
            .select('-__v')
            .populate({ 
                path: 'orders.item', 
                select: '-__v' 
            })
        res.json(results)
    }
    catch(err) {
        console.log(err)
        res.status(500).json({ error: err.reason.toString() })
    }
})

// POST /orders
router.post('/', async (req, res) => {
    const orders = req.body.orders

    try {
        // Checks every given food_id exists in the database
        for (let i = 0; i < orders.length; i++) {
            const foodId = orders[i].item
            if (!mongoose.Types.ObjectId.isValid(foodId)) return res.status(500).json({ error: 'Invalid food id'})

            const result = await Food.findById(foodId)
            if (!result) {
                res.status(404)
                throw 'No valid food entry found for the given id'
            }
        }

        const order = new Order({
            _id: mongoose.Types.ObjectId(),
            customerName: req.body.customerName,
            tableNumber: req.body.tableNumber,
            orders: req.body.orders,
            totalPrice: req.body.totalPrice
        })
    
        const savedOrder = await order.save()
        const result = await Order.findById(savedOrder.id)
            .select('-__v')
            .populate({ 
                path: 'orders.item',
                select: '-__v' 
            })
        res.status(201).json(result)
    }
    catch(err) {
        console.log(err)
        if (res.statusCode === 404) res.json({ error: err })
        else res.status(500).json({ error: err.message })
    }
})

module.exports = router