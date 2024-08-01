const express = require('express');

const controlador = require('./controlador');
const responses = require('../../utils/responses');
const jwt = require('../../utils/token');

const router = express.Router();

router.post('/', function(req, res) {
    controlador.login(req.body).then((respuesta) => {
        if (respuesta.length > 0) {
            const usuario = {
                nombre: respuesta[0].nombre,
                username: respuesta[0].username,
                rol: respuesta[0].rol
            }
            const usuarioConToken = {
                ...usuario,
                token: jwt.createToken(usuario)
            }
            responses.success(req, res, usuarioConToken, 200);
        } else {
            responses.error(req, res, 'El usuario no existe', 404);
        }
    });
});

router.get('/me', function(req, res) {
    const token = req.headers.authorization;
    const data = jwt.decodeToken(token);

    responses.success(req, res, data, 200);
});

module.exports = router;