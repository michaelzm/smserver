"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CardSchema = new Schema({
  question: {
    type: String
  },
  answer: {
    type: String
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  next_review_date: {
    type: Date,
    default: 0
  }
});

module.exports = mongoose.model("Card", CardSchema);
