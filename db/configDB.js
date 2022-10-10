// Dotenv config
require('dotenv').config()

const mysql = require('mysql')

const userDB = process.env.USERDB;
const passDB = process.env.PASSDB;
const nameDB = process.env.NAMEDB;
const portDB = process.env.PORTDB;

const uri = `mysql://${userDB}:${passDB}@${nameDB}-mysql.services.clever-cloud.com:${portDB}/${nameDB}`

const connectDB = mysql.createConnection(uri);
connectDB.connect(err => {
    if(err) throw Error(err);
    console.log(`Conectado a ${nameDB}`)
})

module.exports = connectDB;