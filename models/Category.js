const mongoose = require('mongoose')


let category = mongoose.Schema({
    name: String,
    subCat: [String]
})

module.exports = mongoose.model('category', category)
