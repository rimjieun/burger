var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(obj) {
  var arr = [];

  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      arr.push(key + "=" + obj[key]);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(tableName, callback) {
    var queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function(tableName, columns, values, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (" + columns.toString(); + ") VALUES (" + printQuestionMarks(values.length) + ")";

    console.log(queryString);

    connection.query(queryString, values, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  updateOne: function(tableName, object, condition, callback) {
    var queryString = "UPDATE " + table;

    queryString += " SET" + objToSql(object) + " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;