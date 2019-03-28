/* global $ */
$(document).ready(function(){
   $.getJSON("/api/todos")
   .then(addTodos)
   
   $('#todoInput').keypress(function(event){
    //   '13' is the event code for the 'ENTER' key
       if(event.which == 13) {
            // create todo
            createTodo();
       }
   })
});

function addTodos(todos) {
    // add todos to page here
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function createTodo(){
    // send request to create new todo
    var userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
        addTodo(newTodo);
        $('#todoInput').val('');
    })
    .catch(function(err){
        console.log(err);
    })
}

function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + '</li>');
        if(todo.completed){
          newTodo.addClass("done");  
        } 
        $('.list').append(newTodo);
}