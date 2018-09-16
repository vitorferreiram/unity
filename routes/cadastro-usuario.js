const express = require('express')
const banco = require('../models/banco')
const router = express.Router()

router.get('/', function(_, res) {
    res.render('cadastro-usuario')
});

router.post('/novo', function(req, res) {
    banco.CriaNovoUsuario(
        req.body,
        () => {
            res.status(200)
            res.send(JSON.stringify({}))
        }, 
        (mensagem) => {
            res.statusMessage = mensagem
            res.status(300)
            res.send(JSON.stringify(mensagem))
        })
})

module.exports = router