const express = require('express')
const router = express.Router()

const { getCitites } = require('../controllers/cities')

router.get('/get', getCitites)

module.exports = router
