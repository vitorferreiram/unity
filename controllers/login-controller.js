module.exports = {
    ValidaLogin
}

const banco = require('../models/banco')

function ValidaLogin(usuario, sucesso, falha) {
    banco.ValidaLogin(usuario, sucesso, falha)
}