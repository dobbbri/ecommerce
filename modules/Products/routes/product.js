'use strict'
const express = require('express')
const router = express.Router()
const Action = require('../controller/actions')

router.get('/', Action.listar)

router.post('/', (req, res) => {
  Action.cadastrar(req, res)
})
router.put('/:id', (req, res) => {
  Action.editar(req, res)
})

module.exports = router
