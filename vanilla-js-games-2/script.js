// ----- Selectors -----
// Name input and greeting
const nameButton = document.getElementById("enterButton");
const nameInput = document.getElementById("enterName");
const displayName = document.getElementById("printName");
const clearNameButton = document.getElementById("clearButton");

// Counter
const buttonPlusOne = document.getElementById("buttonPlusOne");
const buttonPlusTwo = document.getElementById("buttonPlusTwo");
const buttonMinusOne = document.getElementById("buttonMinusOne");
const buttonMinusTwo = document.getElementById("buttonMinusTwo");
const countDisplay = document.getElementById("currentCount");
const buttonCounterClear = document.getElementById("buttonCounterClear");

// Color picker
const backgroundColorPicker = document.getElementById("backgroundColorPicker");
const textColorPicker = document.getElementById("textColorPicker");
const applyColorsButton = document.getElementById("applyColorsButton");

// To-do list
const addTaskButton = document.getElementById("addTaskButton");
const numberedTasks = document.getElementById("numberedTasks");
const newTaskInput = document.getElementById("newTaskInput");
const completedList = document.getElementById("completedTasks");

// ----- State Variables -----
let currentCount = 0; // for incremental counter
let taskCounter = 0; // for to do list

// ----- Helper Functions -----
// Name input and greeting
function sendName() {
  const name = nameInput.value.trim();
  displayName.textContent = name ? `Hello, ${name}!` : "";
}
function clearNameField() {
  displayName.textContent = "";
  nameInput.value = "";
}

// Counter
function updateCountDisplay() {
  countDisplay.textContent = currentCount;
}
function incrementCount(amount) {
  currentCount += amount;
  updateCountDisplay();
}
function clearCounter() {
  currentCount = 0;
  updateCountDisplay();
}

// Color picker
function applyColors() {
  const bgColor = backgroundColorPicker.value;
  const textColor = textColorPicker.value;
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
  document.querySelectorAll("button, input").forEach((element) => {
    element.style.backgroundColor = textColor;
    element.style.color = bgColor;
  });
}

// numberd tasks
function addNumberedTask() {
  const taskDescription = newTaskInput.value.trim(); // Trim the input
  if (taskDescription) {
    taskCounter++; // Increment the task counter for the next task ID
    // Create a new list item for the task with the task counter
    const newTaskItem = document.createElement("li");
    newTaskItem.id = "task-" + taskCounter; // Assign a unique ID
    newTaskItem.textContent = `${taskCounter}. ${taskDescription}`; // Add the counter and description to the text
    // Create a "Finished" button to move the task to the completed list
    const finishButton = document.createElement("button");
    finishButton.textContent = "Finished";
    finishButton.classList.add("finish-button");
    finishButton.onclick = function () {
      // Move the task to the completed list
      completedList.appendChild(newTaskItem);
      finishButton.style.display = "none"; // Hide the finish button
    };
    // Append the "Finished" button to the task item
    newTaskItem.appendChild(finishButton);
    // Add the task item to the numbered tasks list in the DOM
    numberedTasks.appendChild(newTaskItem);
    // Clear the input field for the next task
    newTaskInput.value = "";
  }
}

// ----- Event Listeners -----
nameButton.addEventListener("click", sendName);
clearNameButton.addEventListener("click", clearNameField);
buttonPlusOne.addEventListener("click", () => incrementCount(1));
buttonPlusTwo.addEventListener("click", () => incrementCount(2));
buttonMinusOne.addEventListener("click", () => incrementCount(-1));
buttonMinusTwo.addEventListener("click", () => incrementCount(-2));
buttonCounterClear.addEventListener("click", clearCounter);
applyColorsButton.addEventListener("click", applyColors);
addTaskButton.addEventListener("click", addNumberedTask);
