var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var validator = require('validator'); //medida de segurança
var db_string = 'https://api.mlab.com/api/1/icflix?apiKey=oqcznTJmboB2Fwv3mqRV_GASVNGjFNoE';
var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;
var movies;

 db.on('error', console.error.bind(console, 'Erro ao conectar'));
/* db.once('open', function(){
  	var userSchema = mongoose.Schema({
 // 		//colunas do banco de dados
	 	fullname: String,
	 	email: String,
	 	password: String,
	 	created_at: Date
	 });

	// //podemos usar os metodos do model do mongoose
	 User = mongoose.model('User', userSchema);
 });
*/
 app.listen(5000);
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded ({
 	extended: true
}));

 /*
	Como falta um  servidor de aplicacao como nginx ou tomcat para servir arquivos estaticos
	entao precisamos avisar o express onde estao localizados
 */
//app.use(express.static(path.join(__dirname, 'public'))); Não recomendado


app.get('/', function(req, res){
	//res.end("Você está conectado. Por favor navegue para o endereco <a href='http://localhost:8080'>http://localhost:8080</a>");
	res.sendFile(__dirname + "/index_deprecated.html");
	console.log("Servidor ligado, navegue para o endereco: http://localhost:5000");
});

app.get('/teste', function(req, res){
	res.end("Estamos em teste");

	console.log("Estamos em teste, console");
});

/*******  Operacoes nos filmes  ********/
app.get('/movies', function(req, res){
	//res.end("Pegando lista de usuarios");

	console.log("Pegando lista de usuarios, console");
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