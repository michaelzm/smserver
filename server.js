//server started off as todo list server, so dont be confused with weird namegiving
require("dotenv").config();
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose");

Card = require("./api/models/cardModel"); //simple card model
bodyParser = require("body-parser");
var cors = require("cors");
app.use(cors());

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require("./api/routes/smserverroutes"); //importing route
routes(app); //register the route
console.log(routes);

app.listen(port);

app.use(function(req, res) {
  res.status(404).send({
    url: req.originalUrl + "THIS IS THE INDEX SITE"
  });
});

console.log("RESTful API server started on: " + port);
