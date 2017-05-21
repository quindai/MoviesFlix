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