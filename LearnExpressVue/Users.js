require('dotenv').config()
const { Client } = require('pg')

const client = new Client({
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
    client.connect();
    client.query('SELECT * FROM signlist', (err, res) => {
        console.log(res.rows) 
        client.end() 
    })
}

async function insertSignList(fname, lname, email,  gender, username, password, birthday) {
    await client.connect();
    /**
     * TODO
     */
    //const { detial } = req.body;
    const query = 'INSERT INTO signlist (fname, lname, email, gender,  username, password, birthday) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const value = [fname, lname, email, gender, username, password, birthday];

    await client.query(query, value, (err, res) =>{
        if (err) {
            console.log(err);
            return;
        }
        client.end();
    })


}