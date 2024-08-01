const db = require('../../DB/mysql');

const TABLA = 'faltas';

function selectAll() {
    return db.select(TABLA);
}

function insert(body) {
    /*{
        falta: "estaba molestando en clase"
    }*/

    const fields = 'falta'
    const values = `'${body.falta}'`;
    return db.insert(TABLA, fields, values);
}

function update(body){
    const values = `falta = '${body.falta}'`;
    const condition = `id_falta = '${body.id_falta}'`;
    return db.update(TABLA, values, condition);
}

function selectOne(params){
    const condition = `id_falta = '${params.idFalta}'`;
    return db.selectOne(TABLA,condition);
}

function deleteOne(params) {
    const condition = `id_falta = '${params.idFalta}'`;
    return db.deleteOne(TABLA, condition);
}

module.exports = {
    selectAll,
    insert,
    update,
    selectOne,
    deleteOne
}