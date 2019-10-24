const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

const app = require('../app.js')


chai.use(chaiHttp)


describe('Product CRUD', function () {

    // GET ALL
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





})