const { da } = require('@faker-js/faker')

const request = require('supertest')('https://serverest.dev')

module.exports = {
  registerUser: async (body) => {
    const response = await request
      .post('/usuarios')
      .send(body)

    return response
  },

  getUser: async (params = {}) => {
    const response = await request
      .get('/usuarios')
      .query(params)

    return response
  }
}