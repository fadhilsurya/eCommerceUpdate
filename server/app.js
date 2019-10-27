if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fadhilsurya:admin@cluster0-lit1i.gcp.mongodb.net/mini-ecommerce?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(_ => {
        console.log('masuk ke database')
    })
    .catch(err => {
        console.log(err)
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


app.listen(port, () => console.log(`Listening to Port ${ port } live and well`))

module.exports = app