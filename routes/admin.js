const express = require('express')
const router = express.Router()
const adminCtrl = require('../controller/admin')

router.post('/signup', adminCtrl.signup)

module.exports = router