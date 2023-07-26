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