module.exports = {
    ObtemSentimentos,
}

const banco = require('../models/banco')

function ObtemSentimentos(sucesso, falha) {
    banco.ObtemHumores(sucesso, falha)
}