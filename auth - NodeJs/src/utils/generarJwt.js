const jwt = require('jsonwebtoken');
const config = require('config');

const generarJwt = (uid='') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, eval(config.get('global.jwtSecret')), {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve(token);
            }
        });
    })
}

module.exports = {
    generarJwt
}
