const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const indexRoutes = require('./routes/index')
const PORT = process.env.PORT || 5000

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())

// mongoose
mongoose.connect('mongodb+srv://mern:mern@cluster0.1wha3.mongodb.net/AceInternational?retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(() => console.log('Database Connected'))

app.use('/', indexRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})