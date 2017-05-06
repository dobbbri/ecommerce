'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const string = { type: String, required: true }
const _schema = {
  title: string,
  subtitle: string,
  content: string,
  created_at: {type: Date, default: Date.now},
  price: {type: Number},
  category: string
}

const schema = new Schema(_schema)
const model = mongoose.model('product', schema)

module.exports = model
