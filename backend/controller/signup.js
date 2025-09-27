const pg = require('../db');
const bcrypt = require('bcrypt');

async function signup (req,res,next){

    const {country_code, email, name, organization, password, phone} = req.body;
    const saltRounds = 10;
 
    try {

        const hashpassword = await bcrypt.hash(password, saltRounds);

        await pg.query("SELECT * FROM user_signup_page_store_signup_data($1, $2, $3, $4, $5, $6)", 
            [
                name,
                email,
                hashpassword,
                phone,
                organization,
                country_code
            ]
        );

        res.send({ success: true });
        
    } catch (error) {
        res.send({success : false, error : error, message : "Signup is Unsuccessfully."})
    }
};

module.exports = {
    signup
};