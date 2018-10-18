const express = require('express')
const ocorrencia = require('../controllers/ocorrencia-controller.js')
const router = express.Router()

router.post('/', function(req, res) {
    function EnviaRespostaOK() {
        res.status(200)
        res.send(JSON.stringify({}))
    }
    
    function EnviaMensagemErro(mensagem) {
        res.statusMessage = mensagem
        res.status(300)
        res.send(JSON.stringify(mensagem))
    }

    ocorrencia.InsereOcorrencia(req.body, EnviaRespostaOK, EnviaMensagemErro);
})

module.exports = router