const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    desc: { type: String }
})

module.exports = mongoose.model('Food', foodSchema)