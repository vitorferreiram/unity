function get(rota, data, done, fail) {
    var _url = rota;

    $.ajax({
        url: _url,
        type: 'GET',
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: 'json',
    }).done(done)
    .fail(fail)
}

function post(rota, data, done, fail) {
    var _url = rota;

    $.ajax({
        url: _url,
        type: 'POST',
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(data),
    }).done(done)
    .fail(fail)
}

function del(rota, data, done, fail) {
    var _url = rota;

    $.ajax({
        url: _url,
        type: 'DELETE',
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: 'json',
    }).done(done)
    .fail(fail)
}