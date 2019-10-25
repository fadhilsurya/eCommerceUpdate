const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

const app = require('../app.js')


chai.use(chaiHttp)

let dummyProductId = '5db1d86497fb70625ec8a821'

describe('product testing', function () {

    describe('GET/product', function () {
        it('should return array of object with status code 200', function (done) {
            chai
                .request(app)
                .get('/product')
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
    })

    describe('GET/product/:id', function () {
        it('Should return array of object with spesific one object and status code 200', function (done) {
            chai
                .request(app)
                .get(`/product/${dummyProductId}`)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.an('object')
                    done()
                })

        })
    })

    describe('POST/product', function () {
        it('Should return object', function (done) {

            let dummySubCategoryId = '5db0b0bee321ed5b5ddd3d97'
            let dummyCategoryId = '5db09bd6b08f4243bba910bd'

            let productDummy = {
                _id: 'Keyboard',
                categoryId: dummyCategoryId,
                subCategoryId: dummySubCategoryId,
                name: 'testing1',
                description: 'lorem ipsum testing',
                price: 100,
                quantity: 50,
                imageUrl: 'this is picure'

            }

            chai
                .request(app)
                .post(`/product/${dummySubCategoryId}`)
                .send(productDummy)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
    })

    describe('PATCH/product', function () {
        it('Should return array of object', function (done) {
            let dummyProductId = '5db26f1818021ea9c660d8d5'
            let updateDummy = {
                _id: dummyProductId,
                name: 'testing2',
                description: 'lorem ipsum testing2',
                price: 250,
                quantity: 100,
                imageUrl: 'this is picture testing2'
            }
            chai
                .request(app)
                .patch(`/product/${dummyProductId}`)
                .send(updateDummy)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
    })

    describe('DELETE/product/:id', function () {
        it('should return object', function (done) {

            let dummyId = '5db0b584bf439962467c3330'

            chai
                .request(app)
                .delete(`/product/${dummyId}`)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.be.an('object')
                    expect(res).to.have.status(200)
                    done()
                })

        })
    })


})