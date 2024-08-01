const db = require('../../DB/mysql');

const TABLA = 'usuarios';

function login(body) {
    const condition = `username = '${body.username}' AND password = '${body.password}'`;
    return db.selectOne(TABLA, condition);
}

module.exports = {
    login
}