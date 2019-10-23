const mongoose = require('mongoose')
const schema = mongoose.Schema


const subCategorySchema = new schema({
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const subCategoryModel = mongoose.model('subCategory', subCategorySchema)
module.exports = subCategoryModel