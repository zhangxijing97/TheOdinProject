// manipulated a text string
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);

// manipulated an array
// all the array items together into a single
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

// generate a random number
const myNumber = Math.random();
console.log(myNumber);

// canvas example
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// Add a rectangle at (10, 10) with size 100x100 pixels
ctx.fillRect(10, 10, 100, 100);
// Add a rectangle at (10, 10) with size 100x100 pixels
ctx.fillStyle = "blue";
ctx.fillRect(10, 200, 150, 150);