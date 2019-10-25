const subCategoryModel = require('../model/subCategory')
const categoryModel = require('../model/category')

class SubCategoryController {

    static findAll(req, res, next) {
        subCategoryModel.find()
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    static findOne(req, res, next) {
        subCategoryModel.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    static create(req, res, next) {
        if ((req.body.categoryName == '') || (req.body.name == '')) {
            throw new Error(res.status(400).json({
                Code: 400,
                message: 'Field Cannot be Empty'

            }))
        } else {
            categoryModel.findOne({
                    name: req.body.categoryName
                })
                .then(data => {
                    return subCategoryModel.create({
                        categoryId: data._id,
                        name: req.body.name
                    })
                })

                .then(data1 => {
                    res.status(201).json({
                        data1
                    })
                })

                .catch(err => {
                    console.log(err.message)
                })


        }
    }


    static update(req, res, next) {
        if (req.body.name == '') {
            throw new Error(res.status(400).json({
                Code: 400,
                Message: 'Field cannot be empty'
            }))

        }

        subCategoryModel.updateOne({
                _id: req.params.id
            }, {
                name: req.body.name
            })
            .then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    static delete(req, res, next) {
        // console.log('masuk ke bagian ini')
        // console.log(req.params.id, '<< ini datanya koordinatenya')
        subCategoryModel.deleteOne({
                _id: req.params.id
            })
            .then(data => {

                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

}

module.exports = SubCategoryController