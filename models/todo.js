var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  // name
  name: {
    type: String,
    required: "Name cannot be blank!"
  },
  // completed
  completed: {
    type: Boolean,
    default: false
  },
  // created date
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
