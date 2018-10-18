const express = require('express')
const banco = require('../models/banco')
const router = express.Router()

router.get('/', function(req, res){
    res.render('cadastro-sentimento')
})

router.post('/registro/ocorrencia', function(req, res){
})

routes.get('/humor', function(req, res)
{

})

module.exports = router