// !=====> 31 <=====!

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

// !=====> 32 <=====!

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

// !=====> 37 <=====!

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

// !=====> 49 <=====!

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

// !=====> 50 <=====!

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

// !=====> 51 <=====!

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

// !=====> 55 <=====!

// var num1 = prompt("Enter a number:");
// var num2 = prompt("Enter a number:");
// var i = 1;

// if (num1 === null || num2 === null) {
//   alert("Cancelled");
// } else if (num1 === "" || num2 === "") {
//   alert("No input");
// } else if (isNaN(num1 - 1) || isNaN(num2 - 1)) {
//   alert("Not a number");
// } else {
//   num1 = +num1;
//   num2 = +num2;
//   if (num1 < num2) {
//     while (num1 + i < num2) {
//       if ((num1 + i) % 2 == 0) {
//         console.log(num1 + i);
//       }
//       i++;
//     }
//   } else if (num1 > num2) {
//     while (num2 + i < num1) {
//       if ((num2 + i) % 2 == 0) {
//         console.log(num2 + i);
//       }
//       i++;
//     }
//   }
// }

// !=====> 56 <=====!

// var n = prompt("N : ");
// var i = 0;
// var num = 0;
// var sum = 0;
// var avg = 0;

// if (i === null) {
//   alert("Cancelled");
// } else if (i === "") {
//   alert("No input");
// } else if (isNaN(i - 1)) {
//   alert("Not a number");
// } else {
//   while (i < n) {
//     num = prompt("Enter a number:");
//     if (num === null) {
//       alert("Cancelled");
//       break;
//     } else if (num === "") {
//       alert("No input");
//       break;
//     } else if (isNaN(num - 1)) {
//       alert("Not a number");
//       break;
//     } else {
//       sum += +num;
//       i++;
//     }
//   }
// }

// avg = sum / n;
// alert(`Average: ${avg}`);

// !=====> 61 <=====!

var n = prompt("N : ");
var input;
var array = [];
var sum = 0;
var average = 0;

if (n === null) {
  alert("Cancelled");
} else if (n === "") {
  alert("No input");
} else if (isNaN(n - 1)) {
  alert("Not a number");
} else {
  for (var i = 0; i < n; i++) {
    input = prompt("Enter a number:");
    if (input === null) {
      alert("Cancelled");
      break;
    } else if (input === "") {
      alert("No input");
      break;
    } else if (isNaN(input - 1)) {
      alert("Not a number");
      break;
    } else {
      array.push(+input);
    }
  }

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  average = sum / n;
  alert(`Average: ${average}`);
}

// !=====> Test <=====!
