const express = require('express')
const app = express()
const history = require('connect-history-api-fallback')
const cors = require('cors')

const PORT = process.env.PORT || 8000
const staticFileMiddleware = express.static(__dirname + '/../dist')
const staticImageMiddleware = express.static(__dirname + '/../server/uploads')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const foods = require('./routes/foods')
const orders = require('./routes/orders')

const uri = `mongodb+srv://supreme:fullmoon@fullmoon.bost3.mongodb.net/supremeDB?retryWrites=true&w=majority`

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) return console.log(err)
    console.log('Connected to MongoDB Atlas 🌱')
})

// Middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Import routes
app.use('/api/foods', foods)
app.use('/api/orders', orders)

app.use(staticFileMiddleware)
app.use('/images', staticImageMiddleware)
app.use(history({
    disableDotRule: true,
    verbose: true
}))
app.use(staticFileMiddleware)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../dist/index.html')
})

// Error handling
app.use((req, res, next) => {
    const error = new Error('Unable to find endpoint')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    console.log(error)
    res.status(error.status || 500)
    res.json({ error: error.message })
    next()
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🦋 ...`)
})