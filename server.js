//server started off as todo list server, so dont be confused with weird namegiving
require("dotenv").config();
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require("mongoose");

Card = require("./api/models/cardModel"); //simple card model
Subject = require('./api/models/subjectModel')
bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
   console.log('congrats, problem solved')
})
.catch((err)=>{
   console.log(`there is a problem with ${err.message}`);
   console.log(err)
   process.exit(-1)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require("./api/routes/smserverroutes"); //importing route
routes(app); //register the route

app.listen(port);

app.use(function(req, res) {
  res.status(404).send({
    url: req.originalUrl + " not found!"
  });
});
console.log("RESTful API server started on: " + port);
