const express = require('express');
const responses = require('../../utils/responses');
const controlador = require('./controlador');
const logRouting = require('../../middlewares/logRouting');

const router = express.Router();

router.use(logRouting('/api/alumno'));

router.get('/', function (req, res) {
    controlador.selectAll().then((alumno) => {
        responses.success(req, res, alumno, 200);
    });
});

router.post('/', function(req, res) {
    controlador.insert(req.body).then((respuesta) => {
        responses.success(req,res, respuesta,200);
    });
});

router.put('/', function(req, res) {
    controlador.update(req.body).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.get('/:carnet' ,function(req, res) {
    controlador.selectOne(req.params).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

router.delete('/:carnet',function(req, res) {
    controlador.deleteOne(req.params).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    })
});

module.exports = router;