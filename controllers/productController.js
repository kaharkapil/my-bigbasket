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
            let data = "Hello Ajay";
            let newObj = new ProductModel({
                name: "name1",
                id: 1
            })

            newObj.save().then(data => {
                res.status(200).send({ 'success': '1', 'message': 'Product added successfully', 'data': data })
            })

        } catch (err) {
            console.log(err);
            res.status(500).send({ 'success': '0', 'message': err.message })
        }
    }
}

module.exports = productController;