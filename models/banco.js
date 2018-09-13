module.exports = 
{
    CriaNovoUsuario,
    UsuarioValido,
    ValidaLogin,
}

function CriaNovoUsuario(usuario)
{
    usuario.Senha = CriaHashSenha(usuario.Senha)

    return true
}

function UsuarioValido(usuario)
    return true
}

function ValidaLogin(usuario)
{
    return true
}

function CriaHashSenha(senha)
{
    senha = AdicionaSalSenha(senha)
    return true
}

function AdicionaSalSenha(senha)
{
    return senha
}

function CriaHashUsuario(email)
{
    return true
}