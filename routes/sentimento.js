const express = require('express')
const sentimento = require('../controllers/sentimento-controller.js')
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

    sentimento.ObtemSentimentos(EnviaRespostaOK, EnviaMensagemErro);
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

    sentimento.AdicionaSentimento(req.body, EnviaRespostaOK, EnviaMensagemErro);
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

    sentimento.EditaHumor(req.body, EnviaRespostaOK, EnviaMensagemErro);
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

    sentimento.RemoveHumor(req.body, EnviaRespostaOK, EnviaMensagemErro);
})
module.exports = router