const pg = require('../db');

async function login(req,res,next){

    const {email, password } = req.body;

    try {
        const result = await pg.query('SELECT * FROM user_login_get_user_data($1)', [email]);

        res.send({success : true, data : result.rows[0]});

    } catch (error) {
        console.log(error);
        res.send({success : false, err : error, message : "Login is unsuccessfull."});
    }
};

module.exports = {
    login
};