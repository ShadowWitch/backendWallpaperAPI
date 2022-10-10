const { getUser, registerUser } = require('../../controllers/getUser.controller');
const routerUser = require('express').Router()

routerUser.get('/show', getUser)
routerUser.post('/register', registerUser)

module.exports = routerUser;