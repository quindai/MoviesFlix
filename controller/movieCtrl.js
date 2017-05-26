var db = require('../db_config.js');

exports.list = function(callback){
	console.log("Em list");
	db.Movies.find({}, function(error, movies){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(movies);
		}
	});
};

exports.search = function(arg, callback){
	console.log("Em search");
	db.Movies.find({'title': new RegExp(arg+'+',"i")}, function(error, movies){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(movies);
		}
	});
};

exports.search_categories = function(arg, callback){
	console.log("Em search");
	db.Movies.find({'categories': new RegExp(arg+'+',"i")}, function(error, movies){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(movies);
		}
	});
};

exports.listLimit = function(num, callback){
	console.log("Em listLimit");
	db.Movies.find({}, function(error, movies){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(movies);
		}
	}).setOptions({lean: true}).limit(parseInt(num));
};

exports.save = function(data, callback){
	new db.Movies({
		 	'title': data.title, 	//*
		    'origlang': data.language,	//*
		    'origtitle': data.originaltitle,//*
		    'images': [{
		    		'poster': data.poster,
		    		'backimage': data.backimage,
		    		'smallposter': data.smallposter,
		    		'othersposter': []
		    		}],
		    'comment': data.title,	//replicate title
		    'sinopse': data.sinopse,	//*
		    'release': data.release,	//*
		    'stars': data.stars,	//*
		    'categories': data.categories,	//*
		    'duracao': data.duration,	//*
		    'atores': [{
		    		'name': data.actorname,
		    		'page': data.actorpage,
		    		'photo': data.actorphoto
		    		}],			//*
		    'trailer': data.trailer,	//*
		    'ano': "1999"
	}).save(function(error, movie){
		if(error){
            callback({erro: 'Não foi possível salvar dados!'+ error});
        } else {
            callback(movie);
		}
	});
};