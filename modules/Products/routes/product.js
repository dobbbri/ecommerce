'use strict'
const express = require('express')
const router = express.Router()
const Actions = require('../controller/actions')

router.get('/', (req, res, next) => {
  Actions.listar(req, res)
})

module.exports = router
