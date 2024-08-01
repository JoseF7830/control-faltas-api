const db = require('../../DB/mysql');

const TABLA = 'grado';

function selectAll() {
    return db.select(TABLA);
}

function insert(body) {
    /*{
        carrera: "Medicina"
        grado: "cuarto"
        seccion: "A"
        plan: "Sabado"
        jornada: "Matutina"
    }*/
    const fields = 'carrera, grado, seccion, plan, jornada'
    const values = `'${body.carrera}', '${body.grado}', '${body.seccion}', '${body.plan}', '${body.jornada}'`;
    return db.insert(TABLA, fields, values);
}

function update(body){
    const values = `carrera = '${body.carrera}', grado = '${body.grado}', seccion = '${body.seccion}', plan = '${body.plan}', jornada = '${body.jornada}'`;
    const condition = `id_grado = '${body.id_grado}'`;
    return db.update(TABLA, values, condition);
}

function selectOne(params){
    const condition = `id_grado = '${params.idGrado}'`;
    return db.selectOne(TABLA,condition);
}

function deleteOne(params) {
    const condition = `id_grado = '${params.idGrado}'`;
    return db.deleteOne(TABLA, condition);
}

module.exports = {
    selectAll,
    insert,
    update,
    selectOne,
    deleteOne
}