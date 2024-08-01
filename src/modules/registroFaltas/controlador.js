const { query } = require('express');
const db = require('../../DB/mysql');

const TABLA = 'registro_faltas';
const TABLA_PIVOTE = 'control_faltas_alumno';

function selectAll(){
    return db.select(TABLA);
}

function insert(body) {
    /*{
        comentario: "sin comentarios"
        hora: "9:00 AM"
        carnet: "B20237940"
        idFalta: 1
    }*/
    const fields = 'comentario, hora, carnet, id_falta, fecha, bimestre, id_grado'
    const values = `'${body.comentario}', '${body.hora}', '${body.carnet}', ${body.idFalta}, '${body.fecha}', ${body.bimestre}, ${body.idGrado}`;
    return db.insert(TABLA, fields, values);
}

function update(body){
    const values = `comentario = '${body.comentario}', hora = '${body.hora}', carnet = '${body.carnet}', id_falta = ${body.id_falta}`;
    const condition = `id_registro = '${body.id_registro}'`;
    return db.update(TABLA, values, condition);
}

function selectOne(params){
    const condition = `id_registro = '${params.idRegistro}'`;
    return db.selectOne(TABLA,condition);
}

function deleteOne(params) {
    const condition = `id_registro = '${params.idRegistro}'`;
    return db.deleteOne(TABLA,condition);
}

function selectAlumno(params, query) {
    //DATE(fecha) BETWEEN '2024-01-06' AND '2024-07-18' AND carnet = 'B15164' ORDER BY fecha ASC;
    const condition = `Date(fecha) BETWEEN '${query.fechaInicio}' AND '${query.fechaFinal}' AND carnet = '${params.carnet}' ORDER BY fecha ASC`;
    return db.selectOne(TABLA,condition);
}

function selectGrado(params, query) {
    const condition = `Date(fecha) BETWEEN '${query.fechaInicio}' AND '${query.fechaFinal}' AND id_grado = '${params.idGrado}' ORDER BY fecha ASC`;
    return db.selectOne(TABLA, condition);
}

function selectBimestre(params, query) {
    const condition = `Date(fecha) BETWEEN '${query.fechaInicio}' AND '${query.fechaFinal}' AND bimestre = '${params.bimestre}' ORDER BY fecha ASC`;
    return db.selectOne(TABLA, condition);
}

function selectGeneral(query) {
    const condition = `Date(fecha) BETWEEN '${query.fechaInicio}' AND '${query.fechaFinal}' ORDER BY fecha ASC`;
    return db.selectOne(TABLA, condition);
}

function incrementarCantidadFaltas(body) {
    const fields = 'carnet, cantidad_faltas, id_grado'
    const values = `'${body.carnet}', '${body.cantidad_faltas}', '${body.id_grado}'`;
    return db.insert(TABLA_PIVOTE, fields, values);
}

function actualizarCantidadFaltas(body) {
    const values = `cantidad_faltas = '${body.cantidad_faltas}'`;
    const condition = `id_control = '${body.id_control}'`;
    return db.update(TABLA_PIVOTE, values, condition);
}

function selectCantidadFaltas(body) {
    const condition = `carnet = '${body.carnet}' AND id_grado = ${body.id_grado}`;
    return db.selectOne(TABLA_PIVOTE, condition);
}

module.exports = {
    selectAll,
    insert,
    update,
    selectOne,
    deleteOne,
    selectAlumno,
    selectGrado,
    selectBimestre,
    selectGeneral,
    selectCantidadFaltas,
    incrementarCantidadFaltas,
    actualizarCantidadFaltas
}