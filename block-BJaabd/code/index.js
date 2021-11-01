// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

// let userAge = prompt("What's your age?");

// if (age >= 12 && age <= 55) {
//   console.log("You can participate in the marathon");
// } else if (age < 4) {
//   console.log("You are too young to participate in the marathon");
// } else if (age >= 4 && age <= 11) {
//   console.log("Hey Kiddo! Can You Walk ?");
// } else {
//   console.log("You are too old to participate in the marthon");
// }

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

// let n = prompt("How many E's would you like in 'hello'?");

// console.log(`h${"e".repeat(n)}llo`);

// while (i <= n) {
//   console.log(`h${i}llo`);
// }

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/

// [Your code goes here]

// let numA = +prompt("Pick a number");
// let numB = +prompt("Pick a number");

// alert(`${numA + numB}`);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

// let number = +prompt("Pick a number");

// switch (number) {
//   case 1:
//     console.log("ONE");
//     break;
//   case 2:
//     console.log("TWO");
//     break;
//   case 3:
//     console.log("THREE");
//     break;
//   case 4:
//     console.log("FOUR");
//     break;
//   case 5:
//     console.log("FIVE");
//     break;
//   case 6:
//     console.log("SIX");
//     break;
//   case 7:
//     console.log("SEVEN");
//     break;
//   case 8:
//     console.log("EIGHT");
//     break;
//   case 9:
//     console.log("NINE");
//     break;
//   default:
//     console.log("Not Valid");
// }

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks = +prompt("Pick a grade");

switch (true) {
  case marks > 80:
    console.log("AA");
    break;
  case marks >= 90 && marks <= 80:
    console.log("AB");
    break;
  case marks >= 79 && marks <= 70:
    console.log("BB");
    break;
  case marks >= 69 && marks <= 60:
    console.log("BC");
    break;
  case marks >= 59 && marks <= 50:
    console.log("CC");
    break;
  case marks >= 49 && marks <= 40:
    console.log("CD");
    break;
  case marks >= 39 && marks <= 30:
    console.log("DD");
    break;
  default:
    console.log("FF");
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

// let numA = +prompt("Pick a number?");
// let numB = +prompt("Pick a number?");

// if (numA > numB) {
//   alert(`${numA} is larger than ${numB}`);
// } else if (numA < numB) {
//   alert(`${numA} is smaller than ${numB}`);
// } else {
//   alert(`${numA} is equal to ${numB}`);
// }

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
// let numA = +prompt("Pick a number?");
// let numB = +prompt("Pick a number?");
// let numC = +prompt("Pick a number?");

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

// let numA = +prompt("Pick a number?");
// let numB = prompt("Pick a sign? + - * /");
// let numC = +prompt("Pick a number?");

// if (numB == "+") {
//   alert(numA + numC);
// } else if (numB == "*") {
//   alert(numA * numC);
// } else if (numB == "-" && numC > numA) {
//   alert(`Invalid Selection: ${numC} is larger than ${numA}. Please try again`);
// } else if (numB == "-") {
//   alert(numA - numC);
// } else if (numB == "/" && numC > numA) {
//   alert(`Invalid Selection: ${numC} is larger than ${numA}. Please try again`);
// } else if (numB == "/") {
//   alert(numA / numC);
// } else {
//   alert("System error. Please try again");
// }
