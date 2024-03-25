const express = require('express')
const router = express.Router()

const { addParty, getParties } = require('../controllers/party')

router.post('/add', addParty)
router.get('/get', getParties)

module.exports = router
