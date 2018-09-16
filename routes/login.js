const express = require('express')
const banco = require('../models/banco')
const router = express.Router()

router.get('/', function(req, res){
    res.render('login')
});

router.post('/valida', function(req, res){
    banco.ValidaLogin(
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