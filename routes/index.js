const routerMain = require('express').Router()

const routerUser = require('./usuarios/users.router');
const routerWallpaper = require('./wallpapers/wallpaper.router');
const routerLogin = require('./authentication/login.router');

routerMain.use('/usuarios', routerUser)
routerMain.use('/wallpaper', routerWallpaper)
routerMain.use('/login', routerLogin)

module.exports = routerMain;