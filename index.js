var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// The next line makes is so that files in the 'views' & 'public' folders
// can be accessed without writing '/views' or '/public' in each file path,
// for instance, in the 'app.get' line below.
// '__dirname' holds the current directory's name.
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(3000, function() {
  console.log("APP IS RUNNING ON PORT " + process.env.PORT);
});
