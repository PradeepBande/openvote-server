const express = require('express')
const router = express.Router()

const { vote, voteResults } = require('../controllers/votes')

router.post('/vote', vote)

router.post('/result', voteResults)

module.exports = router
