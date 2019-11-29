"use strict"

var mongoose = require("mongoose");
var Subject = mongoose.model("Subject");

exports.get_all_subjects = function(req, res) {
    Subject.find({}, function(err, card) {
      if (err) res.send(err);
      res.json(card);
    });
  };
  
  exports.create_a_subject = function(req, res) {
    var new_subject = new Subject(req.body);
    new_subject.save(function(err, card) {
      if (err) res.send(err);
      res.json(card);
    });
  };