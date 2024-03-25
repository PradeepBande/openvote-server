const express = require('express')
const router = express.Router()

const { addCandidate } = require('../controllers/candidates')

router.post('/add', addCandidate)

module.exports = router
