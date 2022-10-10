const { getWallpaper, sendWallpaper } = require('../../controllers/getWallpaper.controller');

const routerWallpaper = require('express').Router()

routerWallpaper.get('/dragonball', getWallpaper)
routerWallpaper.post('/dragonball', sendWallpaper)

module.exports = routerWallpaper;