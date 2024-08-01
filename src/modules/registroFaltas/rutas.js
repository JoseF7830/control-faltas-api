const express = require('express');
const responses = require('../../utils/responses');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', function (req,res){
    controlador.selectAll().then((registroFaltas)=>{
        responses.success(req,res,registroFaltas,200);
    });
});

router.post('/', function(req, res) {
    controlador.insert(req.body).then((responseInsert) => {
        const body = {
            carnet: req.body.carnet,
            id_grado: req.body.idGrado,
        }
        controlador.selectCantidadFaltas(body).then((responseSelect) => {
            if (responseSelect.length <= 0) {
                controlador.incrementarCantidadFaltas({
                    ...body,
                    cantidad_faltas: 1
                });
                responses.success(req, res, responseInsert, 200);
            } else {
                const registro = responseSelect[0];
                const nuevaCantidad = registro.cantidad_faltas + 1;
                controlador.actualizarCantidadFaltas({
                    id_control: registro.id_control,
                    cantidad_faltas: nuevaCantidad
                });

                if (nuevaCantidad % 4 === 0) {
                    responses.success(req, res, {
                        ...responseInsert,
                        debeCrearCita: true,
                    }, 200);
                } else {
                    responses.success(req, res, responseInsert, 200);
                }
            }
        })
    });
});

router.put('/', function(req, res) {
    controlador.update(req.body).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.get('/:idRegistro', function(req, res) {
    controlador.selectOne(req.params).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.get('/alumno/:carnet', function(req, res) {
    controlador.selectAlumno(req.params, req.query).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.get('/grados/:idGrado', function(req, res) {
    controlador.selectGrado(req.params, req.query).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.get('/bimestre/:bimestre', function(req, res){
    controlador.selectBimestre(req.params, req.query).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.get('/general/descarga', function(req, res){
    controlador.selectGeneral(req.query).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.delete('/:idRegistro', function(req, res){
    controlador.deleteOne(req.params).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

module.exports = router;