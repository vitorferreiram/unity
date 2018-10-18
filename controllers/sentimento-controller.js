module.exports = {
    ObtemSentimentos,
    InsereSentimento,
    RemoveSentimento,
    EditaSentimento
}

const banco = require('../models/banco')

function ObtemSentimentos(sucesso, falha) {
    banco.ObtemHumores(sucesso, falha)
}

function InsereSentimento(sentimento, sucesso, falha) {
    banco.InsereSentimento(sentimento, sucesso, falha)
}

function RemoveSentimento(sentimento, sucesso, falha) {
    banco.RemoveSentimento(sentimento, sucesso, falha)
}

function EditaSentimento(sentimento, sucesso, falha) {
    banco.EditaSentimento(sentimento, sucesso, falha)
}