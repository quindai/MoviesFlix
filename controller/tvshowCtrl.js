var db = require("../db_config.js");

exports.list = async (callback) => {
  console.log("Em list");
  callback(await db.TvShows.find({}).lean().exec());
};

exports.search = async (arg, callback) => {
  console.log("Em search");
  callback(await db.TvShows.find({ title: new RegExp(arg + "+", "i") }));
};

exports.listLimit = async (num, callback) => {
  console.log("Em listLimit TV");
  callback(await db.TvShows.find({}).lean().limit(parseInt(num)));
};

exports.save = async (data, callback) => {
  new db.TvShows({
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
  })
    .save()
    .then((tvshow) => {
      callback(tvshow);
    })
    .catch((error) => {
      callback({ erro: "Não foi possível salvar dados!" + error });
    });
  // .save(function (error, tvshow) {
  //   if (error) {
  //     callback({ erro: "Não foi possível salvar dados!" + error });
  //   } else {
  //     callback(tvshow);
  //   }
  // });
};
