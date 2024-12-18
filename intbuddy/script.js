// Select DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => li.remove();

  // Add Complete Task Toggle
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Append Delete Button to Task
  li.appendChild(deleteButton);

  // Add Task to List
  taskList.appendChild(li);

  // Clear Input Field
  taskInput.value = "";
}

// Add Task on Button Click
addTaskButton.addEventListener("click", addTask);

// Add Task on Enter Key
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

