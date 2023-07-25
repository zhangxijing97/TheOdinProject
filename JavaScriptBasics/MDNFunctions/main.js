// manipulated a text string
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);

// Canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Function to draw the initial blue rectangle
function drawBlueRectangle() {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 150, 150);
}

// Function to draw the red rectangle on mouseover
function drawRedRectangle() {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 150, 150);
}

// Function to draw the green rectangle on mouseover
function drawGreenRectangle() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 150, 150);
}

// Add the event listener to the canvas element
canvas.addEventListener("mouseover", function(event) {
  drawRedRectangle();
});

canvas.addEventListener("mouseout", function(event) {
  drawBlueRectangle();
});

canvas.addEventListener("click", drawGreenRectangle);

drawBlueRectangle();

// Optional parameters
// all the array items together into a single
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// If no parameter, a comma is used by default.
const madeAnotherString = myArray.join();
console.log(madeAnotherString);

function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

// Default parameters
hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

// Anonymous function
function myFunction() {
  alert("hello");
}

// Immediately Invoked Function Expression (IIFE)
// Used to create a private scope and avoid polluting the global scope with variables
// Invoke it with '()'
(function () {
  alert("hello");
});

// Anonymous function example
// event.target.id/event.type/event.clientX/event.clientY/event.keyCode
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener("keydown", logKey);
// Or
// textBox.addEventListener("keydown", function (event) {
//   console.log(`You pressed "${event.key}".`);
// });

function logMouseCoordinates(event) {
  console.log(`Mouse coordinates: X=${event.clientX}, Y=${event.clientY}`);
}
textBox.addEventListener("mouseover", logMouseCoordinates);

// Using the map() method
const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);
console.log(doubled); // [2, 4, 6]