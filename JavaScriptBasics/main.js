// Variables and Data Types
let name = 'John';
let age = 25;
let isStudent = true;
let favoriteFruits = ['apple', 'banana', 'orange'];

console.log(name);
console.log(age);
console.log(isStudent);
console.log(favoriteFruits);

// Conditional Statements (if-else)
let temperature = 30;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature < 10) {
  console.log("It's cold outside!");
} else {
  console.log("The temperature is moderate.");
}

// Loops (for loop)
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}

// Functions
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");

// DOM Manipulation
// Assuming you have an element with id 'myButton' in your HTML
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
  alert('Button clicked!');
});