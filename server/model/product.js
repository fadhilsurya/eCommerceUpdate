const mongoose = require('mongoose')
const schema = mongoose.Schema


const productSchema = new schema({
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    subCategoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'subCategory',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be less than 0']
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, 'quantity cannot be less than 0']
    },
    imageUrl: {
        type: String
    }
}, {
    timestamps: true
})

const productModel = mongoose.model('Product', productSchema)
module.exports = productModel