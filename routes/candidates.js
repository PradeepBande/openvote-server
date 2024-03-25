const express = require('express')
const router = express.Router()

const { addCandidate, getCandidates } = require('../controllers/candidates')

router.post('/add', addCandidate)
router.get('/get', getCandidates)

module.exports = router
