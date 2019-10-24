const router = require('express').Router()
const subCategoryController = require('../controller/subCategory')

router.get('/', subCategoryController.findAll)
router.get('/:id', subCategoryController.findOne)
router.post('/', subCategoryController.create)
router.patch('/:id', subCategoryController.update)
router.delete('/:id', subCategoryController.delete)





module.exports = router