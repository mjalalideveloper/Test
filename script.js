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

// =====> 49 <=====

// var allPrices = 0;
// var input;

// for (var i = 0; i < 6; i++) {
//     if (i < 5) {
//         input = prompt("Price :");
//         if (input === null) {
//             alert("Cancelled");
//             break;
//         } else if (input === "") {
//             alert("No input");
//             break;
//         } else if (isNaN(input - 1)) {
//             alert("Not a number");
//             break;
//         } else {
//             all += (+input);
//         }

//     } else {
//         alert(`Total: ${all}`);
//     }
// }

// =====> 50 <=====

// var average = 0;
// var input;

// for (var i = 0; i < 6; i++) {
//     if (i < 5) {
//         input = prompt(`Enter The Number ${i + 1}:`);
//         if (input === null) {
//             alert("Cancelled");
//             break;
//         } else if (input === "") {
//             alert("No input");
//             break;
//         } else if (isNaN(input - 1)) {
//             alert("Not a number");
//             break;
//         } else {
//             average += (+input);
//         }

//     } else {
//         alert(`Average: ${average / 5}`);
//     }
// }

// =====> 51 <=====

// var userNum = prompt("Enter a number:");
// var sum = 0;

// if (userNum === null) {
//     alert("Cancelled");
// } else if (userNum === "") {
//     alert("No input");
// } else if (isNaN(userNum - 1)) {
//     alert("Not a number");
// } else {
//     for (var i = 0; i < userNum.length; i++) {
//         sum += (+userNum[i]);
//     } alert(`Sum: ${sum}`);
// }

// =====> Test <=====

var i = 0;

while (i < 100) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}
