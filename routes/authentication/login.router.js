const { login } = require('../../controllers/login.controller');
const routerLogin = require('express').Router()

routerLogin.post('/', login)

module.exports = routerLogin;
