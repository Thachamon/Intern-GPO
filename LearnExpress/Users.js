require('dotenv').config()
//const { Client } = require('pg')
const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

module.exports = {
    selectSignList,
    insertSignList,
}

function selectSignList() {
    pool.connect((err, client, release) => {
      //const client = await pool.connect();
        client.query('SELECT * FROM signlist', (err, res) => {
        console.log(res.rows) 
        //client.end() 
      })
    })
}

async function insertSignList(fname, lname, email,  gender, username, password, birthday) {
    //await client.connect();

    const query = 'INSERT INTO signlist (fname, lname, email, gender,  username, password, birthday) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';


    const value = [fname, lname, email, gender, username, password, birthday];

    try {
        pool.connect((err, client, release) => {
          client.query(query, value);
        });
    } catch (e) {
        console.error('Error Occurred', e);
        throw e;
    }
    
    // await client.query(query, value, (err, res) => {
    //     if (err) {
    //       return err.message;
    //     }
    //     return done(); 
    //   })
}