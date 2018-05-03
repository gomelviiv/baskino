const mongoose  = require("mongoose");
const dataTvShows = require("./data/dataTvShows");
const express = require('express');
let app = express();
const fs = require('fs');
// const obj = {};

// const obj = JSON.parse(fs.readFileSync('./data/dataTvShows.json', 'utf8'))



mongoose.connect("mongodb://localhost/films-database", {useMongoClient: true})
  .then(() => console.log("MongoDB has started ..."))
  .catch((error) => console.log(error))

//
// fs.readFile("./data/dataTvShows.json", (err, data) =>{
//   if(err){
//     console.error(err);
//   } else {
//     // obj = JSON.parse(data);
//
//   }
// })


var tvShowsSchema = mongoose.Schema(
  {
          original_name:
            {
              type: String,
            },
          genre_ids:
            {
              type: Array,
            },
          name:
            {
              type: String,
            },
          popularity:
            {
              type: Number,
            },
          origin_country:
            {
              type: String,
            },
          vote_count:
            {
              type: Number,
            },
          first_air_date:
            {
              type: String,
            },
          backdrop_path:
            {
              type: String,
            },
          original_language:
            {
              type: String,
            },
          id: Number,
          vote_average:
            {
              type: Number,
            },
          overview:
            {
              type: String,
            },
          poster_path:
            {
              type: String,
            },
  }
);
var TvShows = mongoose.model('TvShows', tvShowsSchema);


// for(let i = 0; i<obj.results.length; i++){
//     var tvShows = new TvShows(
//       {
//           original_name: obj.results[i].original_name,
//           genre_ids: obj.results[i].genre_ids,
//           name: obj.results[i].name,
//           popularity: obj.results[i].popularity,
//           origin_country: obj.results[i].origin_country,
//           vote_count: obj.results[i].vote_count,
//           first_air_date: obj.results.first_air_date,
//           backdrop_path: obj.results[i].backdrop_path,
//           original_language: obj.results[i].original_language,
//           id: obj.results[i].id,
//           vote_average: obj.results[i].vote_average,
//           overview: obj.results[i].overview,
//           poster_path: obj.results[i].poster_path,
//       }
//   )
//   tvShows.save((err) => {
//       if(err) throw err;
//   })
// }

app.get("/tvshows", function(req, res){
  TvShows.find({/*original_name: "The Big Bang Theory"*/}, function (err, person) {
    res.send(person);
  })
});

/*-------------------------------------------------------*/

app.post("/", jsonParser, function (request, response) {
    // if(!request.body) return response.sendStatus(400);
    // console.log(request.body);
    response.json(`${request.sendingUserData.firstName} - ${request.sendingUserData.firstName}`);
});
var userSchema = mongoose.Schema(
  {
    first_name: {type: String}
    last_name: {type: String}
    email: {type: String}
    password: {type: String}
    again_password: {type: String}
  })
var Users = mongoose.model('Users', userSchema);

app.get("/user", function(req, res){
  TvShows.find({/*original_name: "The Big Bang Theory"*/}, function (err, person) {
    res.send(person);
  })
});

app.listen(4200, function () {
  console.log('Example app listening on port 4200!');
});
