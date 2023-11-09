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
