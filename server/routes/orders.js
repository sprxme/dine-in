const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

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
            token: nanoid(5),
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

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const status = req.body.status

    if (status === null || status === undefined) {
        return res.status(400).json({ error: 'Invalid request body'})
    }

    if (status < 0 || status > 3) {
        return res.status(400).json({ error: 'Invalid status, must be in range 0 - 3'})
    }

    try {
        const result = await Order.updateOne({ _id: id }, { $set: { status: status } })

        if (result.n == 0) {
            res.status(404)
            throw 'No valid entry was found for the given id'
        }  
        else if (result.n > 0 && result.nModified == 0) {
            res.status(204)
            throw 'No entry updated'
        }

        // Find the updated order
        const order = await Order.findById(id)
        const item = order.toObject()
        delete item.__v
        res.json(item)
    }
    catch(err) {
        console.log(err)
        switch (res.statusCode) {
            case 404:
                res.json({ error: err })
                break
            case 204:
                res.json()
                break
            default:
                res.status(500).json({ error: err.reason.toString() })
        }
    }
})

module.exports = router