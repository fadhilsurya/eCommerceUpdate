const productModel = require('../model/product')
const subCategoryModel = require('../model/subCategory')


class ProductController {

    static create(req, res, next) {
        subCategoryModel.findOne({
                _id: req.params.id
            })
            .then(data => {
                return productModel.create({
                    categoryId: data.categoryId,
                    subCategoryId: data._id,
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    quantity: req.body.quantity,
                    imageUrl: req.body.imageUrl
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


    static findAll(req, res, next) {
        productModel.find()
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
        productModel.findOne({
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

    static update(req, res, next) {

        productModel.updateOne({
                _id: req.params.id
            }, {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity,
                imageUrl: req.body.imageUrl
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
        console.log('masuk brooh')
        productModel.deleteOne({
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

module.exports = ProductController