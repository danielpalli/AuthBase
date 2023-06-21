const jwt = require("jsonwebtoken");
const { handleHttpError } = require("../utils/handleError");
const config = require('config');

const validarJwt = ( req, res, next ) => {
    const bearerHeader = req.get('Authorization');

    if (!bearerHeader) return handleHttpError(res, 'No se ha enviado el token', 401);
    
    const token = bearerHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, eval(config.get('global.jwtSecret')));
        req.uid = payload.uid;
        next();
    } catch (error) {
        handleHttpError(res, 'Error internal server', 500); 
    }
}

module.exports = {
    validarJwt
}