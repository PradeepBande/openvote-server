const express = require('express')
const router = express.Router()

const { addParty, getParties } = require('../controllers/parties')

router.post('/add', addParty)
router.get('/get', getParties)

module.exports = router
