const mongoose = require('mongoose')
const schema = mongoose.Schema


const categorySchema = new schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const categoryModel = mongoose.model('Category', categorySchema)
module.exports = categoryModel