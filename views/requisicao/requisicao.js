module.exports = {
    get: get,
    post: post,
}

function Get(rota, dado, sucesso, falha){
    $.ajax({
        url: rota,
        type: "GET",
        data: JSON.stringify(dado),
        contenttype: "application/json",
        dataType: "json"
    }).done(sucesso)
      .fail(falha)
}