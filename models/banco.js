module.exports = {
    CriaNovoUsuario,
    EmailCadastrado,
    ValidaLogin,
    ObtemHumores,
    ObtemSentimentos,
    InsereOcorrencia
}

const mysql = require('mysql')
const crypto = require('crypto')

const conexao = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'jimi225525',
    database : 'Unity',
    insecureAuth : true
})

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

function ObtemHumores(sucesso, falha) {
    RealizaQuery('SELECT * FROM Humor', sucesso, falha)
}

function ObtemSentimentos(sucesso, falha) {
    RealizaQuery('SELECT * FROM Sentimento', sucesso, falha)
}

function InsereOcorrencia(ocorrencia, sucesso, falha) {
    RealizaQuery(`INSERT INTO Ocorrencia VALUES (NULL, '${ocorrencia.Data}', '${ocorrencia.Descricao}', '${ocorrencia.Acoes}', '${ocorrencia.Pensamentos}', '${ocorrencia.Paciente}', '${ocorrencia.Humor}', '${ocorrencia.Data}')`, sucesso, falha)
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
            sucesso(resultado[0])
        else
            falha('Senha ou email incorretos. Digite novamente!')
    }
    
    RealizaQuery(`SELECT * FROM Usuario WHERE Email = '${usuario.Email}'`, validaSenha, falha)
}

function RealizaQuery(query, sucesso, falha) {
    conexao.query(query, (error, results, _) => {
        console.log(error)
        if (error)
            falha(error.sqlMessage)
        else 
            sucesso(results)    
    })
}

function CriaHashSenha(senha, sal) {
    return CriaHash(senha, sal, 32)
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