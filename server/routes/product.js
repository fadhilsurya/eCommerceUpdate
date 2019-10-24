const router = require('express').Router()
const productController = require('../controller/product')

router.post('/:id', productController.create)
router.get('/', productController.findAll)
router.get('/:id', productController.findOne)
router.patch('/:id', productController.update)
router.delete('/:id', productController.delete)


module.exports = router