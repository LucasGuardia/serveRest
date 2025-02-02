const { faker } = require('@faker-js/faker');

exports.createUserBody = ({
  nome = faker.person.fullName(),
  email = faker.internet.email({ firstName: 'teste', provider: 'email.com', allowSpecialCharacters: true }),
  password = faker.internet.password(),
  administrador = 'false'
} = {}) => {
  return {
    nome,
    email,
    password,
    administrador
  }
}
