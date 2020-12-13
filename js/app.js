document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);


  const HiPi = document.getElementById('1').text;
  const MidPi = document.getElementById('2').text;
  const LowPi = document.getElementById('3').text;

})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const todoListItem = createToDoListItem(event.target);
  const todoList = document.querySelector('#todolist');
  todoList.appendChild(todoListItem);

  event.target.reset();
}

  const createToDoListItem = function (form) {
  const todoListItem = document.createElement('li');
  todoListItem.classList.add('todolist-item');

  const task = document.createElement('h2');
  task.textContent = form.task.value;
  todoListItem.appendChild(task);

  const duration = document.createElement('h3');
  duration.textContent = form.duration.value;
  todoListItem.appendChild(duration);

  const priority = document.createElement('p');
  priority.textContent = form.priority.value;

  if (form.priority.value == "High Priorty") {
    todoListItem.appendChild(priority);
    todoListItem.style.color = "red";

    } else if (form.priority.value == "Medium Priorty") {
    todoListItem.appendChild(priority);
    todoListItem.style.color = "blue";
  }

    //  else (form.priority.value == "Low Priorty") {
    // todoListItem.appendChild(priority);
    // todoListItem.style.color = "green";

    // };

  todoListItem.appendChild(priority);
  console.log(priority)



  //Radio Button with Label.
  
  const compelted = document.createElement("input");
  compelted.type = 'radio';
  compelted.ID = 'complete';
  
  const label = document.createElement('label');
  label.htmlFor = 'complete';
  
  const description = document.createTextNode('Check if Completed:')
  label.appendChild(description);
  todoListItem.appendChild(label)
  todoListItem.appendChild(compelted)
  

  return todoListItem;
}

const handleDeleteAllClick = function (event) {
  const todoList = document.querySelector('#todolist');
  todoList.innerHTML = '';
}