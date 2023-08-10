// Variables
let message01;
message01 = 'Hello';
console.log(message01);

let user = 'John', age = 25, message02 = 'Hello';
console.log(user);

message02 = 'World!'; // value changed
console.log(message02);

const myBirthday = '18.04.1982'; // constant (unchanging) variable


// Numbers
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

let z = 999999999999999;   // z will be 999999999999999
let a = 9999999999999999;  // a will be 10000000000000000

let number01 = 0.2 + 0.1; // Adding Numbers and Strings
console.log(number01);
let number02 = (0.2 * 10 + 0.1 * 10) / 10;
console.log(number02);

let number03 = 10;
let number04 = 20;
let number05 = number03 + number04;
console.log(number05);

let string03 = "10";
let string04 = "20";
let string05 = string03 + string04;
console.log(string05);

let string06 = number03 + string04;
console.log(string06);

let string07 = number03 + number04 + string04;
console.log(string07);

let string08 = "100"; // Numeric Strings, JavaScript will try to convert strings to numbers
let string09 = "10";
let string10 = string08 / string09;
console.log(string10);

let NotANumber = 100 / "Apple"; // Not a Number
console.log(NotANumber);

let myNumber01 = 2; // Infinity
while (myNumber01 != Infinity) {
  myNumber01 = myNumber01 * myNumber01;
}
console.log(myNumber01);

let hexadecimal = 0xFF; // Hexadecimal
console.log(hexadecimal);

let myNumber = 32; // Concert to Hexadecimal/Decimal/Octal/Binary
console.log(myNumber.toString(32));
console.log(myNumber.toString(16));
console.log(myNumber.toString(12));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));

let numberTest01 = 123; // JavaScript Numbers as Objects
let numberTest02 = new Number(123);
console.log(numberTest01);
console.log(numberTest02);

// String
const string = "The revolution will not be televised.";
console.log(string);

const sgl = 'Single quotes.'; // Both of the following will work okay
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

const bigmouth = 'I\'ve got no right to take my place…'; // Escaping characters
console.log(bigmouth);

const name = "Chris"; // Concatenating strings
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);

const string01 = "Front "; // Numbers vs. strings
const number = 242;
console.log(`${string01}${number}`); // "Front 242"

const myString = "123"; // string to number
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123; // number to string
const myString2 = myNum2.toString();
console.log(typeof myString2);

const song = "Fight the Youth"; // Including expressions in strings
const score = 9;
const highestScore = 10;
const output01 = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output01); // "I like the song Fight the Youth. I gave it a score of 90%."

// Multiline strings
const output02 = `I like the song.
I gave it a score of 90%.`;
console.log(output02);

const output03 = "I like the song.\nI gave it a score of 90%.";
console.log(output03);

// Comparisons
let result01 = 5 > 4; // assign the result of the comparison
console.log(result01);

let result02 = 'Z' > 'A'; // String comparison
let result03 = 'Glow' > 'Glee';
let result04 = 'Bee' > 'Be';

let result05 = '2' > 1; // Comparison of different types
let result06 = '01' == 1;

let result07 = 0 == false; // Segular equality
let result08 = '' == false;

let result09 = 0 === false; // Strict equality, will be false
let result10 = '' === false;

let result11 = 0 === undefined > 0; // An incomparable undefined
let result12 = 0 === undefined < 0;
let result13 = 0 === undefined == 0;