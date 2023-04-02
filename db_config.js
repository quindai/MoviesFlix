// const { Schema } = mongoose;
var db_string =
  "mongodb+srv://randyquindai:ASEZdNCavqyxcsfd@moviesflix.o30pppq.mongodb.net/?retryWrites=true&w=majority";

var mongoose = require("mongoose");
mongoose
  .connect(db_string)
  .then(() => {
    console.log("Connected to the database ");

    // var db = mongoose.connection;

    var Movies, Series, TvShows;

    // db.on("error", console.error.bind(console, "Erro ao conectar com o mongodb!"));
    // db.once("open", function () {
    //   console.log("Conectado ao MongoDB com sucesso!");
    var movieSchema = new mongoose.Schema({
      // 	colunas do banco de dados
      id: String, //*
      title: String, //*
      origlang: String, //*
      origtitle: String, //*
      images: [
        {
          poster: String,
          backimage: String,
          smallposter: String,
          othersposter: [],
        },
      ],
      comment: String, //replicate title
      sinopse: String, //*
      release: String, //*
      stars: String, //*
      categories: String, //*
      duracao: String, //*
      atores: [
        {
          name: String,
          page: String,
          photo: String,
        },
      ], //*
      trailer: String, //*
      ano: String,
    });

    var serieSchema = new mongoose.Schema({
      id: String, //*
      title: String, //*
      origlang: String, //*
      origtitle: String, //*
      images: [
        {
          poster: String,
          backimage: String,
          smallposter: String,
          othersposter: [],
        },
      ],
      comment: String, //replicate title
      sinopse: String, //*
      release: String, //*
      stars: String, //*
      categories: String, //*
      duracao: String, //*
      atores: [
        {
          name: String,
          page: String,
          photo: String,
        },
      ], //*
      trailer: String, //*
      seasons: String,
    });

    console.log(mongoose.model("movies", movieSchema));
    // podemos usar os metodos do model do mongoose
    exports.Movies = mongoose.model("Movies", movieSchema);
    exports.Series = mongoose.model("Series", serieSchema);
    exports.TvShows = mongoose.model("TvShows", serieSchema);
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });
// });
