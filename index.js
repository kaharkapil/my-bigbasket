const express = require('express');
const mongoose = require('mongoose')
const app = express();

const bodyParser = require('body-parser');
const cors = require("cors");

const productRoutes = require('./routes/product')
const config = require('./config');

const dotenv = require('dotenv');
dotenv.config();



app.use(cors());


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Ajay")
})

app.use('/product', productRoutes)

app.listen(config.PORT, () => {
    console.log("App is listening on port", config.PORT);
})



var connection = mongoose.connect(config.mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err => {
    if (!err) {
        console.log('Database successfuly connected')
    } else {
        console.log(err);
    }
}))

