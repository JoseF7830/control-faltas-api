const express = require('express');
const responses = require('../../utils/responses');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', function (req, res) {
    controlador.selectAll().then((grados) => {
        responses.success(req, res, grados, 200);
    });
});

router.post('/', function(req, res) {
    controlador.insert(req.body).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.put('/', function(req, res) {
    controlador.update(req.body).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.get('/:idGrado',function(req,res) {
    controlador.selectOne(req.params).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.delete('/:idGrado', function(req, res) {
    controlador.deleteOne(req.params).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

module.exports = router;