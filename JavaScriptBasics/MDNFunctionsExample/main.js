// Replace part of text
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);

// Manipulated an array
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

// Generate a random number
const myNumber = Math.random();
console.log(myNumber);

// Functions
function myFunction() {
  console.log("myFunction here");
}
myFunction();

// Function parameters
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

// Optional parameters
const madeAnotherString = myArray.join(); // If don't specify, then generally default
console.log(madeAnotherString); // returns 'I,love,chocolate,frogs'

// Default parameters
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}
hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

// Anonymous functions
function createdFunction() {
  console.log("Created function");
}
createdFunction();
(function () {
  console.log("Anonymous functions");
}) ();

// Anonymous function example
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}
textBox01.addEventListener("keydown", logKey);

textBox02.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});

textBox03.addEventListener("keydown", function (event) {
  console.log(`You clicked on element with ID "${event.target.id}".`);
});

textBox04.addEventListener("keydown", function (event) {
  console.log(`Event type: ${event.type}`);
});

textBox05.addEventListener("mouseover", function (event) {
  console.log(`Mouse coordinates: X=${event.clientX}, Y=${event.clientY}`);
});

textBox06.addEventListener("keydown", function (event) {
  console.log(`Key code: ${event.keyCode}`);
});

// Arrow functions
textBox07.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});

function doubleItem(item) { // Function
  return item * 2;
}
const originals01 = [1, 2, 3];
const doubled01 = originals01.map(doubleItem);
console.log(doubled01); // Output: [2, 4, 6]

const originals02 = [1, 2, 3]; // Anonymous function
const doubled02 = originals02.map(function(item) {
  return item * 2;
});
console.log(doubled02); // Output: [2, 4, 6]

const originals03 = [1, 2, 3]; // Arrow function
const doubled03 = originals03.map(item => item * 2);
console.log(doubled03); // [2, 4, 6]