module.exports = {
    ObtemHumores,
}

const banco = require('../models/banco')

function ObtemHumores(sucesso, falha) {
    banco.ObtemHumores(sucesso, falha)
}