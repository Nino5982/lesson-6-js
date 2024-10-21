const getStart = document.getElementById("start-btn");
const startSection = document.getElementById("name-section");
const toDoListContainer = document.querySelector("#to-do-list-container");
const taskContainer = document.querySelector(".tasks-container");

getStart.addEventListener("click", function () {
  const userName = document.getElementById("user-name").value;

  if (userName) {
    startSection.style.display = "none";
    toDoListContainer.style.display = "flex";
    document.getElementById("user-display-name").textContent = userName;
  }
});

const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// addTaskBtn.addEventListener("click", function () {
//   if (taskInput.value) {
//     const newTask = document.createElement("li");
//     newTask.classList.add("task-item", "input-style");
//     newTask.innerText = taskInput.value;
//     taskList.appendChild(newTask);
//     taskInput.value = "";
//   }
// });

// meore varianti

addTaskBtn.addEventListener("click", function () {
  if (taskInput.value) {
    const newTask = document.createElement("li");
    newTask.classList.add("task-item", "input-style");
    newTask.innerHTML = ` 
          <span>${taskInput.value}</span>
              <button class="task-btn delete-task">-</button>   
           
    `;
    taskList.appendChild(newTask);
    taskInput.value = "";

    // წაშლის ფუნქცია ღილაკისთვის
    const deleteBtn = newTask.querySelector(".task-btn");
    deleteBtn.addEventListener("click", function () {
      newTask.remove(); // წაშლის კონკრეტულ ელემენტს
    });
  }
});

// clear all

const clearAll = document.getElementById("clear-all-btn");

clearAll.addEventListener("click", function () {
  taskList.innerHTML = "";
});

// backto btn

const backto = document.getElementById("go-back-btn");
backto.addEventListener("click", function () {
  startSection.style.display = "block";
  toDoListContainer.style.display = "none";
  document.getElementById("user-name").value = "";

  taskList.innerHTML = "";
});
