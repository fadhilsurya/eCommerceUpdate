const router = require('express').Router()
const categoryController = require('../controller/category')

router.post('/', categoryController.create)
router.delete('/:id', categoryController.delete)


module.exports = router