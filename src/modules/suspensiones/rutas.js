const express = require('express');
const responses = require('../../utils/responses');
const controlador = require('./controlador');
const logRouting = require('../../middlewares/logRouting');

const router = express.Router();

router.use(logRouting('/api/suspenciones'));

router.get('/', function(req, res) {
    controlador.selectAll().then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    });
});

router.post('/', function(req, res) {
    controlador.insert(req.body).then((respuesta) => {
        responses.success(req, res, respuesta, 200);
    });
});

module.exports = router;