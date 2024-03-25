const express = require('express')
const router = express.Router()
const { signin, register, validateToken } = require('../controllers/admins')


router.post('/register', register)
router.post('/signin', signin)
router.post('/validate-token', validateToken)

module.exports = router
