var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');

var login = require('./routes/login');
var cadastroUsuario = require('./routes/cadastro-usuario');
var principal = require('./routes/principal');
var humor = require('./routes/humor')
var sentimento = require('./routes/sentimento')
var ocorrencia = require('./routes/ocorrencia')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../views')));

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

app.use(flash());

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('msg_sucesso');
  res.locals.error_msg = req.flash('msg_erro');
  res.locals.error = req.flash('erro');
  res.locals.user = req.user || null;
  next();
});

app.use('/login', login)
app.use('/cadastro-usuario', cadastroUsuario)
app.use('/principal', principal)
app.use('/ocorrencia', ocorrencia)
app.use('/humor', humor)
app.use('/sentimento', sentimento)
app.use('/', login)

app.use('/public', express.static(__dirname + '/public'))
app.use('/script', express.static(__dirname + '/node_modules'))

app.set('port', (process.env.PORT || 3001))

app.listen(app.get('port'), function(){
	console.log('Iniciado na porta: '+app.get('port'))
});