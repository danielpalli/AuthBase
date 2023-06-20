const { validationResult } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) return handleHttpError(res, errors.array()[0].msg, 400);
    next();
}

module.exports = {
    validarCampos
}