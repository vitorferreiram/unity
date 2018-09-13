module.exports = 
{
    CriaNovoUsuario,
    UsuarioValido,
    ValidaLogin,
}

const crypto = require('crypto');

function CriaNovoUsuario(usuario) {
    usuario.Senha = CriaHashSenha(usuario.Senha)
    var email = CriaHashUsuario(usuario.Email)

    return true
}

function UsuarioValido(usuario) {
    return true
}

function ValidaLogin(usuario) {
    return true
}

function CriaHashSenha(senha) {
    return CriaHash(senha, CriaSalSenha(), 32)
}

function CriaHashUsuario(email) {
    return CriaHash(email, '', 4)
}

function CriaHash(dado, sal, tamanhoHash) {
    return crypto.pbkdf2Sync(dado, sal, 1000, tamanhoHash, 'sha256')
}

function CriaSalSenha() {
    return crypto.randomBytes(8).toString('hex')
}