import request from 'supertest';
import chai from 'chai'
const expect = chai.expect

describe('test api rest full', () => {
    describe('GET', () => {
        it('Must return 200', async() => {
            const response = await request.get('http://localhost:8080/api/products')
            expect(response.status).to.eql(200)
        })
    })
})



// import Product from '../../controllers/product.controller.js'
// import assert from 'assert'

// const assertStrict = assert.strict 

// describe('Test de API Rest Products', function () {

//     it('The controller must return empty', () => {
//         const product = new Product()
//         assertStrict.strictEqual(product.getProducts({}).length, 0)
//     })


//     it('Add product', () => {
//         const product = new Product()
//         product.add('run code')
//         assertStrict.strictEqual(product.getProducts().length, 1)
//         assertStrict.deepStrictEqual(product.getProducts(), [ { title: 'product1', price: 100, thumbnail: 'asd1.jpg' }])

//         product.addProduct('product test')
//         assertStrict.strictEqual(product.getProducts().length, 2)
//         assertStrict.deepStrictEqual(product.getProducts(), [ 
//             { title: 'product1', price: 100, thumbnail: 'asd1.jpg'},
//             { title: 'product2', price: 200, thumbnail: 'asd2.jpg'}
//         ])
//     })
// })

