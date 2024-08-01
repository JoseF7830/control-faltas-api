const pino = require('pino');

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});

function logRouting(path) {
    return (req, res, next) => {
        logger.info(`Se hizo una peticion [${req.method}] a la ruta: ${path}${req.path}`);
        next();
    }
}

module.exports = logRouting;