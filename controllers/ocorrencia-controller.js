module.exports = {
    InsereOcorrencia,
}

const banco = require('../models/banco')

function InsereOcorrencia(ocorrencia, sucesso, falha) {
    banco.InsereOcorrencia(ocorrencia, sucesso, falha)
}