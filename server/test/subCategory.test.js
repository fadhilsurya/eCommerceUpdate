const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

const app = require('../app.js')
chai.use(chaiHttp)


let dummyCategoryId = '5db09bd6b08f4243bba910bd'


describe('subcategory testing', function () {

    describe('GET/subCategory', function () {
        it('should return array of object with status code 200', function (done) {
            chai
                .request(app)
                .get('/subCategory')
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
    })



    describe('GET/category/:id', function () {
        it('Should return array of object with spesific one object and status code 200', function (done) {
            chai
                .request(app)
                .get(`/subCategory/${dummyCategoryId}`)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                    expect(res.body).to.be.an('object')
                    done()
                })

        })
    })

    describe('POST/subCategory', function () {
        it('Should return object', function (done) {

            let categoryDummy = {
                categoryName: 'Keyboard',
                name: 'categoryDummy'
            }

            chai
                .request(app)
                .post(`/subCategory`)
                .send(categoryDummy)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
    })

    describe('PATCH/subCategory', function () {
        it('Should return array of object', function (done) {

            let updateDummy = {
                name: 'testing1'
            }
            chai
                .request(app)
                .patch(`/subCategory/${dummyCategoryId}`)
                .send(updateDummy)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(201)
                    expect(res.body).to.be.an('object')
                    done()
                })
        })
    })

    describe('DELETE/subCategory/:id', function () {
        it('should return object', function (done) {

            let dummyId = '5db268ed93a687a0900aa2cc'

            chai
                .request(app)
                .delete(`/subCategory/${dummyId}`)
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.be.an('object')
                    expect(res).to.have.status(200)
                    done()
                })

        })
    })



})