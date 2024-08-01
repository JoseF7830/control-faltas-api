const jwt = require('jsonwebtoken');
const config = require('../config');

function createToken(obj) {
    return jwt.sign(obj, config.app.tokenSecret);
}

function decodeToken(token) {
    return jwt.verify(token, config.app.tokenSecret);
}

module.exports = {
    createToken,
    decodeToken
}