//var db_string = 'mongodb://randy:.r4ndy@ds137827.mlab.com:37827/moviesflix';
var db_string = 'mongodb+srv://randy:<password>@moviesflix.nefe5yz.mongodb.net/?retryWrites=true&w=majority';
var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;

var Movies, Series, TvShows;

 db.on('error', console.error.bind(console, 'Erro ao conectar com o mongodb!'));
 db.once('open', function(){
 	console.log("Conectado ao MongoDB com sucesso!");
  	var movieSchema = mongoose.Schema({
 // 	colunas do banco de dados
	  	'id': String,		//*
	    'title': String, 	//*
	    'origlang': String,	//*
	    'origtitle': String,//*
	    'images': [{
	    		'poster': String,
	    		'backimage': String,
	    		'smallposter': String,
	    		'othersposter': []
	    		}],
	    'comment': String,	//replicate title
	    'sinopse': String,	//*
	    'release': String,	//*
	    'stars': String,	//*
	    'categories': String,	//*
	    'duracao': String,	//*
	    'atores': [{
	    		'name': String,
	    		'page': String,
	    		'photo': String
	    		}],			//*
	    'trailer': String,	//*
	    'ano': String
	 });

  	var serieSchema = mongoose.Schema({
  		'id': String,		//*
	    'title': String, 	//*
	    'origlang': String,	//*
	    'origtitle': String,//*
	    'images': [{
	    		'poster': String,
	    		'backimage': String,
	    		'smallposter': String,
	    		'othersposter': []
	    		}],
	    'comment': String,	//replicate title
	    'sinopse': String,	//*
	    'release': String,	//*
	    'stars': String,	//*
	    'categories': String,	//*
	    'duracao': String,	//*
	    'atores': [{
	    		'name': String,
	    		'page': String,
	    		'photo': String
	    		}],			//*
	    'trailer': String,	//*
	    'seasons': String
  	});

console.log(mongoose.model('movies', movieSchema));
	// podemos usar os metodos do model do mongoose
	 exports.Movies = mongoose.model('Movies', movieSchema);
	 exports.Series = mongoose.model('Series', serieSchema);
	 exports.TvShows = mongoose.model('TvShows', serieSchema);
 });
