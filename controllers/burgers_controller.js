var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
   });
});

router.post("/api/burgers", function (req, res) {
  burger.add(req.body, function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


router.put("/api/burgers/:id", function (req, res) {
  var id = req.params.id;

  burger.update("devoured", true, id, function (result) {
    if (result.changedRows == 0) {
      console.log("failed")
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      console.log("it worked!")
      res.status(200).end();
    }})
  });

  // Export routes for server.js to use.
  module.exports = router;