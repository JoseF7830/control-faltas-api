const db = require('../../DB/mysql');

const TABLA = 'alumno';

function selectAll() {
    return db.select(TABLA);
}

function insert(body){
    /*{
        carnet: "",
        nombres: "",
        apellidos: "",
        idGrado: ""
    }*/
   const fields = 'carnet, nombres, apellidos, id_grado'
   const values = `'${body.carnet}', '${body.nombres}','${body.apellidos}',${body.idGrado}`;
   return db.insert(TABLA, fields, values);
}

function update(body){
    const values = `nombres = '${body.nombres}', apellidos = '${body.apellidos}', id_grado = '${body.id_grado}'`;
    const condition = `carnet = '${body.carnet}'`;
    return db. update(TABLA, values, condition);
}

function selectOne(params){
    const condition = `carnet = '${params.carnet}'`;
    return db.selectOne(TABLA, condition);
}

function deleteOne(params) {
    const condition = `carnet = '${params.carnet}'`;
    return db.deleteOne(TABLA, condition);
}

module.exports = {
    selectAll,
    insert,
    update,
    selectOne,
    deleteOne
}