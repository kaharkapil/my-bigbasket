const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productsSchema = new Schema({
    name: {
        type: String
    },
    id: {
        type: String
    }
})

module.exports=mongoose.model('product',productsSchema)