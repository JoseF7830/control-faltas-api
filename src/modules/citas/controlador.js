const db = require('../../DB/mysql');

const TABLA = 'citas';

function create(body) {
    const fields = 'fecha, hora, id_usuario, id_registro_falta, atendida, carnet, descripcion';
    const values = `'${body.fecha}', '${body.hora}', ${body.id_usuario}, ${body.id_registro_falta}, ${body.atendida}, '${body.carnet}', '${body.descripcion}'`;
    return db.insert(TABLA, fields, values);
}

function selectAll() {
    return db.select(TABLA);
}

function selectOne(params) {
    const condition = `id_cita = '${params.id_cita}'`;
    return db.selectOne(TABLA, condition);
}

function update(body) {
    const values = `atendida = ${body.atendida}`;
    const condition = `id_cita = '${body.id_cita}'`;
    return db.update(TABLA, values, condition);
}

module.exports = {
    create,
    selectAll,
    selectOne,
    update
}