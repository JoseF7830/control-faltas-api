const db = require('../../DB/mysql');

const TABLA = 'suspensiones';

function selectAll() {
    return db.select(TABLA)
}

function insert(body) {
    const fields = 'comentario, carnet, id_grado'
    const values = `'${body.comentario}', '${body.carnet}', ${body.id_grado}`;
    return db.insert(TABLA, fields, values);
}

module.exports = {
    selectAll,
    insert
}