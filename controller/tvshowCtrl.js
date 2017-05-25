var db = require('../db_config.js');

exports.list = function(callback){
	console.log("Em list");
	db.TvShows.find({}, function(error, tvshows){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(tvshows);
		}
	});
};

exports.search = function(arg, callback){
	console.log("Em search");
	db.TvShows.find({'title': new RegExp(arg+'+',"i")}, function(error, tvshows){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(tvshows);
		}
	});
};

exports.listLimit = function(num, callback){
	console.log("Em listLimit");
	db.TvShows.find({}, function(error, tvshows){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(tvshows);
		}
	}).setOptions({lean: true}).limit(parseInt(num));
};


exports.save = function(data, callback){
	new db.TvShows({
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
		    'seasons': data.seasons
	}).save(function(error, tvshow){
		if(error){
            callback({erro: 'Não foi possível salvar dados!'+ error});
        } else {
            callback(tvshow);
		}
	});
};