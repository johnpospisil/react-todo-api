var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req, res) {
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});

router.post('/', function(req, res){
    // res.send("THIS IS THE POST ROUTE!");
    // console.log(req.body);
    db.Todo.create(req.body)
    .then(function(newTodo){
        // also respond with status code 201 (i.e. 'created')
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});



module.exports = router;