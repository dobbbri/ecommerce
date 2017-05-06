'use strict'
const express = require('express')
const router = express.Router()
const Product = require('../models/product')

router.get('/', (req, res, next) => {
  Product.find({}, (err, data) => {
    if (err) return console.log('Um erro foi encontrado', err)
    return console.log('operação realizada com sucesso', data)
  })
})

module.exports = router
