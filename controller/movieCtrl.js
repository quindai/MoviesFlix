var db = require("../db_config.js");

exports.list = (callback) => {
  console.log("Em list");
  let m = db.Movies.find().lean().exec();
  m.then((movies) => {
    // console.log(movies);
    callback(movies);
  }).catch((error) => {
    callback(error);
  });
};
// const m = await db.Movies.find({});
// console.log(m);
// m.then((movies) => {
//   return movies;
// }).catch((error) => {
//   return error;
// });
// db.Movies.find({}, function (error, movies) {
//   if (error) {
//     callback({ error: "Não foi possível retornar os dados!" });
//   } else {
//     callback(movies);
//   }
// });
// };

exports.search = async (arg, callback) => {
  console.log("Em search");
  callback(await db.Movies.find({ title: new RegExp(arg + "+", "i") }));
  // db.Movies.find(
  //   { title: new RegExp(arg + "+", "i") },
  //   function (error, movies) {
  //     if (error) {
  //       callback({ error: "Não foi possível retornar os dados!" });
  //     } else {
  //       callback(movies);
  //     }
  //   }
  // );
};

exports.search_categories = async (arg, callback) => {
  console.log("Em search");
  callback(await db.Movies.find({ categories: new RegExp(arg + "+", "i") }));
};

exports.listLimit = async function (num, callback) {
  console.log("Em listLimit Movie");
  let result = await db.Movies.find({}).lean().limit(parseInt(num));
  callback(result);
  //   db.Movies.find({}, function (error, movies) {
  //     if (error) {
  //       return { error: "Não foi possível retornar os dados!" };
  //     } else {
  //       return movies;
  //     }
  //   })
  //     .lean()
  //     .limit(parseInt(num));
};

exports.save = async function (data, callback) {
  console.log("Em save Movie");
  console.log(data);
  let movie = new db.Movies({
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
    ano: "1999",
  });
  await movie.save();
  callback(movie);
  // .then((movie) => {
  //   return movie;
  // })
  // .catch((error) => {
  //   return error;
  // });
  //   .save(function (error, movie) {
  //     if (error) {
  //       callback({ erro: "Não foi possível salvar dados!" + error });
  //     } else {
  //       callback(movie);
  //     }
  //   });
};
