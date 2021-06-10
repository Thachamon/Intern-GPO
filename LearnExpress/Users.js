require('dotenv').config();
const { Pool } = require('pg');
const { expressValidator, Result } = require('express-validator');
const { resolveConfig } = require('prettier');

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
    selectList,
};

function selectSignList() {
    pool.connect((err, client, release) => {
        client.query('SELECT fname, lname, email, gender,  username, password, birthday FROM signlist', (err, res) => {
            console.log(res.rows);
        });
    });
}

async function insertSignList(fname, lname, email, gender, username, password, birthday) {
    //await client.connect();
    const value = [fname, lname, email, gender, username, password, birthday];

    const query =
        'INSERT INTO signlist (fname, lname, email, gender,  username, password, birthday) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';

    try {
        pool.connect((err, client, release) => {
            client.query(query, value);
        });
    } catch (e) {
        console.error('Error Occurred', e);
        throw e;
    }
}

function selectList(callback) {
    pool.connect((err, client, release) => {
        client.query('SELECT fname, lname, email, gender,  username, password, birthday FROM signlist', (err, res) => {
            if (err) {
                console.error(err.stack);
            } else {
                callback(res.rows);
            }
        });
    });
}
