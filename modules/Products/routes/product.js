'use strict'
const express = require('express')
const router = express.Router()
const Action = require('../controller/actions')

router.get('/', Action.listar)

router.post('/', Action.cadastrar)

router.put('/:id', (req, res) => {
  Action.editar(req, res)
})
router.delete('/:id', (req, res) => {
  Action.remover(req, res)
})
module.exports = router
