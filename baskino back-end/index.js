const mongoose  = require("mongoose");
const express = require('express');
let app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
let passwordHash = require('password-hash');
var request = require('request');
let Schema = mongoose.Schema;
mongoose.plugin(require('mongoose-regex-search'));




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
app.use(bodyParser());
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain);
app.get("/homepage", function(req, res){
  Home.find({/*original_name: "The Big Bang Theory"*/}, function (err, person) {
    res.send(person);
  })
});


//add with json
const obj = JSON.parse(fs.readFileSync('./data/homepage.json', 'utf8'))
let HomeSchema = new Schema({
    _page: Number,
    _toptvshows_mainbackground: {type:String},
    _toptvshows_namemain: {type:String},
    _toptvshows_main_id: {type:Number},
    _toptvshows_secondbackground: {type:String},
    _toptvshows_namesecond: {type:String},
    _toptvshows_second_id: {type:Number},
    _toptvshows_thertbackground: {type:String},
    _toptvshows_namethert: {type:String},
    _toptvshows_thert_id: {type:Number},


      _topfilms_mainbackground: {type:String},
      _topfilms_namemain: {type:String},
      _topfilms_main_id: {type:Number},
      _topfilms_secondbackground: {type:String},
      _topfilms_namesecond: {type:String},
      _topfilms_second_id: {type:Number},
      _topfilms_thertbackground: {type:String},
      _topfilms_namethert: {type:String},
      _topfilms_thert_id: {type:Number},
  });
  let Home = mongoose.model('Homepage', HomeSchema);
// let home = new Home({
//   _page: 1,
//   _toptvshows_mainbackground: obj.toptvshows_mainbackground,
//   _toptvshows_namemain: obj.toptvshows_namemain,
//   _toptvshows_main_id: obj.toptvshows_main_id,
//   _toptvshows_secondbackground: obj.toptvshows_secondbackground,
//   _toptvshows_namesecond: obj.toptvshows_namesecond,
//   _toptvshows_second_id: obj.toptvshows_second_id,
//   _toptvshows_thertbackground: obj.toptvshows_thertbackground,
//   _toptvshows_namethert: obj.toptvshows_namethert,
//   _toptvshows_thert_id: obj.toptvshows_thert_id,
//
//   _topfilms_mainbackground: obj.topfilms_mainbackground,
//   _topfilms_namemain: obj.topfilms_namemain,
//   _topfilms_main_id: obj.topfilms_main_id,
//   _topfilms_secondbackground: obj.topfilms_secondbackground,
//   _topfilms_namesecond: obj.topfilms_namesecond,
//   _topfilms_second_id: obj.topfilms_second_id,
//   _topfilms_thertbackground: obj.topfilms_thertbackground,
//   _topfilms_namethert: obj.topfilms_namethert,
//   _topfilms_thert_id: obj.topfilms_thert_id,
// });
// console.log(home)
// home.save(function(){
//     console.log("добавлен")
// })





//add with json
// const obj = JSON.parse(fs.readFileSync('./data/actors.json', 'utf8'));
let ActorsSchema = new Schema({
  _page: Number,
  _actor_name: {type:String},
  _actor_description: {type:String},
  _actor_img: {type:String},
});
let Actors = mongoose.model('Actors', ActorsSchema);
// addActors();
// function addActors(){
//   for(let i=0; i<obj.result.length;i++){
//     let actor = new Actors({
//       _page: obj.result[i].page,
//       _actor_name: obj.result[i].actor_name,
//       _actor_description: obj.result[i].actor_description,
//       _actor_img: obj.result[i].actor_img,
//     });
//     actor.save(function(){
//         console.log("добавлен")
//     })
//   }
// }
app.get('/actors',(req,res)=>{
  Actors.find({/*original_name: "The Big Bang Theory"*/}, function (err, person) {
    res.send(person);
  })
})


let AboutSiteSchema = new Schema({
  _main_name: {type:String},
  _main_text: {type:String},
  _result: {type:Array},
});
let AboutSite = mongoose.model('AboutSite', AboutSiteSchema);
AboutSiteAdd();
function AboutSiteAdd(){
  const obj = JSON.parse(fs.readFileSync('./data/AboutSite.json', 'utf8'))
  // let aboutSite = new AboutSite({
  //   _main_name: obj.main_name,
  //   _main_text: obj.main_text,
  //   _result: obj.result,
  // });
  // aboutSite.save(function(){
  //     console.log("добавлен")
  // })
}
app.get('/aboutsite',(req,res)=>{
  AboutSite.find({/*original_name: "The Big Bang Theory"*/}, function (err, person) {
    res.send(person);
  })
})













let userSchema = new Schema({
    _first_name: {type:String},
    _last_name: {type:String},
    _email: {type:String},
    _password: {type:String},
    _again_password: {type:String},
})
let User = mongoose.model("user",userSchema);

app.post('/reguser',(req,res)=>{
  const data = JSON.parse(req.body.RegUser)
  let user = new User({
      _first_name: data.first_name,
      _last_name: data.last_name,
      _email: data.email,
      _password: passwordHash.generate(data.password),
      _again_password: passwordHash.generate(data.again_password),
  });
  User.find({_email: user._email},(err, person)=>{
    if(Object.keys(person).length === 0){
      user.save(function(){
          res.send("Пользователь добавлен!");
      });
    }else if(person){
      res.send("Пользователь с таким Email уже зарегистрирован")
    } else{
      user.save(function(){
      res.send("Пользователь добавлен!");
      });
    }
  })
})
app.get('/users',(req,res)=>{
  User.find({/*original_name: "The Big Bang Theory"*/}, function (err, person) {
    res.send(person);
  })
})
app.post('/logpas', (req,res)=>{
  const data = JSON.parse(req.body.LogUser)
  let checkEmail = data.email;
  let chekPassword = data.password;
    User.find({_email: checkEmail},(err,person)=>{
      if(err){
        console.log(err)
      }
      // console.log(user.password);
      if(passwordHash.verify(chekPassword, person[0]._password)){
        res.send(true);
      } else {
        res.send(false);
      }
  })
})



let newFilmTvShowSchema = new Schema({
    _name: {type:String},
    _email: {type:String},
})
let NewFilmTvShow = mongoose.model("newFilmTvShow",newFilmTvShowSchema);
app.post('/newfilmstvshow',(req,res)=>{
  const data = JSON.parse(req.body.NEWFilmTvShows)
  console.log(data)
   let newFilmTvShow = new NewFilmTvShow({
     _name: data.name,
     _email: data.email,
   });
   NewFilmTvShow.find({_name: data.name}, (err,person)=>{
     if(Object.keys(person).length === 0){
       newFilmTvShow.save(function(){
           res.send(true);
       });
     }else if(person){
       res.send(false)
     } else{
       newFilmTvShow.save(function(){
       res.send(true);
       });
     }
    })
});





// not working!!
// app.get(`/comment`,(req,res)=>{
//   const arrComment = [];
//   Comment.find({}, function (err, person) {
//     res.send(person);
//
//     console.log(person.length);
//     for(let i=0; i<person.length; i++){
//       arrComment.push(person[i].id)
//     }
//     for(let i=0; i<arrComment.length;i++){
//       app.get(`/comments${arrComment[i]}`,(req,res)=>{
//         Comment.find({id: `${arrComment[i]}`}, function (err, person) {
//           res.send(person);
//         })
//       })
//     }
//   })
// })

function searcCommetToFIlm(name,id){
  app.get(`/comment${id}`,(req,res)=>{
    Comment.find({filmName: name}, function (err, person) {
      res.send(person);
    })
  })
}
pageMovie();

let commentsSchema = new Schema({
  filmName: {type:String},
  comments: {type:Array},
  ourRaiting: Number,
  id: {type:String},
})
let Comment = mongoose.model('Comments', commentsSchema);
app.post('/commenttofilm', (req,res)=>{  pageMovie();
  const data = JSON.parse(req.body.CommentToFilm);
    searcCommetToFIlm(data.filmName, data.id);
    console.log(data)
    Comment.update({filmName:data.filmName, id: data.id},{$push:{comments: data.allCommentsData},$set: {ourRaiting: data.ourRaiting}}, {upsert:true}).exec();
})



app.get("/movies", function(req, res){
  Movie.find({/*original_name: "The Big Bang Theory"*/}, function (err, person) {
    res.send(person);
  })
});
let movieSchema = new Schema({
    page: Number,
    vote_count: {type:Number},
    id: {type:Number},
    video: {type:Boolean},
    vote_average: {type:Number},
    title: {type:String},
    popularity: {type:Number},
    poster_path: {type:String},
    original_language: {type:String},
    original_title: {type:String},
    genre_ids: {type:Array},
    backdrop_path: {type:String},
    adult: {type:Boolean},
    overview: {type:String},
    comments: {type:Array},
})
let Movie = mongoose.model('Movie', movieSchema);
function pageMovie(){
  for(let i=1; i<20; i++){
    app.get(`/movies=${i}`,(req,res)=>{
      Movie.find({page: `${i}`}, function (err, person) {
        res.send(person);
      })
    })
  }
}
pageMovie();
/*-------------------------------------------------------------*/
// addFilmsInDataBase();
// async function addFilmsInDataBase(){
//       for(let i=1; i<30;i++){
//          const result =  await _getMovieData(i);
//             for(let i =0; i<result.results.length; i++){
//               let movie = new Movie({
//                           page: i,
//                           vote_count: result.results[i].vote_count,
//                           id: result.results[i].id,
//                           video: result.results[i].video,
//                           vote_average: result.results[i].vote_average,
//                           title: result.results[i].title,
//                           popularity: result.results[i].popularity,
//                           poster_path: result.results[i].poster_path,
//                           original_language: result.results[i].original_language,
//                           original_title: result.results[i].original_title,
//                           genre_ids: result.results[i].genre_ids,
//                           backdrop_path: result.results[i].backdrop_path,
//                           adult: result.results[i].adult,
//                           overview: result.results[i].overview  ,
//                           comments: [
//                             {
//                                 name: "",
//                                 email: "",
//                                 date: "",
//                             }
//                           ],
//               });
//               movie.save(function(){
//                 console.log(result.results[i] + "добавлен")
//               })
//             }
//             // result.results[0].original_name)
//       }
//     //   console.log( 'vse');
//     //
//     // return true;
// }
// function _getMovieData(page){
//       return new Promise((resolve,reject)=>{
//         request(`https://api.themoviedb.org/3/movie/popular?language=ru-ru&api_key=b732d95555e47a38bc32353240a46083&page=${page}`, {json: true}, (error, res, body)=>{
//           if(error){
//         reject(error);
//         return;
//       }
//       resolve(body);
//     })
//   })
// }
/*-------------------------------------------------------------*/



// resSerch = (pers) =>{
//   if(pers.length>0){
//     console.log(pers)
//     res.send(pers);
//   } else {
//     res.send(false);
//   }
// }









pageTvShows();
let tvShowsSchema = Schema(
  {
    page: Number,
    original_name: String,
    genre_ids: Array,
    name: String,
    popularity: Number,
    origin_country: String,
    vote_count: Number,
    first_air_date: String,
    backdrop_path: String,
    original_language: String,
    id: Number,
    vote_average: Number,
    overview: String,
    poster_path: String,
    comments: [
      {
        name: String,
        email: String,
        date: String,
      }
    ],
  }
);
app.get("/tvshows", function(req, res){
  TvShows.find({/*original_name: "The Big Bang Theory"*/}, function (err, person) {
    res.send(person);
  })
});
let TvShows = mongoose.model('TvShows', tvShowsSchema);
function pageTvShows(){
  for(let i=1; i<20; i++){
    app.get(`/tvshows=${i}`,(req,res)=>{
      TvShows.find({page: `${i}`}, function (err, person) {
        res.send(person);
      })
    })
  }
}
pageTvShows();
/*-------------------------------------------------------------*/
// addTvShowsInDataBase();
// async function addTvShowsInDataBase(){
//       for(let i=1; i<30;i++){
//          const result =  await _getMovieData(i);
//             for(let i =0; i<result.results.length; i++){
//               let tvShows123 = new TvShows({
//                           page: i,
//                           original_name: result.results[i].original_name,
//                           genre_ids: result.results[i].genre_ids,
//                           name: result.results[i].name,
//                           popularity: result.results[i].popularity,
//                           origin_country: result.results[i].origin_country,
//                           vote_count: result.results[i].vote_count,
//                           first_air_date: result.results[i].first_air_date,
//                           backdrop_path: result.results[i].backdrop_path,
//                           original_language: result.results[i].original_language,
//                           id: result.results[i].id,
//                           vote_average: result.results[i].vote_average,
//                           overview: result.results[i].overview,
//                           poster_path: result.results[i].poster_path,
//                           comments: [
//                             {
//                               name: "",
//                               email: "",
//                               date: "",
//                             }
//                           ],
//               });
//               tvShows123.save(function(){
//                 console.log(result.results[i] + "добавлен")
//               })
//             }
//             // result.results[0].original_name)
//       }
//     //   console.log( 'vse');
//     //
//     // return true;
// }
// function _getMovieData(page){
//       return new Promise((resolve,reject)=>{
//         request(`https://api.themoviedb.org/3/tv/popular?language=ru-ru&api_key=b732d95555e47a38bc32353240a46083&page=${page}`, {json: true}, (error, res, body)=>{
//           if(error){
//         reject(error);
//         return;
//       }
//       resolve(body);
//     })
//   })
// }








// ДОБАВЛЕНИЯ ИНФОРМАЦИИ ДЛЯ ПОИСКА
// const all = [];
// allPoisk = () => {
//   Movie.find({}, function (err, person) {
//       for(let i=0; i<person.length; i++){
//         all.push(person[i].title);
//         all.push(person[i].id);
//         all.push('Movie')
//       }
//   })
//   TvShows.find({}, function (err, person) {
//     for(let i=0; i<person.length; i++){
//       all.push(person[i].name);
//       all.push(person[i].id);
//       all.push('TvShows')
//     }
//   })
// }
// allPoisk();
let allNameSchema = new Schema({
  name: {type:String},
  id: {type:String},
  type: {type:String},
});
let AllName = mongoose.model('AllNameFORSEACHING', allNameSchema);
// setTimeout(()=>{
//   AboutSiteAdd();
//   function AboutSiteAdd(){
//     for(let i=0; i<all.length;i=i+3){
//       let allName = new AllName({
//         name: all[i],
//         id: all[i+1],
//         type: all[i+2]
//       });
//       allName.save(function(){
//         console.log("добавлен")
//       })
//     }
//   }
// },5000)
app.get('/allname',(req,res)=>{
  AllName.find({/*original_name: "The Big Bang Theory"*/}, function (err, person) {
    res.send(person);
  })
})

app.post("/searching", function(req, res){
  const data = JSON.parse(req.body.Serch)
  console.log(data);
  AllName.find({name: data.searchQuery}, function (err, person) {
    if(person){
      res.send(person)
    } else {
      res.send(false)
    }
  })
  // try {
  //   Movie.find({title: data.searchQuery}, function (err, person1) {
  //     try {
  //       if(person1){
  //         res.send(person1[0]);
  //       } else{
  //         res.send(false);
  //       }
  //     } catch (e) {
  //
  //     }
  //   })
  //   TvShows.find({name: data.searchQuery}, function (err, person) {
  //     try {
  //       if(person){
  //         res.send(person[0]);
  //       } else{
  //         res.send(false);
  //       }
  //     } catch (e) {
  //
  //     }
  //   })
    // Actors.find({_actor_name: req.body.Serch}, function (err, person1) {
      // if(person.length !== 0){
      //   res.send(person[0]);
      // } else{
      //   res.send(false);
      // }
    // })
  // } catch (e) {
  //   console.log(e)
  // }

});

/*-------------------------------------------------------------*/


app.listen(4200, function () {
  console.log('Example app listening on port 4200!');
});
