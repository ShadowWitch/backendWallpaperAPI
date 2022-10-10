const connectDB = require("../db/configDB");
const bcrypt = require('bcrypt');

// helpers
const { validateUser } = require("../helpers/validateUser");

const getUser = (req, res) => {
    connectDB.query('SELECT * FROM Usuarios', (err, result) => {
        if(err) throw Error(err);
        
        res.status(200).json({
            ok: true,
            result
        })
    })
}

const registerUser = (req, res) =>{
    const {user_name='', user_pass=''} = req.body;
    const newUser = {
        user_name,
        user_pass
    };

    if(!validateUser(newUser)) {
        return res.json({
            ok: false,
            msg: 'User o password is not valid.'
        });
    }

    // Encrypt Password
    newUser.user_pass = bcrypt.hashSync(newUser.user_pass, bcrypt.genSaltSync(10))

    connectDB.query('CALL InsUsuario (?, ?)', Object.values(newUser), (err, result) => {
        if(err) throw Error(err);
        
        res.status(200).json({
            ok: true,
            message: 'Usuario Registrado!'
        })
    })
}

module.exports = {
    getUser,
    registerUser
}