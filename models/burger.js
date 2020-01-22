var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", cb);
  },
  // The variables cols and vals are arrays.
  add: function(object, cb) {
    orm.insertOne("burgers", object, function(res) {
      cb(res);
    });
  },
  update: function(column, boolean, id, cb) {
    orm.updateOne("burgers", column, boolean, id, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
