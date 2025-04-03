const Joi = require('joi');

module.exports = {
  productSchema: Joi.object({
    quantidade: Joi.number().integer().min(1).required(),
    produtos: Joi.array().items(Joi.object({
      nome: Joi.string().required(),
      preco: Joi.number().greater(0).required(),
      descricao: Joi.string().required(),
      quantidade: Joi.number().integer().min(0).required(),
      _id: Joi.string().required()
    })).min(1).required()
  })
}