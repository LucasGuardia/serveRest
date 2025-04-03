const request = require('supertest')('https://serverest.dev')

module.exports = {
  getProduct: async (params = {}) => {
    const response = await request
      .get('/produtos')
      .query(params)

    return response
  }
}