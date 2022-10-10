
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { port } = require('./config/configServer');
const routerMain = require('./routes');

// Config Body-Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Config Morgan
app.use(morgan('dev'));

// Config Dotenv
require('dotenv').config();

// Router
app.use('/', routerMain)

app.use((req, res, next) => {
    res.status(500).json({
        ok: false,
        msg: 'ERROR 404'
    })
})

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
});
