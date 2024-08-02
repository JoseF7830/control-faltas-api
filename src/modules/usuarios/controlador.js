const db = require('../../DB/mysql');

const TABLA = 'usuarios';

function selectAll() {
    return db.select(TABLA);
}

function insert(body) {
    /*{
        id_usuario: " ",
        username: " ",
        password: " ",
        nombre: " ",
        rol: " "
    }*/
    const fields = 'username, password, nombre, rol'
    const values = `'${body.username}', '${body.password}', '${body.nombre}', '${body.rol}'`;
    return db.insert(TABLA, fields, values);
}

function update(body){
    const values = `username = '${body.username}', password = '${body.password}', nombre = '${body.nombre}', rol = '${body.rol}'`;
    const condition = `id_usuario = '${body.id_usuario}'`;
    return db.update(TABLA, values, condition);
}

function selectOne(params){
    const condition = `id_usuario = '${params.id_usuario}'`;
    return db.selectOne(TABLA,condition);
}

function deleteOne(params) {
    const condition = `id_usuario = '${params.id_usuario}'`;
    return db.deleteOne(TABLA, condition);
}

module.exports = {
    selectAll,
    insert,
    update,
    selectOne,
    deleteOne
}