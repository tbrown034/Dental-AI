// Selectors
let nameButton = document.getElementById("enterButton");
let nameInput = document.getElementById("enterName");
let displayName = document.getElementById("printName");
let clearButton = document.getElementById("clearButton");
let upOne = document.getElementById("buttonPlusOne");
let upTwo = document.getElementById("buttonPlusTwo");
let downOne = document.getElementById("buttonMinusOne");
let downTwo = document.getElementById("buttonMinusTwo");
let countDisplay = document.getElementById("currentCount");
let clearCounterButton = document.getElementById("buttonCounterClear");

// Current counter value
let currentCount = 0;

// Helper functions
function sendName() {
  const name = nameInput.value;
  if (name) {
    displayName.textContent = `Hello, ${name}!`;
  }
}

function clearField() {
  displayName.textContent = "";
  nameInput.value = "";
}

function moveUpOne() {
  currentCount += 1;
  updateCountDisplay();
}

function moveUpTwo() {
  currentCount += 2;
  updateCountDisplay();
}

function moveDownOne() {
  currentCount -= 1;
  updateCountDisplay();
}

function moveDownTwo() {
  currentCount -= 2;
  updateCountDisplay();
}

function updateCountDisplay() {
  countDisplay.textContent = currentCount;
}

function clearCounter() {
  currentCount = 0;
  updateCountDisplay();
}

// Event listeners
nameButton.addEventListener("click", sendName);
clearButton.addEventListener("click", clearField);
upOne.addEventListener("click", moveUpOne);
upTwo.addEventListener("click", moveUpTwo);
downOne.addEventListener("click", moveDownOne);
downTwo.addEventListener("click", moveDownTwo);
clearCounterButton.addEventListener("click", clearCounter);

// Selectors for color picker
let backgroundColorPicker = document.getElementById("backgroundColorPicker");
let textColorPicker = document.getElementById("textColorPicker");
let applyColorsButton = document.getElementById("applyColorsButton");

// Function to change colors
function applyColors() {
  let bgColor = backgroundColorPicker.value;
  let textColor = textColorPicker.value;

  // Apply the background and text colors
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;

  // Optionally, if you want to change colors of all buttons and inputs as well:
  document.querySelectorAll("button, input").forEach(function (element) {
    element.style.backgroundColor = textColor;
    element.style.color = bgColor;
  });
}

// Event listener for the button
applyColorsButton.addEventListener("click", applyColors);
