const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productsSchema = new Schema({
    category: {
        type: String,
    },
    subCat: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
    },
    images: [String],
    color: [String],
    weight: String,
    dimensions: String,
    quantity: {
        type: Number,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    sales: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
    },
    show: { type: Boolean, default: true },
    sellerId: { type: Schema.Types.ObjectId, ref: 'seller' },
})

module.exports = mongoose.model('product', productsSchema)