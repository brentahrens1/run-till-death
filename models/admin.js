const mongoose = require('mongoose')

const Schema = mongoose.Schema

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

module.exports = mongoose.model('Admin', adminSchema)