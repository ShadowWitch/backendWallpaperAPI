const connectDB = require("../db/configDB");

const login = ( req, res ) =>{

    const {user_name='', user_pass=''} = req.body;
    console.log('ACA >> ', user_name);

    connectDB.query(`CALL getUserByUserName('${user_name}')`, (err, result) =>{
        if(err) throw Error(err);

        if(result[0].length === 0){
            return res.status(400).json({
                ok: false,
                message: '(user) or password incorrect!'
            })
        }

    })

}

module.exports = {
    login
}