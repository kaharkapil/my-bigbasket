const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PORT: process.env.PORT,
    mongoDBUrl: process.env.mongoDB_Url,
    Access_Key_ID: process.env.Access_Key_ID,
    Secret_Access_Key : process.env.Secret_Access_Key
}