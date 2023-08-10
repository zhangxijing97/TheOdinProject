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