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
  },
  //0 to 1 value
  calculation_difficulty: {
    type: Number,
    default: 0.3
  },
  //days until next review
  calculation_days_between_reviews: {
    type: Number,
    default: 1
  },
  calculation_last_reviewed_date: {
    type: Number
  }
});

module.exports = mongoose.model("Card", CardSchema);
