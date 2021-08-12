const express = require('express');
const mongoose = require('mongoose')
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const productRoutes = require('./routes/product')
const config = require('./config');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Ajay")
})

app.use('/product', productRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log("App is listening on port", 3000);
})



var connection = mongoose.connect(config.mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err => {
    if (!err) {
        console.log('Database successfuly connected')
    } else {
        console.log(err);
    }
}))

