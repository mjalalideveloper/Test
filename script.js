// =====> 31 <=====

// function isEvenOrOdd(num) {
//     if (num === "") {
//         alert("No input");
//     } else if (!isNaN(num - 1)) {
//         if (num % 2 == 0) {
//             alert(`${num} is Even`);
//         } else {
//             alert(`${num} is Odd`);
//         }
//     } else {
//         alert("Not a number");
//     }
// }

// isEvenOrOdd(prompt("Enter a number:"));

// =====> 32 <=====

// function average(num1, num2, num3) {
//     if (num1 === "" || num2 === "" || num3 === "") {
//         alert("No input");
//     } else if (!isNaN(num1 - 1) && !isNaN(num2 - 1) && !isNaN(num3 - 1)) {
//         var sum = (+num1) + (+num2) + (+num3);
//         var avg = sum / 3;
//         alert(`Average: ${avg}`);
//     } else {
//         alert("Not a number");
//     }
// }

// average(prompt("Enter first number:"), prompt("Enter second number:"), prompt("Enter third number:"));

// =====> 37 <=====

// var inputUsername = prompt("Enter your username:");
// var inputPassword = prompt("Enter your password:");

// if (inputUsername === null || inputPassword === null) {
//     alert("Cancelled");
// } else if (inputUsername === "" || inputPassword === "") {
//     alert("No input");
// } else if (inputUsername.length < 3 && inputPassword.length < 8) {
//     alert("Username must be at least 3 characters long\nPassword must be at least 8 characters long");
// } else if (inputUsername.length < 3) {
//     alert("Username must be at least 3 characters long");
// } else if (inputPassword.length < 8) {
//     alert("Password must be at least 8 characters long");
// } else {
//     alert("Welcome!");
// }

// =====> Test <=====

var capcha = Math.floor(Math.random() * 100000)

alert(`Enter the following capcha: ${capcha}`);
