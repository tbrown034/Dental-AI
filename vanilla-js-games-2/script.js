// Selectors for name input and greeting
const nameButton = document.getElementById("enterButton");
const nameInput = document.getElementById("enterName");
const displayName = document.getElementById("printName");
const clearNameButton = document.getElementById("clearButton");

// Selectors for the incremental counter
const buttonPlusOne = document.getElementById("buttonPlusOne");
const buttonPlusTwo = document.getElementById("buttonPlusTwo");
const buttonMinusOne = document.getElementById("buttonMinusOne");
const buttonMinusTwo = document.getElementById("buttonMinusTwo");
const countDisplay = document.getElementById("currentCount");
const buttonCounterClear = document.getElementById("buttonCounterClear");

// Selectors for the color picker
const backgroundColorPicker = document.getElementById("backgroundColorPicker");
const textColorPicker = document.getElementById("textColorPicker");
const applyColorsButton = document.getElementById("applyColorsButton");

// Selectors for the to-do list
const addTaskButton = document.getElementById("addTaskButton");
const numberedTasks = document.getElementById("numberedTasks");
const newTaskInput = document.getElementById("newTaskInput");
const completedList = document.getElementById("completedTasks");

// Selectors for the calculator numbers and operators
const numberButtons = document.querySelectorAll(".calcNumber");
const operatorButtons = document.querySelectorAll(".operator");
const calculationDisplay = document.getElementById("calculationDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Weather Selectors
const cityInput = document.getElementById("cityInput");
const weatherResults = document.getElementById("weatherResults");
const weatherButton = document.getElementById("enterLocation");

// State variables
let currentCount = 0; // For incremental counter
let taskCounter = 0; // For to-do list
let currentInput = ""; // For calculator current input
let previousInput = ""; // For calculator previous input
let currentOperation = null; // For calculator current operation

// Helper functions for name input and greeting
function sendName() {
  const name = nameInput.value.trim();
  displayName.textContent = `Hello, ${name}!`;
}

function clearNameField() {
  displayName.textContent = "";
  nameInput.value = "";
}

// Helper functions for the counter
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

// Helper functions for the color picker
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

// Helper functions for the numbered tasks
function addNumberedTask() {
  const taskDescription = newTaskInput.value.trim();
  if (taskDescription) {
    taskCounter++;
    const newTaskItem = document.createElement("li");
    newTaskItem.id = "task-" + taskCounter;
    newTaskItem.textContent = `${taskCounter}. ${taskDescription}`;
    const finishButton = document.createElement("button");
    finishButton.textContent = "Finished";
    finishButton.classList.add("finish-button");
    finishButton.onclick = function () {
      completedList.appendChild(newTaskItem);
      finishButton.remove(); // Removes the finish button once moved to completed tasks
    };
    newTaskItem.appendChild(finishButton);
    numberedTasks.appendChild(newTaskItem);
    newTaskInput.value = "";
  }
}

// api function for weather
async function getWeather(cityName) {
  const apiKey = "f3a6345baae342108e883503230106"; // Replace with your actual API key
  const baseURL = "http://api.weatherapi.com/v1";
  const days = 3; // Number of forecast days
  try {
    const url = `${baseURL}/forecast.json?key=${apiKey}&q=${cityName}&days=${days}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const forecastData = await response.json();
    console.log(forecastData); // Inspect the structure in the browser console

    const forecastDays = forecastData.forecast.forecastday;
    let forecastHtmlContent = "<h2>3-Day Forecast</h2>";

    forecastDays.forEach((day) => {
      forecastHtmlContent += `
        <div class="forecast-day">
          <h3>${new Date(day.date).toLocaleDateString()}</h3>
          <p>Condition: ${day.day.condition.text}</p>
          <img src="${day.day.condition.icon}" alt="Weather condition icon">
        </div>
      `;
    });

    weatherResults.innerHTML = forecastHtmlContent;
  } catch (e) {
    weatherResults.innerHTML = "<p>Error fetching weather data</p>";
    console.error("Error during fetch:", e);
  }
}

// Event listeners for name input and greeting
nameButton.addEventListener("click", sendName);
clearNameButton.addEventListener("click", clearNameField);

// Event listeners for the counter
buttonPlusOne.addEventListener("click", () => incrementCount(1));
buttonPlusTwo.addEventListener("click", () => incrementCount(2));
buttonMinusOne.addEventListener("click", () => incrementCount(-1));
buttonMinusTwo.addEventListener("click", () => incrementCount(-2));
buttonCounterClear.addEventListener("click", clearCounter);

// Event listener for the color picker
applyColorsButton.addEventListener("click", applyColors);

// Event listener for the numbered tasks
addTaskButton.addEventListener("click", addNumberedTask);

// Calculator operations
function calculate() {
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result = 0;
  if (currentOperation === "+") {
    result = previous + current;
  } else if (currentOperation === "-") {
    result = previous - current;
  } else if (currentOperation === "*") {
    result = previous * current;
  } else if (currentOperation === "/") {
    if (current !== 0) {
      result = previous / current;
    } else {
      result = "Error";
    }
  }

  // Update the resultDisplay with the result and reset the calculationDisplay
  resultDisplay.textContent = `Result: ${result}`;
  calculationDisplay.textContent = "Calculation:";
  currentInput = result.toString();
  previousInput = "";
  currentOperation = null;
}

// Update the display as numbers and operations are entered
function updateCalculationDisplay() {
  calculationDisplay.textContent = `Calculation: ${previousInput} ${
    currentOperation || ""
  } ${currentInput}`;
}

// Calculator event listeners for numbers
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.dataset.value;
    updateCalculationDisplay();
  });
});

// Calculator event listeners for operators
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.value === "clear") {
      previousInput = "";
      currentInput = "";
      currentOperation = null;
      calculationDisplay.textContent = "Calculation:";
      resultDisplay.textContent = "Result:";
    } else if (button.dataset.value === "=") {
      if (currentOperation && currentInput && previousInput) {
        calculate();
        updateCalculationDisplay();
      }
    } else {
      if (currentInput) {
        if (previousInput && currentOperation) {
          calculate();
        } else {
          previousInput = currentInput;
        }
        currentInput = "";
        currentOperation = button.dataset.value;
        updateCalculationDisplay();
      }
    }
  });
});
weatherButton.addEventListener("click", () => {
  const city = cityInput.value;
  getWeather(city);
});
