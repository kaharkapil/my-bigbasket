const mongoose = require('mongoose')


let seller = mongoose.Schema({
    companyName: String,
    email: String,
    companyAddress: {
        state: String,
        city: String,
        pincode: String,
        address1: String,
        address2: String
    },
    phoneNumber: Number,
    GSTIN: String,
    averageRating: Number,
})

module.exports = mongoose.model('seller', category)