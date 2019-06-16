var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');

//executado antes de cada resposta
var allowCors = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST'); //DELETE
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');
	next(); // continue com o processamento
}
 app.listen(process.env.PORT || 5000);
 app.use(allowCors);
 app.use(bodyParser.json());
 app.use(express.static(__dirname + '/public'));
 app.use(bodyParser.urlencoded ({
 	extended: true
}));