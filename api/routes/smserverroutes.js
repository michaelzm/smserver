"use strict";
module.exports = function(app) {
  var card = require("../controllers/cardController");

  app
    .route("/card")
    .get(card.get_all_cards)
    .post(card.create_a_card);
};
