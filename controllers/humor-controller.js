module.exports = {
    ObtemHumores,
    AdicionaHumor,
    RemoveHumor,
    EditaHumor
}

const banco = require('../models/banco')

function ObtemHumores(sucesso, falha) {
    banco.ObtemHumores(sucesso, falha)
}

function AdicionaHumor(humor, sucesso, falha) {
    banco.ObtemHumores(humor, sucesso, falha)
}

function RemoveHumor(humor, sucesso, falha) {
    banco.ObtemHumores(humor, sucesso, falha)
}

function EditaHumor(humor, sucesso, falha) {
    banco.ObtemHumores(humor, sucesso, falha)
}