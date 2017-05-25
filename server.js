var app = require('./server_config.js');
var movieCtrl = require('./controller/movieCtrl.js');
var serieCtrl = require('./controller/serieCtrl.js');
var tvshowCtrl = require('./controller/tvshowCtrl.js');
var validator = require('validator'); //medida de segurança
var http = require('http');

//overview of Req e Res - http://www.murvinlai.com/req-and-res-in-nodejs.html
//				https://webapplog.com/url-parameters-and-routing-in-express-js/
app.get('/', function(req, res){
	//res.end("Você está conectado. Por favor navegue para o endereco <a href='http://localhost:8080'>http://localhost:8080</a>");
	res.sendFile(__dirname + "/index_deprecated.html");
	console.log("Aguardando redirecionamento para: http://localhost:8080");
});

app.get('/teste', function(req, res){
	res.end("Estamos em teste!");
	console.log("Estamos em teste, console!");
});

/*******  Operacoes nos filmes  ********/
app.get('/movies', function(req, res){
	//res.end("Pegando lista de usuarios");
	console.log("Pegando lista de filmes.");
	movieCtrl.list(function(resp){
		res.send(resp);
	});
	
});

app.get('/movies/search/:arg', function(req, res){
	//res.end("Pegando lista de usuarios");
	console.log("Pesquisando filme por nome. "+ req.params.arg);
	movieCtrl.search(req.params.arg ,function(resp){
		res.send(resp);
	});
	
});

app.get('/movies/:num', function(req, res){
	//res.end("Pegando usuario com esse ID");
	movieCtrl.listLimit(req.params.num, function(resp){
		res.send(resp);
	});
	console.log("Pegando apenas main "+ req.params.num);
});

app.get('/unified/:num', function(req, res){
	var data = [];
	movieCtrl.listLimit(req.params.num, function(resp){
		data.push(resp);
	});

	serieCtrl.listLimit(req.params.num, function(resp){
		data.push(resp);
	});

	tvshowCtrl.listLimit(req.params.num, function(resp){
		data.push(resp);
	});

	res.send(data);
});

app.get('/series', function(req, res){
	console.log("Pegando lista de series.");
	serieCtrl.list(function(resp){
		res.send(resp);
	});
});

app.get('/series/:num', function(req, res){
	//res.end("Pegando usuario com esse ID");
	serieCtrl.listLimit(req.params.num, function(resp){
		res.send(resp);
	});
	console.log("Pegando apenas main "+ req.params.num);
});

app.get('/tvshows', function(req, res){
	console.log("Pegando lista de tvshows.");
	tvshowCtrl.list(function(resp){
		res.send(resp);
	});
});

app.get('/tvshows/:num', function(req, res){
	//res.end("Pegando usuario com esse ID");
	tvshowCtrl.listLimit(req.params.num, function(resp){
		res.send(resp);
	});
	console.log("Pegando apenas main "+ req.params.num);
});

app.post('/movies', function(req, res){
	//var title = validator.escape(req.body.title);
	//console.log("\n"+req.body.title);
	//console.log("\n"+req.body.toString());
	//console.log("\n"+req.body+"\n");
	//res.send("success");
	movieCtrl.save(req.body, function(resp){
		console.log(resp);
		res.send(resp);
	});
	console.log("Gravando filme.");
});

app.post('/series', function(req, res){
	serieCtrl.save(req.body, function(resp){
		console.log(resp);
		res.send(resp);
	});
	console.log("Gravando série.");
});

app.post('/tvshows', function(req, res){
	tvshowCtrl.save(req.body, function(resp){
		console.log(resp);
		res.send(resp);
	});
	console.log("Gravando tvshow.");
});

app.put('/movies/:images:/:comment/:sinopse/:release:/:stars/:categories/:duracao/:atores/:trailer:/:lancamento', 
	function(req, res){
	
	console.log("Atualiza usuario com esse ID, console");
});

app.post('/series', function(req, res){
	res.end("Gravando usuario");

	console.log("Gravando serie.");
});

app.post('tvshows', function(req, res){
	console.log("Gravando tv show.");
});

console.log("Servidor ligado, navegue para o endereco: http://localhost:5000");
 /*Usado para o servidor de aplicação(nginx ou tomcat)
 	app.get('*', function(req, res) {
 	console.log("Servidor ligado, navegue para o endereco: http://localhost:5000");
	res.sendFile('/index.html', {root: __dirname});
	//res.sendfile('./public/index.html');
});*/