const express = require('express')
const arangodb = require('../models/banco')
const router = express.Router()

router.get('/', function(req, res){
    res.render('cadastro-sentimento')
});

router.post('/', function(req, res){
})

module.exports = router