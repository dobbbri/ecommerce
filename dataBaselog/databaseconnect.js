'use strict'
const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/ecommerce-be-mean'

mongoose.connect(dbURI)

mongoose.connection.on('connected', () => {
  console.log('conexão padrão  aberta ' + dbURI)
})
mongoose.connection.on('error', (err) => {
  console.log('conexão padrão  teve um erro ' + err)
})
mongoose.connection.on('disconnected', () => {
  console.log('conexão padrão  disconecetada ')
})
mongoose.connection.on('open', () => {
  console.log('conexão padrão aberta ')
})
process.on('SIGTINT', () => {
  mongoose.connection.close(() => {
    console.log('conexão padrão foi fechada através do app')
    process.exit(0)
  })
})
