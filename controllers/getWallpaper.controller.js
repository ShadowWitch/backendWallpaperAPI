const connectDB = require("../db/configDB")

const getWallpaper = (req, res) => {
    connectDB.query('select * from Wallpapers;', (err, results, fields) => {
        if(err) throw Error(err);
        const data = results
        res.json({
            ok: true,
            data
        })
    })
}

const sendWallpaper = (req, res) =>{
    const {
        wall_url,
        wall_size,
        wall_width,
        wall_height
    } = req.body;
    const data = {wall_url, wall_size, wall_width, wall_height}

    connectDB.query('CALL InsPrueba2 (?, ?, ?, ?)', Object.values(data), (err, result) => {
        if(err) throw Error(err);
        
        res.status(200).json({
            ok: true,
            result
        })
    })
}

module.exports = {
    getWallpaper,
    sendWallpaper
}