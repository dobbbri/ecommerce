'user strict'

const Product = require('../models/product')

const callback = (err, data, res) => {
  if (err) return console.log('erro' + err)
  return res.json(data)
}

const Actions = {}

Actions.listar = (req, res) => {
  const query = {}
  Product.find(query, (err, data) => {
    callback(err, data, res)
  })
}

Actions.cadastrar = (req, res) => {
  const body = req.body
  console.log(body.title)
  const pt = new Product(body)
  pt.save((err, data) => {
    callback(err, data, res)
  })
}

Actions.consultar = (req, res) => {
  const query = {id: req.params.id}
  Product.findOne(query, (err, data) => {
    callback(err, data, res)
  })
}
Actions.editar = (req, res) => {
  const query = {id: req.params.id}
  const body = req.body
  Product.update(query, body, (err, data) => {
    callback(err, data, res)
  })
}
Actions.remover = (req, res) => {
  const id = req.params.id
  Product.remove(id, (err, data) => {
    callback(err, data, res)
  })
}
module.exports = Actions
// module.exports = callback
