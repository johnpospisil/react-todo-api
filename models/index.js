var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api", { useNewUrlParser: true });

// Allows us to use the Promise syntax. Allows us to avoid callback functions.
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
