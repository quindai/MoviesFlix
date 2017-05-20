var app = require('./server_config.js');
var movieCtrl = require('./controller/movieCtrl.js');
var validator = require('validator'); //medida de segurança
var http = require('http');

// app.listen(5000);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded ({
// 	extended: true
//}));

 /*
	Como falta um  servidor de aplicacao como nginx ou tomcat para servir arquivos estaticos
	entao precisamos avisar o express onde estao localizados
 */
//app.use(express.static(path.join(__dirname, 'public'))); Não recomendado


app.get('/', function(req, res){
	//res.end("Você está conectado. Por favor navegue para o endereco <a href='http://localhost:8080'>http://localhost:8080</a>");
	res.sendFile(__dirname + "/index_deprecated.html");
	console.log("Aguardando redirecionamento para: http://localhost:5000");
});

app.get('/teste', function(req, res){
	res.end("Estamos em teste");
	console.log("Estamos em teste, console");
});

/*******  Operacoes nos filmes  ********/
app.get('/movies', function(req, res){
	//res.end("Pegando lista de usuarios");
	console.log("Pegando lista de filmes, console");
	movieCtrl.list(function(resp){
		res.send(resp);
	});
	
});
app.get('/users/:id', function(req, res){
	//res.end("Pegando usuario com esse ID");
	
	console.log("Pegando usuario com esse ID, console");
});

app.post('/users', function(req, res){

	console.log("Gravando usuario, console");
});

app.put('/users', function(req, res){
	
	console.log("Atualiza usuario com esse ID, console");
});

app.post('/users', function(req, res){
	res.end("Gravando usuario");

	console.log("Gravando usuario, console");
});


console.log("Servidor ligado, navegue para o endereco: http://localhost:5000");
 /*Usado para o servidor de aplicação(nginx ou tomcat)
 	app.get('*', function(req, res) {
 	console.log("Servidor ligado, navegue para o endereco: http://localhost:5000");
	res.sendFile('/index.html', {root: __dirname});
	//res.sendfile('./public/index.html');
});*/