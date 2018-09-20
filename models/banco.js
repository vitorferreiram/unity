module.exports = {
    CriaNovoUsuario,
    EmailCadastrado,
    ValidaLogin,
}

const mysql = require('mysql')
const crypto = require('crypto')

function CriaNovoUsuario(usuario, sucesso, falha) {

    usuario.SalSenha = CriaSalSenha()
    usuario.Senha = CriaHashSenha(usuario.Senha, usuario.SalSenha)
    usuario.Id = CriaHashUsuario(usuario.Email)

    function insereUsuario()
    {
        RealizaQuery(`INSERT INTO Usuario VALUES ('${usuario.Id}', '${usuario.Nome}', '${usuario.Email}', '${usuario.Senha}', '${usuario.SalSenha}', '${usuario.Tipo}')`,             
                    sucesso,
                    falha)
    }

    EmailCadastrado(usuario.Email, insereUsuario, falha);
}

function EmailCadastrado(email, sucesso, falha) {
    function validaEmailExistente(resultado)
    {
        if (resultado.length === 0)
            sucesso()
        else
            falha("O email digitado já está cadastrado.")
            
    }
    return RealizaQuery(`SELECT * FROM Usuario WHERE Email = '${email}'`, validaEmailExistente, falha)   
}

function ValidaLogin(usuario, sucesso, falha) {
    
    function validaSenha(resultado) {
        var salCadastrado = resultado[0].Sal
        var hashSenhaCadastrada = resultado[0].Senha

        var hashSenhaDigitada = CriaHashSenha(usuario.Senha, salCadastrado);

        if (hashSenhaDigitada === hashSenhaCadastrada)
            sucesso()
        else
            falha('Senha ou email incorretos. Digite novamente!')
    }
    
    RealizaQuery(`SELECT Senha, Sal FROM Usuario WHERE Email = '${usuario.Email}'`, validaSenha, falha)
}

function RealizaQuery(query, sucesso, falha) {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'unitypass',
        database : 'Dados'
    })

    connection.query(query, (error, results, _) => {
        if (error){
            throw falha(error)
        }
        else 
            sucesso(results)    
    })

    connection.end()
}

function CriaHashSenha(senha, salSenha) {
    return CriaHash(senha, salSenha, 32)
}

function CriaHashUsuario(email) {
    return CriaHash(email, '', 4)
}

function CriaHash(dado, sal, tamanhoHash) {
    return crypto.pbkdf2Sync(dado, sal, 1000, tamanhoHash, 'sha256').toString('hex')
}

function CriaSalSenha() {
    return crypto.randomBytes(8).toString('hex')
}