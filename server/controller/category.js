const categoryModel = require('../model/category')



class CategoryController {

    static findAll(req, res, next) {
        categoryModel.find()
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
        categoryModel.findOne({
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

    static create(req, res, next) {

        categoryModel.create({
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


    static update(req, res, next) {

        categoryModel.updateOne({
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

        categoryModel.deleteOne({
                _id: req.params.id
            })
            .then(data => {
                console.log('berhasil terdelete ' + data)
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

}

module.exports = CategoryController