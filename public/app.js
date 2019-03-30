/* global $ */
$(document).ready(function(){
   $.getJSON("/api/todos")
   .then(addTodos)
   
   // CREATE TODO
   $('#todoInput').keypress(function(event){
    //   '13' is the event code for the 'ENTER' key
       if(event.which == 13) {
            // create todo
            createTodo();
       }
   })
   
   // TOGGLE TODO 'completed' STATE
   $('.list').on('click', 'li', function(){
       updateTodo($(this));
   })
   
   // DELETE TODO
   // Add a click listener to the spans within the 'list' class.
   $('.list').on('click', 'span', function(e){
       // make sure that the code after this following line is not run
       // when a todo is toggled.
       e.stopPropagation();
       var clickedId = $(this).parent().data('id');
       var deleteUrl = '/api/todos/' + clickedId;
        // When X is clicked, remove the parent element  from the page
        $(this).parent().remove();
        // delete the todo from the database
        $.ajax({
            method: 'DELETE',
            url: deleteUrl
        })
        .then(function(data){
        })
        .catch(function(err){
            console.log(err);
        })
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
        // clear the input field after the newTodo is added to the list
        $('#todoInput').val('');
    })
    .catch(function(err){
        console.log(err);
    })
}

function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    // create a piece of data called 'id' that has the value of the newTodo db id.
    // This is useful when deleting todo itmes in the list.
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed){
        newTodo.addClass("done");  
    } 
    $('.list').append(newTodo);
}

function updateTodo(todo){
    // send request to change the status on the server
    // update view
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedTodo){
        todo.toggleClass("done");
        todo.data('completed', isDone);
    })
    
}