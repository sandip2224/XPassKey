const mongoose = require('mongoose')

// Passkeys Schema
const passKeySchema = mongoose.Schema({
    account: { type: String },
    passKey: { type: String }
})

module.exports = mongoose.model('passKeyModel', passKeySchema)