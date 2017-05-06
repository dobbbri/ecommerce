'use strict'
const express = require('express')
const router = express.Router()
const Action = require('../controller/actions')

router.post('/', Action.create)

router.get('/', Action.retrieve)

router.put('/:id', Action.update)

router.delete('/:id', Action.delete)

module.exports = router
