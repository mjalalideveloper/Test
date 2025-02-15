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

// var n = prompt("N : ");
// var input;
// var array = [];
// var sum = 0;
// var average = 0;

// if (n === null) {
//   alert("Cancelled");
// } else if (n === "") {
//   alert("No input");
// } else if (isNaN(n - 1)) {
//   alert("Not a number");
// } else {
//   for (var i = 0; i < n; i++) {
//     input = prompt("Enter a number:");
//     if (input === null) {
//       alert("Cancelled");
//       break;
//     } else if (input === "") {
//       alert("No input");
//       break;
//     } else if (isNaN(input - 1)) {
//       alert("Not a number");
//       break;
//     } else {
//       array.push(+input);
//     }
//   }

//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   average = sum / n;
//   alert(`Average: ${average}`);
// }

// !=====> 63 <=====!

// var users = [
//   { id: 1, name: "John", family: "Doe", age: 30, email: "example1@gmail.com" },
//   { id: 2, name: "Jane", family: "Doe", age: 25, email: "example2@gmail.com" },
//   { id: 3, name: "Jack", family: "Doe", age: 20, email: "example3@gmail.com" },
// ];

// var userName = "";
// var userFamily = "";
// var userAge = "";
// var userEmail = "";

// var statusName = false;

// userName = prompt("Enter your name:");
// userFamily = prompt("Enter your family:");
// userAge = prompt("Enter your age:");
// userEmail = prompt("Enter your email:");

// while (!statusName) {
//   if (
//     userName === null ||
//     userFamily === null ||
//     userAge === null ||
//     userEmail === null
//   ) {
//     alert("Cancelled");
//     break;
//   } else if (
//     userName === "" ||
//     userFamily === "" ||
//     userAge === "" ||
//     userEmail === ""
//   ) {
//     alert("No input");
//     userName = prompt("Enter your name:");
//     userFamily = prompt("Enter your family:");
//     userAge = prompt("Enter your age:");
//     userEmail = prompt("Enter your email:");
//   } else if (isNaN(userAge)) {
//     alert("Not a number");
//     userAge = prompt("Enter your age:");
//   } else if (userName.length < 3 || userFamily.length < 3) {
//     alert("Name and family must be at least 3 characters long");
//     userName = prompt("Enter your name:");
//     userFamily = prompt("Enter your family:");
//   } else if (userName.length > 10 || userFamily.length > 15) {
//     alert("Name and family must be at most 20 characters long");
//     userName = prompt("Enter your name:");
//     userFamily = prompt("Enter your family:");
//   } else if (userAge > 100 || userAge < 0) {
//     alert("Age must be between 0 and 100");
//     userAge = prompt("Enter your age:");
//   } else if (!userEmail.includes("@") || !userEmail.includes(".")) {
//     alert("Invalid email");
//     userEmail = prompt("Enter your email:");
//   } else {
//     users.push({
//       id: users.length + 1,
//       name: userName,
//       family: userFamily,
//       age: +userAge,
//       email: userEmail,
//     });
//     alert("User added successfully");
//     for (var i = 0; i < users.length; i++) {
//       console.log(
//         `Id: ${users[i].id}, Name: ${users[i].name}, Family: ${users[i].family}, Age: ${users[i].age}, Email: ${users[i].email}`
//       );
//     }
//     statusName = true;
//   }
// }

// !=====> 65 <=====!

// var users = [
//   { id: 1, name: "John", family: "Doe", age: 30, email: "example1@gmail.com" },
//   { id: 2, name: "Jane", family: "Doe", age: 25, email: "example2@gmail.com" },
//   { id: 3, name: "Jack", family: "Doe", age: 20, email: "example3@gmail.com" },
// ];

// users.forEach(function (user) {
//   console.log(
//     `id: ${user.name} | name: ${user.family} | age: ${user.age} | email: ${user.email}`
//   );
// });

// !=====> 68, 73 <=====!

// var products = [
//   { id: 1, name: "Product 1", price: 100 },
//   { id: 2, name: "Product 2", price: 200 },
//   { id: 3, name: "Product 3", price: 300 },
// ];
// var cart = [];
// var userChoice;
// var whileStatus = true;

// function addProduct() {
//   var productName = prompt("Enter the product name:");
//   var cartLength = cart.length;
//   products.some(function (product) {
//     if (product.name === productName) {
//       cart.push(product);
//       alert("Product added to cart");
//       return true;
//     }
//   });
//   if (cartLength === cart.length) {
//     alert("Product not found");
//   }
// }

// function removeProduct() {
//   var productName = prompt("Enter the product name:");
//   var cartLength = cart.length;
//   cart.some(function (product, index) {
//     if (product.name === productName) {
//       cart.splice(index, 1);
//       alert("Product removed from cart");
//       return true;
//     }
//   });
//   if (cartLength === cart.length) {
//     alert("Product not found");
//   }
// }

// function showCart() {
//   var allPrice = 0;
//   if (cart.length === 0) {
//     alert("Cart is empty");
//   } else {
//     console.log("=====> Cart <=====");
//     cart.forEach(function (product, index) {
//       console.log(
//         `${index + 1}_ id: ${product.id} | name: ${product.name} | price: ${
//           product.price
//         }`
//       );
//       allPrice += product.price;
//     });
//     console.log(`Price All: ${allPrice}`);
//     console.log("==================");
//   }
// }

// function main() {
//   while (whileStatus) {
//     userChoice = prompt(
//       "1- Add Product\n2- Remove Product\n3- Show Cart\n4- Cancel"
//     );

//     if (userChoice === null) {
//       alert("Cancelled");
//       whileStatus = false;
//     } else if (userChoice === "") {
//       alert("No input");
//     } else if (isNaN(userChoice - 1)) {
//       alert("Not a number");
//     } else {
//       switch (userChoice) {
//         case "1":
//           addProduct();
//           break;
//         case "2":
//           removeProduct();
//           break;
//         case "3":
//           showCart();
//           break;
//         case "4":
//           alert("Cancelled");
//           whileStatus = false;
//           break;
//         default:
//           alert("Invalid choice");
//           break;
//       }
//     }
//   }
// }

// main();

// !=====> 70 <=====!

// var users = [
//   { id: 1, userName: "Ali", age: 23 },
//   { id: 2, userName: "Mohahmmad", age: 12 },
//   { id: 3, userName: "Reza", age: 30 },
// ];

// var userAgeCheck = users.every(function (user) {
//   return user.age > 18;
// });

// if (userAgeCheck === true) {
//   alert("Yes");
// } else {
//   alert("No");
// }

// !=====> 76 <=====!

// var products = [
//   { id: 1, name: "Product 1", price: 100000 },
//   { id: 2, name: "Product 2", price: 200000 },
//   { id: 3, name: "Product 3", price: 300000 },
//   { id: 4, name: "Product 4", price: 10000 },
//   { id: 5, name: "Product 5", price: 40000 },
//   { id: 6, name: "Product 6", price: 50000 },
// ];
// var cart = [];
// var userChoice;
// var whileStatus = true;

// function addProduct() {
//   var productName = prompt("Enter the product name:");
//   var cartLength = cart.length;
//   products.some(function (product) {
//     if (product.name === productName) {
//       cart.push(product);
//       alert("Product added to cart");
//       return true;
//     }
//   });
//   if (cartLength === cart.length) {
//     alert("Product not found");
//   }
// }

// function removeProduct() {
//   var productName = prompt("Enter the product name:");
//   var cartLength = cart.length;
//   cart.some(function (product, index) {
//     if (product.name === productName) {
//       cart.splice(index, 1);
//       alert("Product removed from cart");
//       return true;
//     }
//   });
//   if (cartLength === cart.length) {
//     alert("Product not found");
//   }
// }

// function showCart() {
//   var allPrice = 0;
//   var p = 0;
//   if (cart.length === 0) {
//     alert("Cart is empty");
//   } else {
//     console.log("=====> Cart <=====");
//     cart.forEach(function (product, index) {
//       console.log(
//         `${index + 1}_ id: ${product.id} | name: ${product.name} | price: ${
//           product.price
//         }`
//       );
//       allPrice += product.price;
//       if (product.price < 100000) {
//         allPrice += 10000;
//         postPrice += 10000;
//       }
//     });
//     console.log(`All Price: ${allPrice}`);
//     console.log(`Post Price: ${postPrice}`);
//     console.log("==================");
//   }
// }

// function main() {
//   while (whileStatus) {
//     userChoice = prompt(
//       "1- Add Product\n2- Remove Product\n3- Show Cart\n4- Cancel\n5- Close"
//     );

//     if (userChoice === null) {
//       alert("Cancelled");
//       whileStatus = false;
//     } else if (userChoice === "") {
//       alert("No input");
//     } else if (isNaN(userChoice - 1)) {
//       alert("Not a number");
//     } else {
//       switch (userChoice) {
//         case "1":
//           addProduct();
//           break;
//         case "2":
//           removeProduct();
//           break;
//         case "3":
//           showCart();
//           break;
//         case "4":
//           alert("Cancelled");
//           whileStatus = false;
//           break;
//         case "5":
//           alert("Are you sure to close the tab?");
//           whileStatus = false;
//           close();
//           break;
//         default:
//           alert("Invalid choice");
//           break;
//       }
//     }
//   }
// }

// main();

// !=====> 78 <=====!

// var userWord = prompt("Enter Your Word");

// userWord === null ? alert("Cancelled") : userWord === "" ? alert("No input") : userWord === userWord.split("").reverse().join("") ? alert("Yes") : alert("No");

// !=====> 78 <=====!

// var userWord = prompt("Enter Your Word");

// if (userWord === null) {
//   alert("Cancelled");
// } else if (userWord === "") {
//   alert("No input");
// } else {
//   var lettersWord = userWord.split("");
//   var reversedWord = lettersWord.reverse().join("");
//   if (userWord === reversedWord) {
//     alert("Yes");
//   } else {
//     alert("No");
//   }
// }

// !=====> 80 <=====!

// var todoList = [];

// function addTodo() {
//   var userTodo = prompt("Enter Your Todo.");

//   if (userTodo === null) {
//   } else if (userTodo === "") {
//     alert("No Input");
//   } else if (!isNaN(userTodo)) {
//     alert("You Can Not Enter A Number!");
//   } else {
//     var check = todoList.some(function (todo) {
//       if (userTodo == todo.todoName) {
//         return true;
//       } else {
//         return false;
//       }
//     });

//     if (!check) {
//       todoList.push({
//         id: todoList.length + 1,
//         todoName: userTodo,
//         todoStatus: false,
//       });
//       alert("Todo Added To Todo List");
//     } else {
//       alert("The Todo Is In The List");
//     }
//   }
// }

// function removeTodo() {
//   var userTodo = prompt("Enter The Number For Todo.");

//   if (userTodo === null) {
//   } else if (userTodo === "") {
//     alert("No Input");
//   } else if (isNaN(userTodo)) {
//     alert("Not A Number");
//     // TODO: NaN
//   } else {
//     userTodo = Number(userTodo);
//     var lengthOfTodoList = todoList.length;
//     todoList.some(function (todo, index) {
//       if (userTodo == todo.id) {
//         alert(`The ( ${todoList.splice(index, 1)[0].todoName} ) Todo Deleted`);
//         todoList.forEach(function (todo, index) {
//           todo.id = index + 1;
//         });
//         return true;
//       }
//     });
//     if (lengthOfTodoList === todoList.length) {
//       alert("The Todo Not Found");
//     }
//   }
// }

// function compleateTodo() {
//   var userTodo = prompt("Enter The Number For Todo.");

//   if (userTodo === null) {
//   } else if (userTodo === "") {
//     alert("No Input");
//   } else if (isNaN(userTodo)) {
//     alert("Not A Number");
//   } else {
//     userTodo = Number(userTodo);
//     var check = todoList.some(function (todo) {
//       if (userTodo == todo.id) {
//         todo.todoStatus = true;
//         alert(`${todo.todoName} Todo is compleate`);
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (!check) {
//       alert("The Todo Not Found");
//     }
//   }
// }

// function showTodoList() {
//   console.clear();
//   todoList.forEach(function (todo) {
//     console.log(
//       `${todo.id}- ${todo.todoName} ( ${
//         todo.todoStatus ? "Compleate" : "Not Compleate"
//       } )`
//     );
//   });
// }

// function main() {
//   var whileStatus = true;
//   var userChoice;
//   showTodoList();

//   while (whileStatus) {
//     userChoice = prompt(
//       "1-Add Todo\n2-Remove Todo\n3-Compleate Todo\n4-Cancel"
//     );

//     if (userChoice === null) {
//       alert("Cancelled");
//       whileStatus = false;
//       break;
//     } else if (userChoice === "") {
//       alert("No Input");
//     } else if (isNaN(userChoice)) {
//       alert("Not A Number");
//     } else {
//       switch (userChoice) {
//         case "1":
//           addTodo();
//           showTodoList();
//           break;
//         case "2":
//           removeTodo();
//           showTodoList();
//           break;
//         case "3":
//           compleateTodo();
//           showTodoList();
//           break;
//         case "4":
//           alert("Cancelled");
//           showTodoList();
//           whileStatus = false;
//           break;

//         default:
//           showTodoList();
//       }
//     }
//   }
// }

// main();

// !======> 81 <=====!

// var tasks = {
//   amin: [],
//   mohammad: [],
//   amir: [],
//   ahmad: [],
// };
// console.log(tasks);

// var userChoice;
// var whileStatus = true;

// var task;
// var user;

// function addTask() {
//   var task = prompt("Enter The Task.");
//   if (!(task === null) && !(task === "")) {
//     var user = prompt("User :");
//   }

//   if (task === null || user === null) {
//   } else if (task === "" || user === "") {
//     alert("No Input");
//   } else {
//     tasks[user].push(task);
//   }
// }

// function showTasks(params) {
//   console.clear();
//   console.log(tasks)
// }

// showTasks();

// while (whileStatus) {
//   userChoice = prompt("1-Add Task\n2-Cancel");

//   if (userChoice === null) {
//     alert("Cancelled");
//     whileStatus = false;
//     break;
//   } else if (userChoice === "") {
//     alert("No Input");
//   } else if (isNaN(userChoice)) {
//     alert("Not A Number");
//   } else {
//     switch (userChoice) {
//       case "1":
//         addTask();
//         showTasks();
//         break;
//       case "2":
//         alert("Cancelled");
//         whileStatus = false;
//         break;
//       default:
//         showTasks();
//     }
//   }
// }

// !======> 83 <=====!

// var provinces = {
//   khozestan: ["ahwaz", "hamidye", "abadan"],
//   tehran: ["tehran", "varamin", "rey"],
//   mazandaran: ["sari", "babolsar", "chalus"],
//   ilam: ["ilam", "mehran", "eyvan"],
// };

// var userOrigin = prompt(
//   "Enter The Province\nKhozestan, Tehran, Mazandaran, Ilam"
// );

// if (userOrigin === null) {
//   alert("Cancelled");
// } else if (userOrigin === "") {
//   alert("No Input");
// } else {
//   var provinceArray = provinces[userOrigin.toLowerCase()];

//   provinceArray.forEach(function (element) {
//     console.log(element);
//   });
// }

// !======> 84 <=====!

// var questions = [
//   { question: "a?", answer: "yes" },
//   { question: "B?", answer: "yes" },
//   { question: "C?", answer: "no" },
//   { question: "L?", answer: "no" },
//   { question: "T?", answer: "yes" },
// ];

// var useranswer;
// var score = 0;

// questions.forEach(function (question, index) {
//   useranswer = prompt(`${index + 1}- ${question.question}`);
//   if (useranswer.toLowerCase() === question.answer) {
//     score += 1;
//   }
// });

// alert(`Your Score: ${score}`);

// !======> 85 <=====!

//

// !======> 87 <=====!

// var users = [
//   { id: 1, userName: "mohammad", password: "mm12345" },
//   { id: 2, userName: "jasem", password: "jj12345" },
//   { id: 3, userName: "amir", password: "aa12345" },
//   { id: 4, userName: "reza", password: "rr12345" },
// ];

// function forgetPassword(username) {
//   var user = users.find((user) => {
//     return user.userName == username;
//   });

//   if (user === undefined) {
//     return false;
//   } else {
//     return user.password;
//   }
// }

// var userInput = prompt("Inter Your Username:");

// if (userInput === null) {
//   alert("Cancelled");
// } else if (userInput === "") {
//   alert("No Input");
// } else if (userInput.isNaN) {
//   alert("Not A Number");
// } else {
//   var password = forgetPassword(userInput.toLowerCase());
//   if (password) {
//     alert(`Your Password ${password}`);
//   } else {
//     alert("User Not Found");
//   }
// }

// !======> 93 <=====!
// userMinutes = prompt("Enter Minutes:");
// userSeconds = prompt("Enter Seconds:");

// if (userMinutes === null || userSeconds === null) {
//     alert("Cancelled");
// } else if (userMinutes === "" || userSeconds === "") {
//     alert("No Input");
// } else if (isNaN(userMinutes) || isNaN(userSeconds)) {
//     alert("Not A Number");
// } else {
//     userMinutes = Number(userMinutes);
//     userSeconds = Number(userSeconds);
//     var timer = setInterval(function () {
//         if (userMinutes === 0 && userSeconds === 0) {
//             clearInterval(timer);
//             alert("Time Out");
//         } else if (userSeconds === 0) {
//             userMinutes--;
//             userSeconds = 60;
//         }
//         userSeconds--;
//         console.clear();
//         console.log(`${userMinutes}:${userSeconds}`);
//     }, 1000);
// }

// !======> 96 <=====!
//

// !======> Test <=====!

y = 5
console.log(y)
let y
