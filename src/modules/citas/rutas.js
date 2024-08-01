const express = require('express');
const responses = require('../../utils/responses');
const controlador = require('./controlador');
const logRouting = require('../../middlewares/logRouting');

const router = express.Router();

router.use(logRouting('/api/citas'));

router.post('/', function(req, res) {
    controlador.create(req.body).then((response) => {
        responses.success(req, res, response, 200);
    });
});

router.get('/', function(req, res) {
    controlador.selectAll().then((response) => {
        responses.success(req, res, response, 200);
    });
});

router.get('/:id_cita', function(req, res) {
    controlador.selectOne(req.params)
        .then((response) => {
            responses.success(req, res, response, 200);
        })
        .catch((error) => {
            console.log(error);
            responses.error(req, res, 'Algo salio mal en [GET] /api/citas/:id_cita', 500);
        });
});

router.put('/:id_cita', function(req, res) {
    controlador.update(req.body)
        .then((response) => {
            responses.success(req, res, response, 200);
        })
});

module.exports = router;