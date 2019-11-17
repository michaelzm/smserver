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
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Card", CardSchema);
