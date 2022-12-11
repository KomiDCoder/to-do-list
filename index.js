function init() {
  var addTaskBtn = document.getElementById("add-task-btn");
  var inputTask = document.getElementById("input-task");
  function addTask() {
    if (inputTask.value.length > 2) {
      var taskListElement = document.getElementById("tasks-list");
      var taskElement = document.createElement("div");
      taskElement.setAttribute("class", "task");
      taskListElement.appendChild(taskElement);
      var taskDescription = document.createElement("textarea");
      var sideLine = document.createElement("div");
      var addDescription = document.createElement("button");
      var taskContent = document.createElement("p");
      var removeTask = document.createElement("button");
      var taskDate = new Date();
      var taskDateYear = taskDate.getFullYear().toString();
      var taskDateMonth = (taskDate.getMonth() + 1).toString();
      var taskDateDay = taskDate.getDate();
      var taskFullDate =
        taskDateMonth + "/" + taskDateDay + "/" + taskDateYear + ":" + " ";
      sideLine.setAttribute("class", "side-line");
      taskContent.setAttribute("class", "task-content");
      removeTask.setAttribute("class", "remove-task");
      addDescription.setAttribute("id", "add-desc");
      taskDescription.setAttribute("id", "task-desc");
      taskDescription.setAttribute("class", "display-none");
      taskDescription.innerHTML = taskFullDate;
      removeTask.innerHTML = "x";
      addDescription.innerHTML = "note";
      taskElement.appendChild(sideLine);
      taskElement.appendChild(taskContent);
      taskElement.appendChild(addDescription);
      taskElement.appendChild(removeTask);
      taskListElement.appendChild(taskDescription);
      if (inputTask.classList.contains("direction-rtl")) {
        taskContent.style.direction = "rtl";
        taskContent.innerHTML = inputTask.value;
        inputTask.value = "";
      } else {
        taskContent.style.direction = "ltr";
        taskContent.innerHTML = inputTask.value;
        inputTask.value = "";
      }

      function removeTaskElement() {
        taskElement.remove();
      }
      function taskDone() {
        taskContent.classList.toggle("done");
      }
      function toggleDisplay() {
        taskDescription.classList.toggle("display-none");
      }
      function removeDescripton() {
        taskDescription.remove();
      }
      addDescription.addEventListener("click", toggleDisplay);
      removeTask.addEventListener("click", removeTaskElement);
      removeTask.addEventListener("click", removeDescripton);
      taskContent.addEventListener("click", taskDone);
    } else {
      alert("Task Must Be At Least '3' Character");
    }
  }
  function checkEnterKey(event) {
    if (event.which === 13) {
      addTask();
    }
  }
  function toggleDirection(event) {
    if (
      event.which !== 13 &&
      event.which !== 32 &&
      event.which !== 46 &&
      event.which !== 47 &&
      event.which !== 40 &&
      event.which !== 41 &&
      event.which !== 60 &&
      event.which !== 62 &&
      event.which !== 92
    ) {
      if (event.which > 1500 && event.which < 1750) {
        inputTask.classList = "input-task" + " " + "direction-rtl";
      } else {
        inputTask.classList = "input-task";
      }
    }
  }
  inputTask.addEventListener("keypress", toggleDirection);
  addTaskBtn.addEventListener("click", addTask);
  inputTask.addEventListener("keypress", checkEnterKey);
}
init();
