const router = require('express').Router()
const productController = require('../controller/product')
const multer = require('multer')({

    limits: {
        fileSize: 10 * 1024 * 1024
    }

})
const gcs = require('../middleware/uploadImage')

router.post('/:id', multer.single('imageUrl'), gcs, productController.create)
router.get('/', productController.findAll)
router.get('/:id', productController.findOne)
router.patch('/:id', productController.update)
router.delete('/:id', productController.delete)


module.exports = router