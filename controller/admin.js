const Admin = require('../models/admin')

module.exports = {
    signup
}

async function signup(req, res) {
    console.log('hello')
    const admin = new Admin(req.body)
    try {
        await admin.save()
        res.json(admin)
    }
    catch (err) {
        res.status(400).json(err)
    }
}



