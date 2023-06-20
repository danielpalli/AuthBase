const handleHttpError = (res, mensaje, code) => {
    res.status(code);
    res.json({
        ok: false,
        error: mensaje
    });

}

module.exports = {
    handleHttpError
}
