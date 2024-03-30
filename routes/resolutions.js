const express = require('express')
const router = express.Router()

const { addResulotion, getResulotions, getResulotionById } = require('../controllers/resolutions')

router.post('/add', addResulotion)
router.get('/get', getResulotions)
router.get('/get-by-id/:id', getResulotionById)

module.exports = router
