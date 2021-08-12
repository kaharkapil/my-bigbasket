
const express = require('express');
const app = express.Router();

const productController = require('./../controllers/productController')

app.get('/add', productController.addProduct)
app.post('/addCategory', productController.addCategory)
module.exports = (app)