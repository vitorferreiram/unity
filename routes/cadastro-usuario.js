const express = require('express')
const cadastroUsuarioController = require('../controllers/cadastro-usuario-controller')
const router = express.Router()

router.get('/', function(_, res) {
    res.render('cadastro-usuario')
});

router.post('/novo', function(req, res) {

    function enviaRepostaOK() {
        res.status(200)
        res.send(JSON.stringify({}))
    }
    
    function enviaRepostaErro(mensagem) {
        res.statusMessage = mensagem
        res.status(300)
        res.send(JSON.stringify(mensagem))
    }

   cadastroUsuarioController.CadastraNovo(req.body, enviaRepostaOK, enviaRepostaErro);
})

module.exports = router