const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Food = require('../models/food')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            // Accept a file
            cb(null, true)
        } else {
            // Reject a file
            cb(null, false)
        } 
    }
})

// GET api/foods
router.get('/', async (req, res) => {
    // Find all Food objects in the database
    try {
        const results = await Food.find().select('-__v')
        res.json(results)
    }
    catch(err) {
        console.log(err)
        res.status(500).json({ error: err.reason.toString() })
    }
})

// POST api/foods
router.post('/', upload.single('image'), async (req, res, next) => {
    let imageURL = ''
    if (req.file) {
        // TODO: - Update base url on production
        imageURL = `http://localhost:8080/${req.file.originalname}`
    } else {
        const error = new Error('Invalid image file')
        error.status = 400
        return next(error)
    }

    // // Create a new food schema object
    try {
        const food = new Food({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            image: imageURL,
            category: req.body.category,
            desc: req.body.desc
        })

        const result = await food.save()
        const obj = result.toObject()
        delete obj.__v
        res.status(201).json(obj)
    }
    catch(err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
})

// PATCH api/foods/:id
router.patch('/:id', async (req, res) => {
    if (Object.keys(req.body).length === 0 || Object.keys(req.body[0]).length === 0) 
        return res.status(400).json({ error: 'Invalid request body' })
    const id = req.params.id

    // Convert array of updates into an update object
    // Body ex. -> [ { "property": "name", "value": 50 } ]
    const update = req.body.reduce((accumulator, value) => {
        accumulator[value.property] = value.value
        return accumulator
    }, {})
    // update value ex. -> { name: 50 }

    // Update one object with the given id
    try {
        const result = await Food.updateOne({ _id: id}, { $set: update })
        if (result.n == 0) {
            res.status(404)
            throw 'No valid entry was found for the given id'
        }  
        else if (result.n > 0 && result.nModified == 0) {
            res.status(204)
            throw 'No entry updated'
        }

        // Find the updated food
        const food = await Food.findById(id)
        const item = food.toObject()
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

// DELETE api/foods/:id
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    // Delete one object from the database with the given id
    Food.deleteOne({ _id: id }).then(result => {
        if (result.deletedCount == 0) return res.status(404).json({ error: 'No valid entry found for the given id' })
        res.status(204).json( {'message': `Deletion for id ${id} successful`})  
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: err.reason.toString() })
    })
})

module.exports = router