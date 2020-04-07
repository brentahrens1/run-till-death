const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

module.exports = {
    signup
}

async function signup(req, res) {
    const admin = new Admin(req.body)
    try {
        await admin.save()
        const token = createJWT(admin)
        res.json({ token })
    }
    catch (err) {
        res.status(400).json(err)
    }
}

function createJWT(admin) {
    return jwt.sign(
        {admin},
        SECRET,
        {expiresIn: '24h'}
    )
}



