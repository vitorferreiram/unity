const express = require('express')
const banco = require('../models/banco')
const router = express.Router()

router.get('/', function(_, res) {
    res.render('cadastro-usuario')
});

router.post('/novo', function(req, _) {
    console.log(banco)

    var usuario = req.body

    if (banco.UsuarioValido(usuario))
        banco.CriaNovoUsuario(usuario)
})

module.exports = router