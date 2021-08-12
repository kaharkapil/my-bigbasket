const ProductModel = require('./../models/Product')
const CategoryModel = require('./../models/Category')
const val = require('node-input-validator');


let productController = {
    addCategory: async (req, res) => {
        try {
            // let validator = new val(req.body, {
            //     name: "required",
            //     sub_cat: "required"
            // });
            // console.log("here");
            // const matched = await validator.check();
            // if (!matched) {
            //     var validatorError = parseValidate(validator.errors);
            //     return res.status(200).send({ "success": "0", "message": validatorError });
            // }
            console.log(req.body);
            let data = await new CategoryModel({
                name: req.body.name,
                subCat: req.body.subCat
            }).save();

            return res.status(200).send({ 'success': '1', 'data': data });

        } catch (err) {
            console.log(err);
            return res.status(500).send({ 'success': '0', 'message': err.message });
        }

    },

    addProduct: async (req, res) => {
        try {
            const {
                category, subCat, title,
                price,
                brand, images,
                color,
                weight, dimensions,
                quantity,
                isAvailable,
                description,
                show,
                sellerId
            } = req.body;

            let newProduct = await new ProductModel({
                category: category,
                subCat: subCat,
                title: title,
                price: price,
                brand: brand,
                images: images,
                color: color,
                weight: weight,
                dimensions: dimensions,
                quantity: quantity,
                isAvailable: isAvailable,
                description: description,
                show: show,
            }).save()

            return res.status(200).send({ 'success': '1', 'message': 'Product added successfully', 'data': newProduct })

        } catch (err) {
            console.log(err);
            res.status(500).send({ 'success': '0', 'message': err.message })
        }
    }
}

module.exports = productController;