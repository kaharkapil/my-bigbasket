const ProductModel = require('./../models/Product')

let productController = {
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