var buttonEl = document.querySelector("save-task");
var taskTodoEL = document.querySelector("#task-to-do");

var createTaskHandler = function () {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);