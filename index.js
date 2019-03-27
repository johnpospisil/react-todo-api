var express = require('express'),
    app = express(),
    mongoose = require('mongoose')
    
var todoRoutes = require('./routes/todos')
    
app.get('/', function(req, res) {
    res.send("Hello from the Root Route!");
});

app.use('/api/todos', todoRoutes);


app.listen(process.env.PORT, function() {
    console.log("APP IS RUNNING ON PORT " + process.env.PORT)
})