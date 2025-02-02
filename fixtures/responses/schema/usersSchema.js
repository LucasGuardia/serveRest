const Joi = require('joi');

module.exports = {
  registerUserSchema: Joi.object().keys({
    message: Joi.string().required(),
    _id: Joi.string().required()
  }),

  getUserSchema: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    administrador: Joi.boolean().required(),
    _id: Joi.string().required()
  })
}