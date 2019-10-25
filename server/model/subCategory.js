const mongoose = require('mongoose')
const schema = mongoose.Schema


const subCategorySchema = new schema({
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
subCategorySchema.pre('save', function (next) {
    return subCategoryModel.findOne({
            name: this.name
        })
        .then(data => {
            if (data) {
                throw new Error({
                    code: 400,
                    message: 'Sub-Category already created'
                })
            }
        })
})


const subCategoryModel = mongoose.model('subCategory', subCategorySchema)
module.exports = subCategoryModel