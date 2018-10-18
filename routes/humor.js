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

router.post('/', function(req, res) {

    function EnviaRespostaOK(resultado) {
        res.status(200)
        res.send(JSON.stringify(resultado))
    }
    
    function EnviaMensagemErro(mensagem) {
        res.statusMessage = mensagem
        res.status(300)
        res.send(JSON.stringify(mensagem))
    }

    humor.AdicionaHumor(req.body, EnviaRespostaOK, EnviaMensagemErro);
})

router.put('/', function(req, res) {

    function EnviaRespostaOK(resultado) {
        res.status(200)
        res.send(JSON.stringify(resultado))
    }
    
    function EnviaMensagemErro(mensagem) {
        res.statusMessage = mensagem
        res.status(300)
        res.send(JSON.stringify(mensagem))
    }

    humor.EditaHumor(req.body, EnviaRespostaOK, EnviaMensagemErro);
})


router.delete('/', function(req, res) {

    function EnviaRespostaOK(resultado) {
        res.status(200)
        res.send(JSON.stringify(resultado))
    }
    
    function EnviaMensagemErro(mensagem) {
        res.statusMessage = mensagem
        res.status(300)
        res.send(JSON.stringify(mensagem))
    }

    humor.RemoveHumor(req.body, EnviaRespostaOK, EnviaMensagemErro);
})

module.exports = router