const db = require('../db');

async function country_list_with_filteration(req,res,next){
    const {country_name = null} = req.body;
    try {
        const result = await db.query('select * from country_list_with_filteration($1)', [country_name]);

        res.send({success : true, data : result.rows, total_count: result.rows.length});
    } catch (error) {
        console.log(error);
        res.send({success : false});
    }
};

module.exports = {
    country_list_with_filteration
}