const express = require('express')
const router = express.Router()

const { addResulotion, getResulotions } = require('../controllers/resolutions')

router.post('/add', addResulotion)
router.get('/get', getResulotions)

module.exports = router
