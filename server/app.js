if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const port = 3000;
// const {
//     errorHandler
// } = require('./middlewares/errorHandler')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mini-ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(_ => {
        console.log('masuk ke database')
    })
    .catch(err => {
        console.log(`Errornya tuh disini ${err.message}`)
    })


const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

const category = require('./routes/category')
const subCategory = require('./routes/subCategory')
const product = require('./routes/product')

app.use('/category', category)
app.use('/subCategory', subCategory)
app.use('/product', product)


// app.use(errorHandler)

app.listen(port, () => console.log(`Listening to Port ${ port } live and well`))

module.exports = app