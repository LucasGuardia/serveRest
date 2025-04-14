const joi = require('joi')
const { expect } = require('chai')
const { getProduct } = require('../../support/routes/products')
const { productSchema } = require('../../fixtures/responses/schema/productSchema')

describe('Product Tests', async () => {

  it('Get products', async () => {
    const response = await getProduct()

    expect(response.status).to.be.eql(200)
  })
})
