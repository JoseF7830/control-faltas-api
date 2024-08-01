const mysql = require('mysql');

const config = require('../config');
const { error } = require('../utils/responses');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let conexion;

function connMysql() {
    conexion = mysql.createConnection(dbConfig);

    conexion.connect((err) => {
        if (err) {
            console.error('[db error]', err);
            setTimeout(connMysql, 200);
        } else {
            console.log('Base de datos conectada')
        }
    });

    conexion.on('error', (err) => {
        console.log('[db error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connMysql();
        } else {
            throw err;
        }
    })
}

connMysql();

function select(table) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);

            resolve(result);
        });
    });
}

function insert(table, fields, values) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${table} (${fields}) VALUES (${values})`, (error, result) => {
            if (error) return reject(error);

            resolve(result);
        })
    })
} 

function update(table, values, condition) {
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${table} SET ${values} WHERE ${condition}`, (error,result) => {
            if(error) return reject(error);

            resolve(result);
        });
    });
}

function selectOne(table, condition) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${table} WHERE ${condition}`, (error,result) => {
            if(error) return reject(error);

            resolve(result);
        });
    });
}

function deleteOne(table, condition) {
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${table} WHERE ${condition}`, (error, result) => {
            if (error) return reject(error);

            resolve(result);
        });
    });
}

module.exports = {
    select,
    insert,
    update,
    selectOne,
    deleteOne
}