const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const SALT_ROUNDS = 6

const adminSchema = new Schema({
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String
})

adminSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password
        return ret
    } 
})

adminSchema.pre('save', function (next) {
    const admin = this
    if (!admin.isModified('password')) return next()
    bcrypt.hash(admin.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err)
        admin.password = hash
        next()
    })
})

module.exports = mongoose.model('Admin', adminSchema)