"use strict";
module.exports = function(app) {
  var card = require("../controllers/cardController");
  var subject = require("../controllers/subjectController");

  app
    .route("/collection")
    .get(card.get_all_cards)
    .post(card.create_a_card);

  app
    .route("/collection/card/:cardId")
    .get(card.get_card_by_id)
    .patch(card.update_a_card);

  app
    .route("/collection/reviewCount/:reviewCount")
    .get(card.get_cards_matching_review);

  app.route("/today").get(card.get_learn_today_card);


  app
  .route("/subject")
  .get(subject.get_all_subjects)
  .post(subject.create_a_subject);
  
};
