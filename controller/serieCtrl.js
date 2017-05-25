var db = require('../db_config.js');

exports.list = function(callback){
	console.log("Em list");
	db.Series.find({}, function(error, series){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(series);
		}
	});
};

exports.search = function(arg, callback){
	console.log("Em search");
	db.Series.find({'title': new RegExp(arg+'+',"i")}, function(error, series){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(series);
		}
	});
};

exports.listLimit = function(num, callback){
	console.log("Em listLimit");
	db.Series.find({}, function(error, series){
		if(error){
			callback({error: 'Não foi possível retornar os dados!'});
		} else {
			callback(series);
		}
	}).setOptions({lean: true}).limit(parseInt(num));
};


exports.save = function(data, callback){
	new db.Series({
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
	}).save(function(error, serie){
		if(error){
            callback({erro: 'Não foi possível salvar dados!'+ error});
        } else {
            callback(serie);
		}
	});
};