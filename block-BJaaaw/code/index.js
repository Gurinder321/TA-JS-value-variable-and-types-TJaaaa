// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

// let num = 12;

// if (num % 2) {
//   console.log("Number is odd");
// } else {
//   console.log("Number is even");
// }
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

// 3. Convert the above code using`?` terniary operator

// let userNum1 = prompt("Pick a number");
// let userNum2 = prompt("Pick another number");
// // if (userNum1 + userNum2 > 100) {
// //   console.log("Number is over 100");
// // } else {
// //   console.log("Number is under 100");
// // }
// userNum1 + userNum2 > 100 ? console.log("Number is over 100") : console.log("Number is under 100");

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

// let houseName = prompt("What's your house name");

// if (houseName == "stark") {
//   alert("Winter in coming");
// } else if (houseName == "lannister") {
//   alert("A lannister always pays his debt");
// } else {
//   alert("All men must die");
// }

// 5. Convert the above code using`?` terniary operator

// let houseName = prompt("What's your house name");
// {
//   return houseName == "stark"
//     ? alert("Winter in coming")
//     : houseName == "lannister"
//     ? alert("A lannister always pays his debt")
//     : alert("All men must die");
// }

// console.log(
//   houseName == "stark"
//     ? alert("Winter in coming")
//     : houseName == "lannister"
//     ? alert("A lannister always pays his debt")
//     : alert("All men must die")
// );

// Switch

// switch (houseName) {
//   case "stark":
//     alert("Winter in coming");
//     break;
//   case "lannister":
//     alert("A lannister always pays his debt");
//     break;
//   default:
//     alert("All men must die");
// }

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// let num = prompt("Month?");

// switch (num) {
//   case "January":
//   case "March":
//   case "May":
//   case "July":
//   case "August":
//   case "October":
//   case "December":
//     alert("31 days");
//     break;
//   case "April":
//   case "June":
//   case "November":
//     alert("30 days");
//     break;
//   default:
//     alert("28 days");
// }

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

// if (userSalary <= 20000) {
//   alert(userSalary - userSalary * 0.1);
// } else if (userSalary <= 40000) {
//   alert(userSalary - userSalary * 0.2);
// } else if (userSalary > 50000) {
//   alert(userSalary - userSalary * 0.3);
// } else {
//   alert("get a job");
// }

//  if..else vs switch

// let userSalary = prompt("What's your salary?");

// switch (userSalary) {
//   case userSalary <= 20000:
//     alert(userSalary - userSalary * 0.1);
//     break;
//   case userSalary <= 40000:
//     alert(userSalary - userSalary * 0.2);
//     break;
//   case userSalary > 50000:
//     alert(userSalary - userSalary * 0.3);
//     break;
//   default:
//     alert("get a job");
// }

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

  */

// let marks = 83;

// if (marks > 100) {
//   alert("Marks can't be greater than 100");
// } else if (marks > 80 && marks < 100) {
//   alert("Grade B");
// } else if (marks > 30 && marks < 50) {
//   alert("Grade C");
// } else {
//   alert("Grade D");
// }

let marks = 100;

switch (marks) {
  case marks > 100:
    alert("Marks can't be greater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("Grade B");
    break;
  case marks > 30 && marks < 50:
    alert("Grade C");
    break;
  default:
    alert("Grade D");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside?");

if (weather == "sunny") {
  alert("Wear a t-shirt");
} else if (weather == "rainy") {
  alert("Don't forget to take your raincoat");
} else if (weather == "hot") {
  alert("Get a hanky");
} else if (weather == "freezing") {
  alert("Get your sweater");
} else {
  alert("Not a valid input");
}
