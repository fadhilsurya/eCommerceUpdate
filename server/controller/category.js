const categoryModel = require('../model/category')



class CategoryController {

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
                console.log(`Errornya tuh disini ${err.message}`)
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
                console.log(`Errornya tuh disini ${err.message}`)
            })
    }

}

module.exports = CategoryController