const request = require('supertest')('https://serverest.dev')

module.exports = {
  loginUser: async (body) => {
    const response = await request
      .post('/login')
      .send(body)

    return response
  }
}