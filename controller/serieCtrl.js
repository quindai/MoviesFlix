var db = require("../db_config.js");

exports.list = async (callback) => {
  console.log("Em list");
  callback(await db.Series.find({}).lean().exec());
  // db.Series.find({}, function (error, series) {
  //   if (error) {
  //     callback({ error: "Não foi possível retornar os dados!" });
  //   } else {
  //     callback(series);
  //   }
  // });
};

exports.search = async (arg, callback) => {
  console.log("Em search");
  callback(await db.Series.find({ title: new RegExp(arg + "+", "i") }));
  // db.Series.find(
  //   { title: new RegExp(arg + "+", "i") },
  //   function (error, series) {
  //     if (error) {
  //       callback({ error: "Não foi possível retornar os dados!" });
  //     } else {
  //       callback(series);
  //     }
  //   }
  // );
};

exports.listLimit = async (num, callback) => {
  console.log("Em listLimit Serie");
  callback(await db.Series.find({}).lean().limit(parseInt(num)));
};

exports.save = async (data, callback) => {
  let serie = new db.Series({
    title: data.title, //*
    origlang: data.language, //*
    origtitle: data.originaltitle, //*
    images: [
      {
        poster: data.poster,
        backimage: data.backimage,
        smallposter: data.smallposter,
        othersposter: [],
      },
    ],
    comment: data.title, //replicate title
    sinopse: data.sinopse, //*
    release: data.release, //*
    stars: data.stars, //*
    categories: data.categories, //*
    duracao: data.duration, //*
    atores: [
      {
        name: data.actorname,
        page: data.actorpage,
        photo: data.actorphoto,
      },
    ], //*
    trailer: data.trailer, //*
    seasons: data.seasons,
  });
  await serie.save();
  callback(serie);
  //   function (error, serie) {
  //   if (error) {
  //     callback({ erro: "Não foi possível salvar dados!" + error });
  //   } else {
  //     callback(serie);
  //   }
  // });
};
