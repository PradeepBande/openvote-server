const express = require('express')
const router = express.Router()

const { addConstituency, getConstituency } = require('../controllers/constituency')

// router.get('/add', addConstituency)
router.get('/get', getConstituency)

module.exports = router
