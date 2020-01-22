var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(table, cb){
        connection.query("SELECT * FROM " + table + ";", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, object, cb){
        var queryString= "INSERT INTO " + table + " SET ?";
        connection.query(queryString, object, function(err, result){
            if (err) throw err;
            cb(result)
        })
    },
    updateOne: function (table, column, boolean, id, cb) {
        var queryString = "UPDATE " + table + " SET ?? = ? WHERE id = ?";

        console.log(queryString);
        connection.query(queryString, [column, boolean, id], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
