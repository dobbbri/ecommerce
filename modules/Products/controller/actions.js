'user strict'

const Product = require('../models/product')
const callback = (err, data) => {
  if (err) return console.log('Um erro foi encontrado', err)
  return console.log('operação realizada com sucesso', data)
}

const Actions = {}

Actions.listar = (req, res) => {
  const query = {}
  Product.find(query, (err, data) => {
    callback(err, data, res)
  })
}

module.exposts = Actions
