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

mongoose.connect('mongodb://localhost/mini-ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(_ => {
        console.log('masuk ke database')
    })


const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

const category = require('./routes/category')
// const subCategory = require('./routes')

app.use('/category', category)


// app.use(errorHandler)

app.listen(port, () => console.log(`Listening to Port ${ port } live and well`))