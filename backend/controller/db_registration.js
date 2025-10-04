const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const db = new pg.Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database : process.env.DATABASE_NAME,
    port : process.env.DATABASE_PORT,
    password : process.env.DATABASE_PASSWORD,
    max: 100,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 1000 * 120
});

module.exports = {
    query : async function (text,value){
    try {
        const client = await db.connect();

        return await client.query(text, value);
    } catch (error) {
        console.log('db Error :- ', error);
        throw error;
    }
    },
    databaseClient : db
}

