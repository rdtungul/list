// alert("Hi, there!");

// footer auto update copyright year
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;

// removing item from the list using while loop, removeChild, and addEventListener.
// 1st create a variable for the lists
var form = document.querySelector('form');
var todoList = document.querySelector('ul');
// var todos = document.querySelector('li');
// 2nd create a variablle for the button
var button = document.getElementById('clear');
// 3rd use addEventListener for the button to be clicked.
// 4th use while loop inside the event listener function to clear all the items on the lists. 
button.addEventListener('click', function() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
    document.getElementById("clear").disabled=true;
    localStorage.clear(); // to remove all the saved list on the local storage
  }
}); 


// localStorage syntax
// set an empty array for the storage
// var todosArray = [];
// the ternary operator will look at the code that we provide.
var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
// sending data from the local storage using setItem() and JSON.stringify()
localStorage.setItem('todos', JSON.stringify(todosArray));

// set a var local storage that contains all the info JSON.parse()- to access the local storage
var storage = JSON.parse(localStorage.getItem('todos'));


// 1 creating an input form element using dom
var input = document.getElementById('user-todo');
// adding an EventListener to the form field, and to add a new item on the list
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // localStorage continuation
    // push onto 'todosArray' the input.value
    todosArray.push(input.value);
    // update the todosArray from the localStorage
    localStorage.setItem('todos',  JSON.stringify(todosArray));
// adding function todoMaker to carry out the input value
    todoMaker(input.value);
    input.value = '';
});

// create a function for the list item
var todoMaker = function(text) {
  var todo = document.createElement('li');
  todo.textContent = text;
  // no bullets on tjhe list
  todo.style.listStyleType="none";
  todoList.appendChild(todo);
  document.getElementById("clear").disabled=false;
}


// To accomplish the item that removed when the browser get refresed, we will use a for loop to loop over our storage variable
for (var i = 0; i < storage.length; i++) {
  todoMaker(storage[i]);
}


var listEmpty = '';
var listItem = document.getElementById("li")
// if the value of the list is blank: clear button is disabled
if (listItem == listEmpty || todosArray == listEmpty) {
  document.getElementById("clear").disabled=true;
}
