const express = require('express')
const router = express.Router()

module.exports = router

const banco = require('../models/banco')
const loginController = require('../controllers/login-controller')

router.get('/', function(req, res){
    res.render('login')
});

router.post('/valida', function(req, res){

    function enviaRespostaOK() {
        res.status(200)
        res.send(JSON.stringify({}))
    }

    function enviaMensagemErro(mensagem) {
        res.statusMessage = mensagem
        res.status(300)
        res.send(JSON.stringify(mensagem))
    }

    loginController.ValidaLogin(req.body, enviaRespostaOK, enviaMensagemErro)
})