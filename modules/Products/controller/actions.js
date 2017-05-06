'user strict'

const Product = require('../models/product')

const callback = (err, data, res) => {
  if (err) return console.log('erro' + err)
  return res.json(data)
}

const Actions = {}

Actions.create = (req, res) => {
  const body = req.body
  console.log(body.title)
  const pt = new Product(body)
  pt.save((err, data) => {
    callback(err, data, res)
  })
}

Actions.retrieve = (req, res) => {
  const query = {id: req.params.id}
  Product.findOne(query, (err, data) => {
    callback(err, data, res)
  })
}
Actions.update = (req, res) => {
  const query = {id: req.params.id}
  const body = req.body
  Product.update(query, body, (err, data) => {
    callback(err, data, res)
  })
}
Actions.delete = (req, res) => {
  const id = req.params.id
  Product.remove(id, (err, data) => {
    callback(err, data, res)
  })
}
module.exports = Actions
// module.exports = callback
