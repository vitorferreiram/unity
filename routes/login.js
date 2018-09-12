const express = require('express')
const arangodb = require('../models/arango-db')
const router = express.Router()

router.get('/', function(req, res){
    res.render('login')
});

router.post('/', function(req, res){
    var erros = ValidaPreenchimentoObrigatorio(req)
    if (!erros){
        var usuario = { email: req.body.email, senha: req.body.senha }
        
        console.log(usuario)

        arangodb.ObtemUsuarios(function(objeto) {
            console.log(objeto)
        });
    }
    else{
        res.render('login', {
            errors: erros
        })
    }
})

module.exports = router