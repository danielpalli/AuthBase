const router = require('express').Router();

router.post('/login', (req, res) => {
    res.json({
        ok: true,
        msg: 'Login'
    });
});


module.exports = router;