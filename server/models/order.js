const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    token: { type: String, required: true },
    customerName: { type: String, required: true },
    tableNumber: { type: Number, required: true },
    orders: [
        {
            _id: false,
            item: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
            quantity: { type: Number, default: 1 },
            notes: { type: String, default: '' }
        }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: Number, default: 0 }
})

module.exports = mongoose.model('Order', orderSchema)