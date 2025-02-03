const Joi = require('joi')
const { registerUser, getUser } = require('../../support/routes/users')
const { createUserBody } = require('../../fixtures/requests/createUser')
const { expect } = require('chai')
const { getUserSchema } = require('../../fixtures/responses/schema/usersSchema')

describe('Find Users', async () => {
  let userRegistered, userRegisteredId, userData

  before(async () => {
    userData = createUserBody()
    userRegistered = await registerUser(userData)
  })

  it('Get user by ID', async () => {
    const response = await getUser({ _id: userRegistered.body._id })

    expect(response.status).to.be.eql(200)
    expect(response.body.usuarios[0]._id).to.be.eql(userRegistered.body._id)
    Joi.assert(response.body.usuarios[0], getUserSchema)
  })

  it('Get user by Name', async () => {
    const response = await getUser({ nome: userData.nome })

    expect(response.status).to.be.eql(200)
    expect(response.body.usuarios[0].nome).to.be.eql(userData.nome)
  })

  it('Get user by Email', async () => {
    const response = await getUser({ email: userData.email })

    expect(response.status).to.be.eql(200)
    expect(response.body.usuarios[0].email).to.be.eql(userData.email)
  })

  it('Get user by Administrador', async () => {
    const response = await getUser({ administrador: 'true' })

    expect(response.status).to.be.eql(200)
    response.body.usuarios.forEach(userData => {
      expect(userData.administrador).to.be.eql('true')
    });
  })
})