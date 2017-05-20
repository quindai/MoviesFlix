var db_string = 'mongodb://quindai:r4ndy123@ds137141.mlab.com:37141/icflix';
var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};
var mongoose = require('mongoose').connect(db_string, options);
var db = mongoose.connection;

var Movies;

 db.on('error', console.error.bind(console, 'Erro ao conectar'));
 db.once('open', function(){
 	console.log("Conectado com sucesso");
  	var movieSchema = mongoose.Schema({
 // 	colunas do banco de dados
	  	'id': String,
	    'title': String,
	    'images': [],
	    'comment': String,
	    'sinopse': String,
	    'release': String,
	    'stars': String,
	    'categories': [],
	    'duracao': String,
	    'autores': [],
	    'trailer': String,
	    'lancamento': String
	 });

  	/*var serieSchema = mongoose.Schema({
  		id: String,
	    title: String,
	    subtitle: String,
	    images: [],
	    comment: String,
	    sinopse: String,
	    release: String,
	    stars: String,
	    categories: [],
	    duracao: String,
	    autores: [],
	    trailer: String,
	    lancamento: String
  	});*/

console.log(mongoose.model('movies', movieSchema));
	// podemos usar os metodos do model do mongoose
	 exports.Movies = mongoose.model('Movies', movieSchema);
	 //exports.Series = mongoose.model('series', serieSchema);
 });