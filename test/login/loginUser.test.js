const Joi = require('joi')
const { expect } = require('chai')
const { createUserBody } = require('../../fixtures/requests/createUser')
const { loginUser } = require('../../support/routes/login')
const { loginUserSchema } = require('../../fixtures/responses/schema/loginUserSchema')
const { registerUser } = require('../../support/routes/users')

describe('Login', () => {

  it('Login success', async () => {
    const reqUserBody = createUserBody()
    const userCreationResponse = await registerUser(reqUserBody)
    expect(userCreationResponse.status).to.be.eql(201)

    const user = reqUserBody.email
    const password = reqUserBody.password

    const login = { email: user, password: password }
    const response = await loginUser(login)

    expect(response.status).to.be.eql(200)
    Joi.assert(response.body, loginUserSchema)
  })

  it('Invalid password', async () => {
    const reqUserBody = { email: "fulano@qa.com", password: "" }
    const response = await loginUser(reqUserBody)

    expect(response.status).to.be.eql(400)
    expect(response.body.password).to.be.eql('password não pode ficar em branco')
  })

  it('Invalid email', async () => {
    const reqUserBody = { email: "", password: "teste123" }
    const response = await loginUser(reqUserBody)

    expect(response.status).to.be.eql(400)
    expect(response.body.email).to.be.eql('email não pode ficar em branco')
  })

})