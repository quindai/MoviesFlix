var db_string = 'mongodb://127.0.0.1/icflix';
var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;

var Movies, Series, TvShows;

 db.on('error', console.error.bind(console, 'Erro ao conectar'));
 db.once('open', function(){
 	console.log("Conectado ao MongoDB com sucesso!");
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
	    'atores': [],
	    'trailer': String,
	    'ano': String
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
  	});

  	var tvshowSchema = mongoose.Schema({
	
  	});*/

console.log(mongoose.model('movies', movieSchema));
	// podemos usar os metodos do model do mongoose
	 exports.Movies = mongoose.model('Movies', movieSchema);
	 //exports.Series = mongoose.model('Series', serieSchema);
 });