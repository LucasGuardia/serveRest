const Joi = require('joi');

exports.loginUserSchema = Joi.object().keys({
  message: Joi.string().required(),
  authorization: Joi.string().required()
})