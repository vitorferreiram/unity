module.exports = {
    CadastraNovo
}

const banco = require('../models/banco')

function CadastraNovo(usuario, sucesso, falha) {
    banco.CriaNovoUsuario(usuario, sucesso, falha)
}