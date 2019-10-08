var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");

// GET and POST Routes
router
  .route("/")
  .get(helpers.getTodos)
  .post(helpers.createTodo);

// GET, PUT, and DELETE Routes
router
  .route("/:todoId")
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo);

module.exports = router;
