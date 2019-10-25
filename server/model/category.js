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
categorySchema.pre('save', function (next) {
    return categoryModel.findOne({
            name: this.name
        })
        .then(data => {
            if (data) {
                throw new Error({
                    code: 400,
                    message: 'Category already created'
                })
            }
        })
})

const categoryModel = mongoose.model('Category', categorySchema)
module.exports = categoryModel