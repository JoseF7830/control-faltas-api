const express = require('express');
const cors = require('cors');
const config = require('./config');

const grados = require('./modules/grados/rutas');
const faltas = require('./modules/faltas/rutas');
const alumno = require('./modules/alumno/rutas');
const registroFaltas = require('./modules/registroFaltas/rutas');
const login = require('./modules/login/rutas');
const usuarios = require('./modules/usuarios/rutas');
const citas = require('./modules/citas/rutas');
const suspenciones = require('./modules/suspensiones/rutas');

const app = express();

// app configuration
app.use(cors());
app.use(express.json());
app.set('port', config.app.port);

// routes
app.use('/api/login', login);
app.use('/api/grados', grados);
app.use('/api/faltas', faltas);
app.use('/api/alumno', alumno);
app.use('/api/registroFaltas', registroFaltas);
app.use('/api/usuarios', usuarios);
app.use('/api/citas', citas);
app.use('/api/suspensiones', suspenciones);

module.exports = app;