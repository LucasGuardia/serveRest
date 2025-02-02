const Joi = require('joi')
const schema = require('../../fixtures/responses/schema/usersSchema')
const { registerUser } = require('../../support/routes/users')
const { createUserBody } = require('../../fixtures/requests/createUser')
const { expect } = require('chai')

const ERROR_MESSAGES = {
  nome: 'nome não pode ficar em branco',
  email: 'email não pode ficar em branco',
  password: 'password não pode ficar em branco',
  administrador: "administrador deve ser 'true' ou 'false'"
}

describe('Register User', () => {

  it('Register User Success', async () => {
    const reqUserBody = createUserBody()
    const response = await registerUser(reqUserBody)

    expect(response.status).to.be.eql(201)
    Joi.assert(response.body, schema.registerUserSchema)
  })

  it('Register User Invalid Name', async () => {
    const reqUserBody = createUserBody({ nome: "" })
    const response = await registerUser(reqUserBody)

    expect(response.status).to.be.eql(400)
    expect(response.body.nome).to.be.eql(ERROR_MESSAGES.nome)
  })

  it('Register User Invalid Email', async () => {
    const reqUserBody = createUserBody({ email: "" })
    const response = await registerUser(reqUserBody)

    expect(response.status).to.be.eql(400)
    expect(response.body.email).to.be.eql(ERROR_MESSAGES.email)
  })

  it('Register User Invalid Password', async () => {
    const reqUserBody = createUserBody({ password: "" })
    const response = await registerUser(reqUserBody)

    expect(response.status).to.be.eql(400)
    expect(response.body.password).to.be.eql(ERROR_MESSAGES.password)
  })

  it('Register User Invalid Administrator', async () => {
    const reqUserBody = createUserBody({ administrador: "" })
    const response = await registerUser(reqUserBody)

    expect(response.status).to.be.eql(400)
    expect(response.body.administrador).to.be.eql(ERROR_MESSAGES.administrador)
  })
})