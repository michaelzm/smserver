"use strict";

var mongoose = require("mongoose"),
  Card = mongoose.model("Card");

exports.get_all_cards = function(req, res) {
  Card.find({}, function(err, card) {
    if (err) res.send(err);
    res.json(card);
  });
};

exports.create_a_card = function(req, res) {
  var new_card = new Card(req.body);
  new_card.save(function(err, card) {
    if (err) res.send(err);
    res.json(card);
  });
};

exports.update_a_card = function(req, res) {
  Card.findOneAndUpdate(
    { _id: req.params.cardId },
    req.body,
    { new: true },
    function(err, card) {
      if (err) res.send(err);
      res.json(card);
    }
  );
};

exports.get_cards_matching_review = function(req, res) {
  Card.find({ reviewCount: req.query.reviewCount }, function(err, card) {
    if (err) res.send(err);
    res.json(card);
  });
};

exports.get_card_by_id = function(req, res) {
  Card.findById(req.params.cardId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.get_learn_today_card = function(req, res) {
  Card.find({ next_review_date: { $gte: 0, $lte: Date.now() } }, function(
    err,
    cards
  ) {
    if (err) res.send(err);
    res.json(cards);
  });
};
