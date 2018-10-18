const express = require('express')
const humor = require('../controllers/humor-controller.js')
const router = express.Router()

router.get('/', function(req, res) {

    function EnviaRespostaOK(resultado) {
        res.status(200)
        res.send(JSON.stringify(resultado))
    }
    
    function EnviaMensagemErro(mensagem) {
        res.statusMessage = mensagem
        res.status(300)
        res.send(JSON.stringify(mensagem))
    }

    humor.ObtemHumores(EnviaRespostaOK, EnviaMensagemErro);
})

module.exports = router