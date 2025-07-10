<style>
    code {
        font-family: "Courier New";
        font-size: 120%
    }

</style>

<h1 align="center">
  <br>
  <a href="https://javascript.info/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript"></a>
  <br>
  JavaScript
  <br>
</h1>

<p align="center">
    <a href="https://www.w3schools.com/html/" alt="W3School">
        <img src="https://img.shields.io/badge/W3School-HTML_Tutorial-red"/></a>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" alt="mdn_web_docs">
        <img src="https://img.shields.io/badge/mdn_web_docs-HTML_Tutorial-red"/></a>
</p>

<p align="center">
  <a href="#Metadata">Metadata</a>
  •
  <a href="#Heading">Heading</a>
  •
  <a href="#Paragraph">Paragraph</a>
  •
  <a href="#Break">Break</a>
  •
  <a href="#HorizontalRule">HorizontalRule</a>
  •
  <a href="#Image">Image</a>
  •
  <a href="#UnorderList">UnorderList</a>
  •
  <a href="#orderList">orderList</a>
  •
  <a href="#Link">Link</a>
  •
  <a href="#Table">Table</a>
  •
  <a href="#Video">Video</a>
  •
  <a href="#Audio">Audio</a>
  •
  <a href="#Form">Form</a>
  •
  <a href="#iFrame">iFrame</a>
  •
  <a href="#sectioning">sectioning</a>
  •
</p>

# basic

## Js

> Js is case-sensitive

### History Of JavaScript

- Mocha (1995)
> Mocha was the original name of JavaScript.

> Created by Brendan Eich at Netscape.

> Created in 10 days.
- LiveScript (1995)
> The name was changed to LiveScript in 1995.

> The name was changed to JavaScript in 1995.
- JavaScript (1995)
> The name was changed to JavaScript in 1995.
- JScript (1996)
> JScript is Microsoft's implementation of JavaScript.
- ECMAScript (1997)
> ECMAScript is the standard for JavaScript.

> ECMAScript is a trademark of Ecma International.

> ECMAScript is a scripting language specification.
- ES1 (1997)
- ES2 (1998)
- ES3 (1999)
- ES4 (2000)
- ES5 (2009)
- ES6 (2015)
- ...

### Engine

Engine : JavaScript engine is a program or interpreter that executes JavaScript code.

- V8 (Google Chrome, Node.js)
- SpiderMonkey (Mozilla Firefox)
- JavaScriptCore (Safari)
- Chakra (Microsoft Edge)
- Nashorn (Java 8)

> How JavaScript Engine Works?

> 1. Memory Heap : Memory heap is a region of memory used for dynamic memory allocation.

> 2. Call Stack : Call stack is a data structure that stores information about the active subroutines of a computer program.
![Call Stack](https://media.licdn.com/dms/image/v2/D5612AQFnV0Ld0vEsag/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1705135591339?e=2147483647&v=beta&t=axtpp_OBCzbvCXpscYgN2o2afrEH6_venRgil4F3Rj8)

### Best Practice

good.js.org

## Using JavaScript In HTML

---

```html
<!-- ... -->
<body>
  <!-- ... -->

  <!-- Internal -->
  <script>
    alert("Hello World");
  </script>

  <!-- External -->
  <script src="script.js"></script>
</body>
```

## Comment

---

```js
// This Is A Comment

/*
This Is A Comment
*/
```

## Variables

---

```js
var variableName = "Value";
```

## Datatypes

---

```js
// Data Typing Check
console.log(typeof "Value")

// Number:
25
2.5

// String:
"Hello World"
'Hello World'

// Boolean
true
false

// Undefined
// The undefined property indicates that a variable has not been assigned a value, or not declared at all.
undefined

// Null
// = none
null

// Object
{a:"a", b:"b"}
[1, 2, 3, 4, 5]
```

## Console

---

- console.log() : Print to console

```js
console.log("Hello World"); // Hello World
console.log(25); // 25
console.log(true); // true
console.log(false); // false
console.log(undefined); // undefined
console.log(null); // null
```

- console.error() : Print to console (error)

```js
console.error("Hello World"); // Hello World
```

- console.warn() : Print to console (warning)

```js
console.warn("Hello World"); // Hello World
```

- console.info() : Print to console (info)

```js
console.info("Hello World"); // Hello World
```

- console.table() : Print to console (table)

```js
console.table([
  { name: "Ali", age: 25 },
  { name: "Amin", age: 30 },
]); // Table
```

- console.assert() : Print to console (assert)

```js
console.assert(1 === 2, "1 is not equal to 2"); // 1 is not equal to 2
console.assert(1 === 1, "1 is not equal to 1"); // No output
```

- console.time() & console.timeEnd() : Print to console (time)

```js
console.time("Time"); // Start time

console.log("Hello World"); // Hello World
console.log(25); // 25

console.timeEnd("Time"); // End time

// output:
// Time: 0.123ms (time)
```

- console.clear() : Clear console

```js
console.clear(); // Clear console
```

- console.group() & console.groupEnd() : Print to console (group)

```js
console.group("Group"); // Start group
console.log("Hello World"); // Hello World
console.log(25); // 25
console.groupEnd("Group"); // End group
```



## Alert & Prompt

---

## Convert Datatype

---

```js
// Number
Number("25") + // 25 -> typeof : number
  "25"; // 25 -> typeof : number

Number("Hello World"); // NaN -> Not A Number

// String
String(25); // "25" -> typeof : string

String(true); // "true" -> typeof : string

// Boolean
Boolean(1); // true -> typeof : boolean
Boolean(25); // true -> typeof : boolean
Boolean(0); // false -> typeof : boolean
Boolean("Hello World"); // true -> typeof : boolean
Boolean(" "); // true -> typeof : boolean
Boolean("0"); // true -> typeof : boolean
Boolean(""); // false -> typeof : boolean
```

## Operators

### Arithmetic Operators

---

```js
3 + 5; // 8

5 - 3; // 2

3 * 5; // 15

10 / 5; // 2

5 ** 3; // 125

5 % 3; // 2
```

### Assignment Operators

```js
var num = 10;

num += 5; // 15 (num = num + 5)

num -= 5; // 5 (num = num - 5)

num *= 5; // 50 (num = num * 5)

num /= 5; // 2 (num = num / 5)

num %= 5; // 0 (num = num % 5)

num **= 5; // 100000 (num = num ** 5)

num++; // 11 (num = num + 1) (increment) (Arithmetic Operator)
++num; // 12 (num = num + 1) (increment) (Arithmetic Operator)

num--; // 11 (num = num - 1) (decrement) (Arithmetic Operator)
--num; // 10 (num = num - 1) (decrement) (Arithmetic Operator)
```

> **Tip:**

The difference between x++ and ++x

- num++ (post-increment): Returns the current value of num first, then increments num by one.

- ++num (pre-increment): Increments num by one first, then returns the new value of num.

```js
let num = 5;

console.log(num++); // Output: 5
console.log(num); // Output: 6

num = 5;

console.log(++num); // Output: 6
console.log(num); // Output: 6
```

### Comparison Operators

```js
== // equal to (only value)
=== // equal value and equal type (strict)
!= // not equal to (only value)
!== // not equal value or not equal type (strict)
> // greater than
< // less than
>= // greater than or equal to
<= // less than or equal to
? // ternary operator

// Example:

5 == 5 // true
5 == "5" // true
5 === 5 // true
5 === "5" // false
5 != 5 // false
5 != "5" // false
5 !== 5 // false
5 !== "5" // true
5 > 5 // false
5 < 5 // false
5 >= 5 // true
5 <= 5 // true
```

### Logical Operators

---

> OR

```js
true || true; // true
true || false; // true
false || true; // true
false || false; // false
```

> AND

```js
true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

> NOT

```js
!true; // false
!false; // true
```

> AND operators in depth

```js
// If both conditions are true, the code will execute
true && console.log("Hello World"); // Hello World (true)
false && console.log("Hello World"); // No output (false)
// If the first condition is false, the second condition will not be evaluated
// If the first condition is true, the second condition will be evaluated
```

> OR operators in depth

```js
// If either condition is true, the code will execute
true || console.log("Hello World"); // No output (true)
false || console.log("Hello World"); // Hello World (false)
// If the first condition is true, the second condition will not be evaluated
// If the first condition is false, the second condition will be evaluated
```


## NaN(Not a Number)

---

```js
"Hello World" + 25; // Hello World25
"12" + 4; // 124
"12" / 4; // 3
"12" - 4; // 3
"12" * 4; // 3
"Hello World" - 25; // NaN
"Hello World" * 25; // NaN
"Hello World" / 25; // NaN
25 / 0; // Nan

// Typeof NaN -> Number
typeof NaN; // number

// isNaN Method
isNaN("HW" - 25); // true
isNaN("HW" + 25); // true
```

## If & Else

---

```js
if (Boolean) {
  // true
  // Code
} else {
  // false
  // Code
}

if (Boolean) {
  // Code
} else if (Boolean) {
  // Code
} else {
  // Code
}
```

### Ternary Condition

---

```js
Boolean
  ? "If True"
  : "If False"(
      // example :
      5 > 2
    )
  ? "Yes"
  : "No"(
      // Yes
      5 < 2
    )
  ? "Yes"
  : "No"; // No
```

## Switch Case

---

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    break

  case 'value2':  // if (x === 'value2' || x === 'value3')
  case 'value3':
    ...
    break

  default:
    ...
    break
}
```

- The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
- If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
- If no case is matched then the default code is executed (if it exists).

## Function

---

### Function Declaration

```js
function name(parameter1, parameter2, ...parameterN) {
  // Code
}
```

### Function Expressions

```js
var name = function (parameter1, parameter2, ...parameterN) {
  // Code
};
```

### Call Function

```js
name();
```

### Parameters

```js
function showText(text, number) {
  alert("You Parameters => text: " + text + " number: " + number);
}

showText("Hello World", 25); // You Parameters => text: Hello World number: 25
```

### Default values

```js
function name(params) {
  alert(params);
}

name(); // undefined (No input)

// Default values:

function name(params = "Test Text" /* Default value */) {
  alert(params);
}

name(); // Test Text (Default value)
```

### Return

```js
function name() {
  return "Hello World"; // function has only one return

  // (after return => no code will be executed)

  alert("Test"); // no alert (after return)
}

name(); // "Hello World" (no alert)

var result = name(); // "Hello World" (no alert)

alert(result); // alert("Hello World"); (no return)
```

### Callback Function

```js
function name(callback) {
  // Code
  callback(); // Call the callback function
}

// Example:
function greet() {
  alert("Hello World");
}

name(greet); // Call the name function with the greet function as a callback

// Example:

function add(a, b, callback) {
  var result = a + b;
  callback(result); // Call the callback function with the result
}

add(5, 10, function (result) {
  alert("The result is: " + result); // The result is: 15
});
```

### Sync & Async Functions

```js
function syncFunction() {
  console.log("This is a synchronous function.");
}

function asyncFunction() {
  setTimeout(function () {
    console.log("This is an asynchronous function.");
  }, 1000); // 1 second delay
}

syncFunction(); // This is a synchronous function.
asyncFunction(); // This is an asynchronous function. (after 1 second)
```

![Synchronous vs. Asynchronous JavaScript](https://miro.medium.com/v2/format:webp/1*V5syja2casc0gCuu9zKV5g.png)

> Synchronous & Asynchronous Functions And Callbacks

```js
function firstLog () {
    console.log("1");
    console.log("2");
}
function middleLog () {
    setTimeout(function () {
        console.log("3");
    }, 1000);
}
function lastLog () {
    console.log("4");
    console.log("5");
}

firstLog(); // 1, 2
middleLog(); // 3 (after 1 second)
lastLog(); // 4, 5
// output: 1, 2, 4, 5, 3

// Resolution
function firstLog() {
  console.log("1");
  console.log("2");
}
function middleLog (callback) {
    setTimeout(function () {
        console.log("3");
        callback(); // Call the callback function after 1 second
    }, 1000);
}
function lastLog() {
  console.log("4");
  console.log("5");
}

firstLog(); // 1, 2
middleLog(lastLog); // 3 (after 1 second), 4, 5
// output: 1, 2, 3, 4, 5
```


### Arguments Keyword

The `arguments` keyword is an array-like object that contains the arguments passed to a function. It is available within all non-arrow functions.

```js
function showArguments() {
  console.log(arguments); // Array-like object of arguments
}
showArguments("Hello", 25, true); // ["Hello", 25, true]

// Example
function sum() {
  let total = 0;
  let arrayArgs = Array.from(arguments); // Convert arguments to an array

  arrayArgs.forEach(function (num) {
    total += num; // Sum all arguments
  });

  return total; // Return the total sum
}
console.log(sum(1, 2, 3, 4)); // 10

// in Arrow Function
const showArguments = () => {
  console.log(arguments); // Error: arguments is not defined in arrow functions
};
```

### Rest Parameters

Rest parameters allow you to represent an indefinite number of arguments as an array. It is defined by three dots (`...`) followed by a parameter name.

```js
function sum(...args) {
  let total = 0;
  args.forEach(function (num) {
    total += num; // Sum all arguments
  });
  return total; // Return the total sum
}

console.log(sum(1, 2, 3, 4)); // 10

// in Arrow Function

const sum = (...args) => {
  let total = 0;
  args.forEach(num => {
    total += num; // Sum all arguments
  });
  return total; // Return the total sum
};

console.log(sum(1, 2, 3, 4)); // 10

// Rest Parameter must be last formal parameter
function example(a, b, ...rest) {
  console.log(a, b, rest); // a, b, rest (array of remaining arguments)
}

function example(...args, a) {
  console.log(args, a); // Error: Rest parameter must be last formal parameter
```

### Pure Function

Pure functions are functions that always produce the same output for the same input and do not cause any side effects (i.e., they do not modify any external state or variables). They are predictable and easier to test.

A pure function should not:
- Modify any external state or variables.
- Depend on any external state or variables that can change.
- Cause any side effects, such as modifying global variables, changing the DOM, or performing I/O operations.

```js
function pureFunction(a, b) {
  return a + b; // Pure function (no side effects)
}

// Example:
function add(a, b) {
  return a + b; // Pure function (no side effects)
}
function multiply(a, b) {
  return a * b; // Pure function (no side effects)
}

// Non-pure functions:
function nonPureFunction(a, b) {
  globalVariable = a + b; // Non-pure function (modifies external state)
  return globalVariable;
}

function nonPureFunctionWithSideEffect(a, b) {
  console.log("This is a side effect"); // Non-pure function (causes side effect)
  return a + b;
}
```

### Composition Function

Function composition is a technique where you combine two or more functions to create a new function. The output of one function becomes the input of the next function.

```js
function trim(val) {
    val.trim();
}
function toLowerCase(val) {
    val.toLowerCase();
}

function getVal() {
    toLowerCase(trim(prompt("Enter a value:"))); // Call the functions in order => Composition
}

getVal();
```

### HOF (Higher-Order Function)

A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. Higher-order functions allow you to create more abstract and reusable code.

```js
function higherOrderFunction(callback) {
  // Code
  callback(); // Call the callback function
}

// And

function higherOrderFunction() {
  return function () {
    // Code
  };
}

// Example:
function greet(name) {
  return function () {
    console.log("Hello, " + name + "!");
  };
}
var greetAli = greet("Ali"); // Create a new function with the name "Ali"
greetAli(); // Hello, Ali!
//Or
greet("Ali")(); // Hello, Ali!
```


### Arrow Function

```js
// Syntax:
const functionName = (params) => {
  // Code
};

// Example:
const greet = (name) => {
  return "Hello, " + name + "!";
};
greet("Ali"); // Hello, Ali!
// Or
const greet = (name) => "Hello, " + name + "!"; // Implicit return
greet("Ali"); // Hello, Ali!
// Or
const greet = name => "Hello, " + name + "!"; // Implicit return (no parentheses for single parameter)


// Example with no parameters:
const sayHello = () => {
  console.log("Hello World");
};
sayHello(); // Hello World
// Or
const sayHello = () => console.log("Hello World");
sayHello(); // Hello World

// Returning an object:
const generateUser = (name, age = 25) => ({name: name,age: age,});
console.log(generateUser("Ali", 25)); // {name: "Ali", age: 25}
```

### Anonymous Function

```js
function (params) {
}

// Example:

var name = function () {
  alert("Hello World");
};

name(); // Hello World
```

### IIFE (Immediately Invoked Function Expression)

```js
(function () {})();
(function () {})();

// Example:

(function () {
  alert("Hello World");
})(); // Hello World
```

## String

---

### Strings Syntax

```js
var singleQuote = "Hello World"; // single quotes

var doubleQuote = "Hello World"; // double quotes

var templateLiteral = `Hello World`; // backticks (template literals)
```

### Indexing

```js
var text = "Hello"; // 5 characters

text[0]; // H (index 0)
text[1]; // e (index 1)
text[2]; // l (index 2)
text[3]; // l (index 3)
text[4]; // o (index 4)

text[5]; // undefined (index 5)

text[-1]; // undefined (index -1)
```

### Concat Action On Strings

```js
"Hello" + "World"; // HelloWorld
"Hello" + " " + "World"; // Hello World
"Hello World " + 25; // Hello World 25
"12" + 4; // 124
"12" / 4; // 3

// \n : New Line

"Hello" + "\n" + "World";
// Hello
// World

// \" , \' : " , '

'Hello "World"' + " " + "Hello 'World'"; // Hello "World" Hello 'World'
```

### Template Literals (Template Strings)

```js
var name = "Ali";
var age = 25;
var text = `Hello ${name}, you are ${age} years old.`; // Template string
console.log(text); // Hello Ali, you are 25 years old.

// Example with expressions:
var a = 5;
var b = 10;
var sum = `The sum of ${a} and ${b} is ${a + b}.`; // Template string with expression
console.log(sum); // The sum of 5 and 10 is 15.

// Example with multi-line string:

var multiLineText = `This is a multi-line string.
It can span multiple lines without using \n.`;
console.log(multiLineText);
// This is a multi-line string.
// It can span multiple lines without using \n.
```


### String Properties

> length

```js
var text = "Hello World";

text.length; // 11 (characters) (index 0 - 10)

text[text.length - 1]; // d (index 10)

text[text.length]; // undefined (index 11)

text[text.length - 1]; // d (index 10)
```

### String Methods

> charAt(index)

Returns the character at the specified index (position)

```js
var text = "Hello World";

text[0]; // H (index 0) (indexing)

text.charAt(0); // H (index 0) (charAt() method)
```

> charCodeAt(index)

Returns the Unicode of the character at the specified index (position)

```js
var text = "Hello World";

text.charCodeAt(0); // 72 (index 0) (ASCII code)
```

> concat(string)

Returns a new string that is this string joined with string(s) provided as arguments

```js
var text = "Hello";

text.concat(" World"); // Hello World
```

> trim()

Removes whitespace from both ends of a string

```js
var text = "      Hello World      ";

text; // "      Hello World      "

text.trim(); // "Hello World"
```

> toLowerCase()

Returns the calling string value converted to lowercase

```js
var text = "Hello World";

text.toLowerCase(); // hello world
```

> toUpperCase()

Returns the calling string value converted to uppercase

```js
var text = "Hello World";

text.toUpperCase(); // HELLO WORLD
```

> search(string)

Searches a string for a specified value and returns the position of the match

```js
var text = "Hello World";

text.search("World"); // 6 (index)

text.search("Worlds"); // -1 (not found)

text.search("world"); // -1 (not found) (case sensitive)
```

> indexOf(string)

Returns the position of the first found occurrence of a specified value in a string

```js
var text = "Hello World";

text.indexOf("World"); // 6 (index)

text.indexOf("Worlds"); // -1 (not found)

text.indexOf("world"); // -1 (not found) (case sensitive)
```

> includes(string)

Returns true if a string contains a specified value, otherwise false

```js
var text = "Hello World";

text.includes("World"); // true

text.includes("Worlds"); // false

text.includes("world"); // false (case sensitive)
```

> slice(start, end)

Extracts a part of a string and returns a new string

```js
var text = "Hello World";

text.slice(0, 5); // Hello (index 0 - 4)

text.slice(6, 11); // World (index 6 - 10)

text.slice(6); // World (index 6 - end)

text.slice(-5); // World (index -5 - end)
```

> substr(start, length)

Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

```js
var text = "Hello World";

text.substr(0, 5); // Hello (index 0 - 4)

text.substr(6, 5); // World (index 6 - 10)

text.substr(6); // World (index 6 - end)

text.substr(-5); // World (index -5 - end)
```

> substring(start, end)

Extracts the characters from a string, between two specified indices

```js
var text = "Hello World";

text.substring(0, 5); // Hello (index 0 - 4)

text.substring(6, 11); // World (index 6 - 10)

text.substring(6); // World (index 6 - end)

text.substring(-5); // Hello World (index 0 - end)
```

> join() & split()

fff

fff

```js
// join()
var arrayName = ["Value1", "Value1", "Value2"];

console.log(arrayName.join()); // "Value1,Value1,Value2"
console.log(arrayName.join("/")); // "Value1/Value1/Value2"
console.log(arrayName.join("")); // "Value1Value1Value2"

// split()
var string = "Value1.Value2";

console.log(string.split()); // ['Value1.Value2']
console.log(string.split("")); // ['V', 'a', 'l', 'u', 'e', '1', '.', 'V', 'a', 'l', 'u', 'e', '2']
console.log(string.split(".")); // ['Value1', 'Value2']
```

### String Padding

```js
// padStart(targetLength, padString)

var text = "5";
text.padStart(3, "0"); // "005" (pads the string to a length of 3 with "0" at the start)
text.padStart(5, "0"); // "00005" (pads the string to a length of 5 with "0" at the start)

// padEnd(targetLength, padString)

text.padEnd(3, "0"); // "500" (pads the string to a length of 3 with "0" at the end)
text.padEnd(5, "0"); // "50000" (pads the string to a length of 5 with "0" at the end)

// Example for Phone Number
var phoneNumber = "1234567890";
phoneNumber.slice(-4).padEnd(10, "*"); // "7890******" (pads the last 4 digits of the phone number with "*" to a length of 10)
```

## Math Object

```js
Math.PI; // 3.141592653589793 (PI)

Math.round(4.7); // 5 (rounds to the nearest integer)
Math.round(4.4); // 4 (rounds to the nearest integer)

Math.pow(8, 2); // 64 (8^2)

Math.sqrt(64); // 8 (square root of 64)

Math.abs(-4.7); // 4.7 (absolute value)

Math.ceil(4.4); // 5 (rounds up to the nearest integer)
Math.floor(4.7); // 4 (rounds down to the nearest integer)
Math.trunc(4.7); // 4 (removes the decimal part)

Math.min(0, 150, 30, 20, -8, -200); // -200 (returns the number with the lowest value)
Math.max(0, 150, 30, 20, -8, -200); // 150 (returns the number with the highest value)

Math.random(); // 0.123456789 (returns a random number between 0 and 1)

Math.floor(Math.random() * 10); // 0 - 9 (returns a random integer from 0 to 9)

Math.floor(Math.random() * 10) + 1; // 1 - 10 (returns a random integer from 1 to 10)
```

## Loops

### For Loop

```js
for (var index = 0; index < 5; index++) {
  // Code
}

// Example:

for (var index = 0; index < 5; index++) {
  console.log(index);
}

// Output:
// 0
// 1
// 2
// 3
// 4

// Example:

for (var index = 5; index < 0; index--) {
  console.log(index);
}

// Output:
// 5
// 4
// 3
// 2
// 1

// Example:

for (var index = 0; index < 5; index += 1) {
  console.log(index);
}

// Output:
// 0
// 1
// 2
// 3
// 4

// Example:

var index = 0;

for (; index < 5; index++) {
  console.log(index);
}

// Output:
// 0
// 1
// 2
// 3
// 4

// Example:

var text = "Hello";

for (var index = 0; index < text.length; index++) {
  console.log(text[index]);
}

// Output:
// H
// e
// l
// l
// o

// Practice:

var average = 0;
var input;

for (var i = 0; i < 6; i++) {
  if (i < 5) {
    input = prompt(`Enter The Number ${i + 1}:`);
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
      average += +input;
    }
  } else {
    alert(`Average: ${average / 5}`);
  }
}

// Output:
// input: 1, 2, 3, 4, 5
// Average: 3
```

### While Loop

```js
while (Boolean) {
  // Code
}

// Example:

var i = 0;

while (i < 100) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// Output:
// 0
// 2
// 4
// ...
// 98
```

### Do While Loop

> The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```js
do {
  // Code
} while (Boolean);

// Example:

var i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

// Output:
// 0
// 1
// 2
// 3
// 4

// Example:

var i = 0;

do {
  console.log(i);
  i++;
} while (i < 0);

// Output:
// 0
```

### For Of Loop

For of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It provides a simpler way to loop through elements without needing an index.

Iterating Data :
1- Array
2- String
3- Like Array Objects (NodeList, HTMLCollection, etc., arguments object)

```js
// Example with Array:
var arrayName = ["Value1", "Value2", "Value3"];
for (var value of arrayName) {
  console.log(value);
}
// Output:
// Value1
// Value2
// Value3

// Example with String:
var text = "Hello";
for (var char of text) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o
```

### For In Loop

For in loop is used to iterate over the properties of an object. It allows you to access each property name (key) in the object.

```js
// Example with Object:
var objectName = { key1: "Value1", key2: "Value2", key3: "Value3" };
for (var key in objectName) {
  console.log(key + ": " + objectName[key]);
}
// Output:
// key1: Value1
// key2: Value2
// key3: Value3

// Example with Array:
var arrayName = ["Value1", "Value2", "Value3"];
for (var index in arrayName) {
  console.log("Index: " + index + ", Value: " + arrayName[index]);
}
// Output:
// Index: 0, Value: Value1
// Index: 1, Value: Value2
// Index: 2, Value: Value3

// Example with String:
var text = "Hello";
for (var index in text) {
  console.log("Index: " + index + ", Character: " + text[index]);
}
// Output:
// Index: 0, Character: H
// Index: 1, Character: e
// Index: 2, Character: l
// Index: 3, Character: l
// Index: 4, Character: o
```

## Array

### Array Syntax

```js
var arrayName = ["Value1", "Value2", "Value3"];

var arrayName = new Array("Value1", "Value2", "Value3");
```

### Indexing

```js
var arrayName = ["Value1", "Value2", "Value3"];

arrayName[0]; // Value1 (index 0)
arrayName[1]; // Value2 (index 1)
arrayName[2]; // Value3 (index 2)

arrayName[3]; // undefined (index 3)
arrayName[-1]; // undefined (index -1)
```

### Array Properties

> length

```js
var arrayName = ["Value1", "Value2", "Value3"];

arrayName.length; // 3 (elements)

arrayName[arrayName.length - 1]; // Value3 (index 2)

arrayName[arrayName.length]; // undefined (index 3)
```

### Array Methods

> push()

Adds new elements to the end of an array, and returns the new length

```js
var arrayName = ["Value1", "Value2", "Value3"];

// arrayName[3] = "Value4";

// arrayName; // ["Value1", "Value2", "Value3", "Value4"]

arrayName.push("Value4");

arrayName; // ["Value1", "Value2", "Value3", "Value4"]
```

> pop()

Removes the last element of an array, and returns that element

```js
var arrayName = ["Value1", "Value2", "Value3"];

// arrayName[2] = undefined;

// arrayName; // ["Value1", "Value2"]

arrayName.pop();

arrayName; // ["Value1", "Value2"]
```

> shift()

Removes the first element of an array, and returns that element

```js
var arrayName = ["Value1", "Value2", "Value3"];

arrayName.shift();

arrayName; // ["Value2", "Value3"]

arrayName.shift();

arrayName; // ["Value3"]
```

> unshift()

Adds new elements to the beginning of an array, and returns the new length

```js
var arrayName = ["Value1", "Value2", "Value3"];

arrayName.unshift("Value0");

arrayName; // ["Value0", "Value1", "Value2", "Value3"]

arrayName.unshift("Value-1", "Value-2");

arrayName; // ["Value-1", "Value-2", "Value0", "Value1", "Value2", "Value3"]
```

> forEach()

Calls a function once for each element in an array, in order

```js
var arrayName = ["Value1", "Value2", "Value3"];

arrayName.forEach(function (element, index, array) {
  console.log(`Element: ${element} Index: ${index} Array: ${array}`);
});

// Output:
// Element: Value1 Index: 0 Array: Value1,Value2,Value3
// Element: Value2 Index: 1 Array: Value1,Value2,Value3
// Element: Value3 Index: 2 Array: Value1,Value2,Value3
```

> includes(element, start)

Check if an array contains the specified element

```js
var arrayName = ["Value1", "Value2", "Value3", "Value2", { key: "Value2" }];

arrayName.includes("Value2"); // true

arrayName.includes("Value4"); // false

arrayName.includes("value2"); // false (case sensitive)

arrayName.includes("Value2", 2); // false (start index) (index 2)

arrayName.includes("Value2", 1); // true (start index) (index 1)

arrayName.includes({ key: "Value2" }); // false (object)
```

> some()

Check if some elements in an array pass a test

Tip : some() does not execute the function for array elements without values.

Tip : some() does not change the original array.

```js
var arrayName = ["Value1", "Value2", "Value3", "Value2", { key: "Value2" }];

arrayName.some(function (element, index, array) {
  return element === "Value2";
}); // true

arrayName.some(function (element, index, array) {
  return element === "Value4";
}); // false

arrayName.some(function (element, index, array) {
  return element === "value2";
}); // false (case sensitive)

arrayName.some(function (element, index, array) {
  return element === "Value2";
}, 2); // false (start index) (index 2)

arrayName.some(function (element, index, array) {
  return element === "Value2";
}, 1); // true (start index) (index 1)

arrayName.some(function (element, index, array) {
  return element === { key: "Value2" };
}); // false (object)
```

> every()

Check if all the elements in an array pass a test

```js
var numArray = [5, 6, 7, 8, 9, 10]

numArray.every(function(num)) { return num > 5 } // false

numArray.every(function(num)) { return num > 4 } // true

// Example:

var users = [
  { id: 1, userName: "Ali", age: 23 },
  { id: 2, userName: "Mohahmmad", age: 12 },
  { id: 3, userName: "Reza", age: 30 },
];

var userAgeCheck = users.every(function (user) { return user.age > 18; }); // false

// Example:

var users = [
  { id: 1, userName: "Ali", age: 23 },
  { id: 2, userName: "Mohahmmad", age: 20 },
  { id: 3, userName: "Reza", age: 30 },
];

var userAgeCheck = users.every(function (user) { return user.age > 18; }); // true
```

> splice()

Adds/Removes elements from an array

```js
var numArray = ["Value1", "Value2", "Value3", "Value4", "Value5", "Value6"];

console.log(numArray.splice(2, 1)); // ["Value3"]
console.log(numArray); // ["Value1","Value2","Value4","Value5","Value6"]

// Example:

var numArray = ["Value1", "Value2", "Value3", "Value4", "Value5", "Value6"];

console.log(numArray.splice(2, 3)); // ["Value3","Value4","Value5"]
console.log(numArray); // ["Value1","Value2","Value6"]

// Example:

var numArray = ["Value1", "Value2", "Value3", "Value4", "Value5", "Value6"];

console.log(numArray.splice(2, 3, "Test")); // ["Value3","Value4","Value5"]
console.log(numArray); // ["Value1","Value2","Test","Value6"]

// Example:

var numArray = ["Value1", "Value2", "Value3", "Value4", "Value5", "Value6"];

console.log(numArray.splice(2, 3, "Test1", "Test2")); // ["Value3","Value4","Value5"]
console.log(numArray); // ["Value1","Value2","Test1","Test2","Value6"]
```

> findindex()

Returns the index of the first element in an array that pass a test

```js
var arrayName = ["Value1", "Value2", "Value3", "Value4"];

arrayName.findIndex(function (element) {
  return element === "Value3";
}); // 2

// Example:

var arrayName = ["Value1", "Value2", "Value3", "Value4"];

console.log(
  arrayName.findIndex(function (element) {
    console.log(element);
    return element === "Value2";
  })
);

// Output:
// Value1
// Value2
// 1
```

> map()

Creates a new array with the result of calling a function for each array element

the Different foreach() and map()

```js
var numArray = [1, 2, 3, 4, 5];

var numsPower = numArray.map(function (num) {
  return num ** 2;
});

console.log(numArray); // [1, 2, 3, 4, 5]
console.log(numsPower); // [1, 4, 9, 16, 25]
```

> filter()

Creates a new array with every element in an array that pass a test

```js
var numArray = [1, 2, 3, 4, 5];

var filterResult = numArray.filter(function (num) {
  return num % 2 === 0;
});

console.log(numArray); // [1, 2, 3, 4, 5]
console.log(filterResult); // [2, 4]

// Example:

var scores = [18, 19, 16, 20, 14, 12];

var filteredScores = scores.filter(function (score) {
  return score >= 18;
});

console.log(scores); // [18, 19, 16, 20, 14, 12]
console.log(filteredScores); // [18, 19, 20]

// Example:

var userName = ["Ali", "Amin", "Amir", "Babak"];

var filteredNames = userName.filter(function (name) {
  return name.length === 4;
});

console.log(userName); // ["Ali", "Amin", "Amir", "Babak"]
console.log(filteredNames); // ['Amin', 'Amir']
```

> Array.isArray()

Checks if a value is an array

```js
var arrayName = ["Value1", "Value2", "Value3"];
var string = "Hello World";
var number = 25;

console.log(Array.isArray(arrayName)); // true
console.log(Array.isArray(string)); // false
console.log(Array.isArray(string)); // false
```

> indexOf()

Returns the first index at which a given element can be found in the array, or -1 if it is not present

```js
var arrayName = [25, "Value1", "Value2", 25];

console.log(arrayName.indexOf(25)); // 0
console.log(arrayName.indexOf(25, 1)); // 3
console.log(arrayName.indexOf("Value2")); // 2
console.log(arrayName.indexOf("Value10")); // -1
```

> lastIndexOf()

Returns the last index at which a given element can be found in the array, or -1 if it is not present

```js
var arrayName = [25, "Value1", "Value2", 25];

console.log(arrayName.lastIndexOf(25)); // 3
console.log(arrayName.lastIndexOf(25, 2)); // 0
console.log(arrayName.lastIndexOf("Value2")); // 2
console.log(arrayName.lastIndexOf("Value10")); // -1
```

> slice()

Selects a part of an array, and returns the new array

```js
var arrayName = [25, "Value1", "Value2", 25];

console.log(arrayName.slice(1, 3)); // ['Value1', 'Value2']
console.log(arrayName.slice()); // [25, 'Value1', 'Value2', 25]
console.log(arrayName); // [25, 'Value1', 'Value2', 25]
```

> reverse()

Reverses the elements in an array

```js
var arrayName = ["Value1", "Value1", "Value2"];

console.log(arrayName.reverse()); // ['Value2', 'Value1', 'Value1']
```

> join() & split()

```js
// join()
var arrayName = ["Value1", "Value1", "Value2"];

console.log(arrayName.join()); // "Value1,Value1,Value2"
console.log(arrayName.join("/")); // "Value1/Value1/Value2"
console.log(arrayName.join("")); // "Value1Value1Value2"

// split()
var string = "Value1.Value2";

console.log(string.split()); // ['Value1.Value2']
console.log(string.split("")); // ['V', 'a', 'l', 'u', 'e', '1', '.', 'V', 'a', 'l', 'u', 'e', '2']
console.log(string.split(".")); // ['Value1', 'Value2']
```

> find()

Returns the value of the first element in an array that pass a test

```js
var arrayName = [
  { id: 1, value: "value1" },
  { id: 2, value: "value2" },
  { id: 3, value: "value3" },
  { id: 4, value: "value4" },
];

arrayName.find(function (value) {
  return value.value === "value3";
}); // { id: 3, value: "value3" }
```

## Objects

### Object Syntax

```js
var objectName = {
  key1: "Value1",
  key2: "Value2",
  key3: "Value3",
};

var objectName = new Object();
```

### Indexing

```js
var objectName = {
  key1: "Value1",
  key2: "Value2",
  key3: "Value3",
};

objectName.key1; // Value1 (key1)
objectName.key2; // Value2 (key2)
objectName.key3; // Value3 (key3)

objectName.key4; // undefined (key4)
objectName.key - 1; // undefined (key-1)

// or

objectName["key1"]; // Value1 (key1)
objectName["key2"]; // Value2 (key2)
objectName["key3"]; // Value3 (key3)

objectName["key4"]; // undefined (key4)
objectName["key-1"]; // undefined (key-1)
```

## eval() Is Evil

The eval() function evaluates JavaScript code represented as a string.

NEVER USE eval() : eval() is a dangerous function, which executes the code it's passed with the privileges of the caller. If you run eval() with a string that could be affected by a malicious party, you may end up running malicious code on the user's machine with the permissions of your webpage/extension. More importantly, a third-party code can see the scope in which eval() was invoked, which can lead to possible attacks in ways to which the similar Function is not susceptible.

eval() Is Slower : The eval() function is used to execute text, and it's similar to using the Function constructor. It executes slower than the equivalent code executed directly. It also provides no performance benefit over a direct call.

```js
var x = 10;
var y = 20;

eval("x * y"); // 200
```

## setInterval() & clearInterval()

setInterval() : Calls a function or evaluates an expression at specified intervals (in milliseconds).
clearInterval() : Stops the executions of the function specified in setInterval().

```js
setInterval(function, milliseconds);
// 1000ms = 1s

var interval = setInterval(function () {
  console.log("Hello World");
}, 1000);

// Output:
// Hello World
// Hello World (every 1s)
// Hello World (every 1s)

clearInterval(interval); // Stop setInterval()

// Example:
var i = 10;

var timer = setInterval(function () {
  if (i === 0) {
      clearInterval(timer);
  }
  console.log(i);
  i--;
}, 1000);
```

## setTimeout() & clearTimeout()

setTimeout() : Calls a function or evaluates an expression after a specified number of milliseconds.
clearTimeout() : Stops the executions of the function specified in setTimeout().

```js
setTimeout(function, milliseconds, param1, param2, ...);
// 1000ms = 1s

setTimeout(function () {
  console.log("Hello World");
}, 1000);

// Output:
// Hello World (after 1s)

// Example:
var message = "Hello World";
var timer = setTimeout(function (message) {
  console.log(message);
}, 1000, messasge);

// Output:
// Hello World (after 1s)

clearTimeout(timer); // Stop setTimeout()
```

## Falsy Values & Truthy Values

Falsy Values : A falsy value is a value that translates to false when evaluated in a Boolean context.

- false
- 0
- ""
- null
- undefined
- NaN
- ...

Truthy Values : A truthy value is a value that translates to true when evaluated in a Boolean context.

- true
- 1
- " "
- "0"
- "Hello World"
- []
- {}
- function () {}
- ...

```js

```

## Flag

Flag : A flag is a variable that is used to store a true/false condition.

```js
var flag = true;

if (flag) {
  // Code
}

if (!flag) {
  // Code
}
```

## Hoisting

Hoisting : Hoisting is JavaScript's default behavior of moving declarations to the top.

```js
console.log(x); // undefined
var x = 5;

// Example:

console.log(x); // undefined
var x = 5;
console.log(x); // 5

// Example:

x = 5;
console.log(x); // 5
var x;

// Example:

console.log(x); // undefined
var x;
x = 5;
console.log(x); // 5
```

## Difference Between `var`, `let`, and `const`

### `var`

- Function-scoped.
- Can be re-declared and updated.
- Hoisted to the top of its scope and initialized with `undefined`.

```js
var x = 1;
if (true) {
  var x = 2; // same variable
  console.log(x); // 2
}
console.log(x); // 2
```

### `let`

- Block-scoped.
- Cannot be re-declared but can be updated.
- Hoisted to the top of its block but not initialized.

```js
let y = 1;
if (true) {
  let y = 2; // different variable
  console.log(y); // 2
}
console.log(y); // 1

// Example:

let a = 10;
a = 20; // Allowed
console.log(a); // 20

// Example:

let b = 30;
if (true) {
  let b = 40; // different variable
  console.log(b); // 40
}
console.log(b); // 30

// Example:

let c = 50;
if (true) {
  c = 60; // same variable
  console.log(c); // 60
}
console.log(c); // 60
```

### `const`

- Block-scoped.
- Cannot be re-declared or updated.
- Must be initialized at the time of declaration.

```js
const z = 1;
if (true) {
  const z = 2; // different variable
  console.log(z); // 2
}
console.log(z); // 1
```

## async & defer

async : The async attribute is a boolean attribute. When present, it specifies that the script will be executed asynchronously as soon as it is available. (just like the script tag in the head section) (just external script)

defer : The defer attribute is a boolean attribute. When present, it specifies that the script is executed when the page has finished parsing. (just like the script tag in the body section) (just external script)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="script.js"></script>
    <script src="script.js" async></script>
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Hello World</h1>
    <script src="script.js"></script>
  </body>
</html>
```

![async & defer](https://i.sstatic.net/wfL82.png)

## Local Storage

Local Storage : Local Storage is a web storage that allows you to store data in the browser. The data is stored as key/value pairs, and it persists even after the browser is closed. Local Storage has a larger storage capacity compared to cookies.

+ The data is stored as key/value pairs.
+ The data is stored in the browser.
+ The data is stored as strings.
+ The data is stored in the same origin (domain, protocol, and port).

```js
localstorage.setItem("key", "value"); // Set item


localstorage.getItem("key"); // Get item (string)


localstorage.clear(); // Clear all items

localstorage.removeItem("key"); // Remove Item

// Add Array to Local Storage

var array = ["Value1", "Value2", "Value3"];
localstorage.setItem("array", JSON.stringify(array)); // Set item (string)
// Output : "["Value1","Value2","Value3"]" (string)

JSON.parse(localstorage.getItem("array")); // Get item (array)
// Output : ["Value1", "Value2", "Value3"] (array)

// Replace Value

localstorage.setItem("key", "value"); // Set item (string)

localstorage.setItem("key", "new value"); // Replace value
```

## Error Handling

### try...catch

try...catch : The try statement allows you to define a block of code to be tested for errors while it is being executed. The catch statement allows you to define a block of code to be executed if an error occurs in the try block.

```js
try {
  // Code
} catch (error) {
  // Code
}

// Example:

try {
  console.log(x);
} catch (error) {
  console.log(error);
}

// Output:
// ReferenceError: x is not defined
```

### throw

throw : The throw statement allows you to create a custom error.

```js
throw "Error Message";

throw 404;

try {
    throw "Error"
} catch (error){
    console.log(error)
}
```

### finally

finally : The finally statement allows you to execute code after try...catch, regardless of the result.

```js
try {
  // Code
} catch (error) {
  // Code
} finally {
  // Code
}
```

## Date Object

Date Object : The Date object is used to work with dates and times. The Date object is created with the new Date() constructor.

```js
var date = new Date(); // Current date and time

console.log(date) // 2023-10-01T00:00:00.000Z (current date and time)

date.getDate(); // 1 (day of the month) (1-31)
date.getDay(); // 0 (day of the week) (0-6) (0 = Sunday, 1 = Monday, ...)
date.getFullYear(); // 2023 (4 digits year)
date.getMonth(); // 9 (month) (0-11) (0 = January, 1 = February, ...)
date.getHours(); // 0 (hours) (0-23)
date.getMinutes(); // 0 (minutes) (0-59)
date.getSeconds(); // 0 (seconds) (0-59)
date.getMilliseconds(); // 0 (milliseconds) (0-999)
date.getTime(); // 1696118400000 (milliseconds since January 1, 1970)
```

## delete keyword

delete : The delete operator deletes a property from an object.

delete return true if the property was successfully deleted, and false if the property could not be deleted.

```js
var objectName = {
  key1: "Value1",
  key2: "Value2",
  key3: "Value3",
};

delete objectName.key1; // Delete key1
delete objectName["key2"]; // Delete key2
delete objectName.key4; // Delete key4 (undefined)

console.log(objectName); // { key3: "Value3" } (key1 and key2 are deleted)

console.log(delete objectName.key1); // true (key1 is deleted)

//

var arrayName = ["Value1", "Value2", "Value3"];

delete arrayName[0]; // Delete index 0 (Value1)

console.log(arrayName); // [undefined, "Value2", "Value3"] (index 0 is undefined)
// JS does not delete the index, it just sets it to undefined
```

## Global Scope & Local Scope & Block Scope

Global Scope : Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the code.

Local Scope : Variables declared inside a function are in the local scope. They can only be accessed from within that function.

Block Scope : Variables declared with `let` or `const` inside a block (e.g., inside `{}`) are in the block scope. They can only be accessed from within that block.

```js
var globalVar = "I am global"; // Global scope

function myFunction() {
  var localVar = "I am local"; // Local scope
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}
myFunction();
console.log(globalVar); // Accessible
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined (not accessible)
if (true) {
  let blockVar = "I am block scoped"; // Block scope
  console.log(blockVar); // Accessible
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined (not accessible)
```

## Strict Mode

Strict Mode : Strict mode is a way to opt in to a restricted variant of JavaScript. It helps you write cleaner code by catching common coding mistakes and "unsafe" actions such as defining global variables.

```js
"use strict"; // Enable strict mode for global scope & local scope (at the top of the file or function => line 1)

function myFunction() {
  "use strict"; // Enable strict mode for this function
  // Code
}
```

## Spread Operator

The spread operator (`...`) allows you to expand an iterable (like an array or object) into individual elements. It can be used in function calls, array literals, and object literals.

```js
// Array Example (ES6+)
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var combinedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

// Object Example (ES9+)
var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
var combinedObject = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Copying an Array
var originalArray = [1, 2, 3];
var copiedArray = originalArray; // [1, 2, 3] // this creates a reference to the original array
// Using Spread Operator to Copy an Array
var copiedArray = [...originalArray]; // [1, 2, 3]

// copying an Object
var originalObject = { a: 1, b: 2, c: 3 };
var copiedObject = { ...originalObject }; // { a: 1, b: 2, c: 3 }

// logging the items of the array
console.log(...originalArray); // 1 2 3

// logging the items of the object
console.log(...Object.values(originalObject)); // 1 2 3


```

## Array Destructuring (Dest) & Object Destructuring (Dest)

Array Destructuring : Array destructuring allows you to unpack values from arrays into distinct variables.

```js
// Array Destructuring Example
var array = [1, 2, 3];
var [first, second, third] = array; // first = 1, second = 2, third = 3
// Skipping elements
var [first, , third] = array; // first = 1, third = 3
// Default values
var [first, second = 10] = [1]; // first = 1, second = 10
// Nested Array Destructuring
var nestedArray = [1, [2, 3]];
var [first, [second, third]] = nestedArray; // first = 1, second = 2, third = 3
```

Object Destructuring : Object destructuring allows you to unpack properties from objects into distinct variables.

```js
// Object Destructuring Example
var object = { a: 1, b: 2, c: 3 };
var { a, b, c } = object; // a = 1, b = 2, c = 3
// Renaming variables
var { a: first, b: second } = object; // first = 1, second = 2
// Default values
var { a, b = 10 } = { a: 1 }; // a = 1, b = 10
// Nested Object Destructuring
var nestedObject = { a: 1, b: { c: 2, d: 3 } };
var { a, b: { c, d } } = nestedObject; // a = 1, c = 2, d = 3
```

## Numeric Separators

Numeric Separators : Numeric separators are used to make large numbers more readable by allowing you to use underscores (`_`) as visual separators.

```js
// Numeric Separators Example
var largeNumber = 1_000_000; // 1 million
console.log(largeNumber); // 1000000
```

# DOM => Document Object Model

## DOM (Document Object Model)

DOM : The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

## Selecting Elements

### getElementById()

getElementById() : The getElementById() method returns the element that has the ID attribute with the specified value.

```js
document.getElementById("id");
```

### getElementsByClassName()

getElementsByClassName() : The getElementsByClassName() method returns a **_collection_** of all elements in the document with the specified class name.

```js
document.getElementsByClassName("class");
```

### getElementsByTagName()

getElementsByTagName() : The getElementsByTagName() method returns a **_collection_** of all elements in the document with the specified tag name.

```js
document.getElementsByTagName("tag");
```

### querySelector()

querySelector() : The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

```js
document.querySelector("selector");
```

### querySelectorAll()

querySelectorAll() : The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static **_NodeList object_**.

```js
document.querySelectorAll("selector");
```

> collection : A collection is an ordered set of elements that are accessible by index or by using the methods and properties of the collection.

> NodeList : A NodeList object is a collection of nodes, usually returned by properties such as **_Node.childNodes_** and methods such as **_document.querySelectorAll()_**.

## Accessing Elements

### innerHTML

innerHTML : The innerHTML property sets or returns the HTML content (inner HTML) of an element.

```js
document.getElementById("id").innerHTML = "Hello World";
```

### innerText

innerText : The innerText property sets or returns the text content of the specified node, and all its descendants.

```js
document.getElementById("id").innerText = "Hello World";
```

### textContent

textContent : The textContent property sets or returns the text content of the specified node, and all its descendants.

```js
document.getElementById("id").textContent = "Hello World";
```

### value

value : The value property sets or returns the value of the value attribute of a text field.

```js
document.getElementById("id").value = "Hello World";
```

### style

style : The style property sets or returns the style attribute of an element.

```js
document.getElementById("id").style.color = "red";
document.getElementById("id").style.fontSize = "25px";
document.getElementById("id").style.backgroundColor = "yellow";
```

### style.cssText

style.cssText : The cssText property sets or returns the inline style of an element (the CSS styles that are set directly on the element).

```js
document.getElementById("id").style.cssText = "color: red; font-size: 25px; background-color: yellow;";
```

### getComputedStyle()

getComputedStyle() : The getComputedStyle() method returns the computed style of an element, after applying active stylesheets and resolving any basic computation those values may contain.

Different from style : The getComputedStyle() method returns the computed style of an element, while the style property returns the inline style of an element.

```js
getComputedStyle(document.getElementById("id"));

getComputedStyle(document.getElementById("id")).color;

getComputedStyle(document.getElementById("id")).getPropertyValue("color");
```

### className

className : The className property sets or returns the value of the class attribute of an element.

```js
document.getElementById("id").className = "class";
```

### classList

classList : The classList property returns the class name(s) of an element, as a DOMTokenList object.

```js
document.getElementById("id").classList.add("class");
document.getElementById("id").classList.remove("class");
document.getElementById("id").classList.toggle("class");
document.getElementById("id").classList.contains("class");
```

### attributes

attributes : The attributes property returns a collection of all attributes of the specified element.

```js
document.getElementById("id").attributes;
```

### getAttribute()

getAttribute() : The getAttribute() method returns the value of the attribute with the specified name, of an element.

```js
document.getElementById("id").getAttribute("attribute");
```

### setAttribute()

setAttribute() : The setAttribute() method adds the specified attribute to an element, and gives it the specified value.

```js
document.getElementById("id").setAttribute("attribute", "value");
```

### removeAttribute()

removeAttribute() : The removeAttribute() method removes the specified attribute from an element.

```js
document.getElementById("id").removeAttribute("attribute");
```

### hasAttribute()

hasAttribute() : The hasAttribute() method returns true if an element has the specified attribute, otherwise false.

```js
document.getElementById("id").hasAttribute("attribute");
```

## Creating Elements

### createElement()

createElement() : The createElement() method creates an Element Node with the specified name.

```js
document.createElement("tag");

// Example:

var element = document.createElement("div");
element.innerHTML = "Hello World";
```

## Adding Elements

### appendChild()

appendChild() : The appendChild() method appends a node as the last child of a node.

```js
var newElement = document.createElement("tag");
document.getElementById("id").appendChild(newElement);

// Example:

var element = document.createElement("div");
element.innerHTML = "Hello World";
document.body.appendChild(element);
```

### append()

append() : The append() method appends a set of Node objects or DOMString objects to the parent element.

```js
document.getElementById("id").append("text", element, "text", element, ...);

// Example:

var element1 = document.createElement("div");

var element2 = document.createElement("div");

document.body.append("Hello World", element1, "Hello World", element2);
```

## Element.insertAdjacentHTML(position, text)
insertAdjacentHTML() : The insertAdjacentHTML() method parses the specified text as HTML and inserts the resulting nodes into the DOM tree at the specified position.

position : The position parameter specifies where to insert the HTML. It can be one of the following values:
- beforebegin : Before the element itself.
- afterbegin : Just inside the element, before its first child.
- beforeend : Just inside the element, after its last child.
- afterend : After the element itself.

```js
element.insertAdjacentHTML("position", "text");

// Example:
var element = document.createElement("div");
element.innerHTML = "Hello World";
document.body.appendChild(element);
element.insertAdjacentHTML("beforebegin", "<p>Before</p>");
element.insertAdjacentHTML("afterbegin", "<p>After Begin</p>");
```

## Removing Elements

### removeChild()

removeChild() : The removeChild() method removes a specified child node of the specified element.

```js
document.getElementById("id").removeChild(element);

// Example:

var element = document.createElement("div");
document.body.appendChild(element);

document.body.removeChild(element);
```

### remove()

remove() : The remove() method removes the specified element from the DOM.

```js
element.remove();

// Example:

var element = document.createElement("div");
document.body.appendChild(element);

element.remove();
```

## Replacing Elements

### replaceChild()

replaceChild() : The replaceChild() method replaces a child node within the specified (parent) node.

```js
document.getElementById("id").replaceChild(newElement, oldElement);

// Example:

var newElement = document.createElement("div");
newElement.innerHTML = "Hello World";

var oldElement = document.createElement("div");
oldElement.innerHTML = "Hello";

document.body.replaceChild(newElement, oldElement);
```

### replaceWith()

replaceWith() : The replaceWith() method replaces the specified element with another element or text.

```js
element.replaceWith(newElement);

// Example:

var newElement = document.createElement("div");
newElement.innerHTML = "Hello World";

var oldElement = document.createElement("div");
oldElement.innerHTML = "Hello";

oldElement.replaceWith(newElement);
```

## Events

### onclick

onclick : The onclick event occurs when the user clicks on an element.

```html
<button onclick="function()">Click Me</button>
```

### onkeypress

onkeypress : The onkeypress event occurs when the user presses a key (on the keyboard).

```html
<input type="text" onkeypress="function()" />
```

### onkeydown

onkeydown : The onkeydown event occurs when the user is pressing a key (on the keyboard).

```html
<input type="text" onkeydown="function()" />
```

### onkeyup

onkeyup : The onkeyup event occurs when the user releases a key (on the keyboard).

```html
<input type="text" onkeyup="function()" />
```

### onfocus

onfocus : The onfocus event occurs when an element gets focus.

```html
<input type="text" onfocus="function()" />
```

### onblur

onblur : The onblur event occurs when an element loses focus.

```html
<input type="text" onblur="function()" />
```

### ondblclick

ondblclick : The ondblclick event occurs when the user double-clicks on an element.

```html
<button ondblclick="function()">Double Click Me</button>
```

### onchange

onchange : The onchange event occurs when the value of an element has been changed.

Tip : The onchange event is often used in combination with validation of input fields.

```html
<input type="text" onchange="function()" />
```

### oninput

fff

### onsubmit

onsbumit : The onsubmit event occurs when a form is submitted.

```html
<form id="form">
  <input type="text" placeholder="Username" />
  <input type="password" placeholder="Password" />
  <input type="submit" value="Submit" />
</form>
```

```js
document.getElementById("form").addEventListener("submit", function (params) {
  console.log("Submited");
});
```

### oncontextmenu

oncontextmenu : The oncontextmenu event occurs when the user right-clicks on an element to open a context menu.

```html
<div oncontextmenu="function()">Right Click Me</div>
```

Tip : Prevent the context menu from opening

```html
<body oncontextmenu="return false">
  ...
</body>
```

### oncopy

oncopy : The oncopy event occurs when the user copies the content of an element.

```html
<div oncopy="function()">Copy Me</div>
```

can preventDefault() : The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

```js
document.getElementById("id").addEventListener("event", function (event) {
  event.preventDefault();
});
```

### oncut

oncut : The oncut event occurs when the user cuts the content of an element.

```html
<div oncut="function()">Cut Me</div>
```

can preventDefault() : The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

```js
document.getElementById("id").addEventListener("event", function (event) {
  event.preventDefault();
});
```

### onpaste

onpaste : The onpaste event occurs when the user pastes some content in an element.

```html
<div onpaste="function()">Paste Me</div>
```

can preventDefault() : The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

```js
document.getElementById("id").addEventListener("event", function (event) {
  event.preventDefault();
});
```

### onload & DOMContentLoaded

onload : The onload event occurs when an object has been loaded.

```html
<img src="image.jpg" onload="function()" />

<body onload="function()">
  ...
</body>
// The onload event is mostly written for the body tag.
```

```js
window.addEventListener("load", function () {
  console.log("Page Loaded");
});
```

DOMContentLoaded : The DOMContentLoaded event occurs when the HTML document has been loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

```js
window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded");
});
```

### Different Between onload & DOMContentLoaded

- The onload event occurs when an object has been loaded.
- The DOMContentLoaded event occurs when the HTML document has been loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

### onunload

onunload : The onunload event occurs once a page has unloaded (or the browser window has been closed).

```html
<body onunload="function()">
  ...
</body>
```

```js
window.addEventListener("unload", function () {
  console.log("Page Unloaded");
});
```

### onbeforeunload

onbeforeunload : The onbeforeunload event occurs before the document is about to be unloaded.

```html
<body onbeforeunload="function()">
  ...
</body>
```

```js
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = "";
});
```

### onselect

onselect : The onselect event occurs after some text has been selected in an element.

Just for input, textarea, and text fields.

```html
<input type="text" onselect="function()" />
```

### onscroll

onscroll : The onscroll event occurs when an element's scrollbar is being scrolled.

```html
<div onscroll="function()">Scroll Me</div>

<body onscroll="function()">
  ...
</body>
```

```js
document.addEventListener("scroll", function () {
  console.log("Scrolled");
});
```

document.documentElement.scrollTop : The scrollTop property sets or returns the number of pixels an element's content is scrolled vertically.

```js
document.documentElement.scrollTop;
```

document.documentElement.scrollLeft : The scrollLeft property sets or returns the number of pixels an element's content is scrolled horizontally.

```js
document.documentElement.scrollLeft;
```

scrollTo(positionX, positionY) : The scrollTo() method scrolls the document to the specified coordinates.

```js
window.scrollTo(0, 0);
```

scrollBy(x, y) : The scrollBy() method scrolls the document by the specified number of pixels.

```js
window.scrollBy(0, 100);
```

### Touch Events

- ontouchstart : The ontouchstart event occurs when a finger is placed on a touch screen.

```html
<div ontouchstart="function()">Touch Me</div>
```

- ontouchend : The ontouchend event occurs when a finger is removed from a touch screen.

```html
<div ontouchend="function()">Touch Me</div>
```

- ontouchmove : The ontouchmove event occurs when a finger is dragged across the screen.

```html
<div ontouchmove="function()">Touch Me</div>
```

- ontouchcancel : The ontouchcancel event occurs when a touch event is interrupted.

```html
<div ontouchcancel="function()">Touch Me</div>
```

### Drag & Drop Events

draggable attribute : The draggable attribute specifies whether an element is draggable or not.

```html
<div draggable="true" ondrag="function()" ondrop="function()">Drag Me</div>
```

event.transfer : The dataTransfer property of the drag event contains the data that is being dragged during a drag-and-drop operation.

```js
event.dataTransfer.setData("text/plain", data);
```

```js
// for element
function dragStartHandler (event) {
    console.log('Drag');

    event.dataTransfer.setData('elemId', event.target.id)

}
// for drop target
function dragOverHandler (event) {
    event.preventDefault()

}
// for drop target
function dropHandler (event) {
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)

    event.target.append(targetElem)

}
```

**Dragged => ondragstart => ondrag => ondragend**

**ondragstart :** The ondragstart event occurs when the user starts to drag an element.

**ondrag :** The ondrag event occurs when an element is being dragged.

**ondragend :** The ondragend event occurs when the user has finished dragging an element.


**Dropped => ondragenter => ondragover => ondragleave => ondrop**

**ondragenter :** The ondragenter event occurs when the dragged element enters a valid drop target.

**ondragover :** The ondragover event occurs when the dragged element is being dragged over a valid drop target.

**ondragleave :** The ondragleave event occurs when the dragged element leaves a valid drop target.

**ondrop :** The ondrop event occurs when the dragged element is dropped on a valid drop target.

```js
// for element
function dragStartHandler (event) {
    console.log('Drag');

    event.dataTransfer.setData('elemId', event.target.id)

}

// for drop target
function dragOverHandler (event) {
    event.preventDefault()

}

// for drop target
function dropHandler (event) {
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)

    event.target.append(targetElem)

}
```

Example:

```html
<h1 id="react" draggable="true" ondragstart="dragStartHandler(event)">
  React Js
</h1>

<h1 id="vue" draggable="true" ondragstart="dragStartHandler(event)">Vue Js</h1>

<h1 id="angular" draggable="true" ondragstart="dragStartHandler(event)">
  Angular Js
</h1>

<div
  class="drop"
  ondrop="dropHandler(event)"
  ondragover="dragOverHandler(event)"
></div>
```

```js
function dragStartHandler (event) {
    console.log('Drag');

    event.dataTransfer.setData('elemId', event.target.id)

}

function dropHandler (event) {
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)

    event.target.append(targetElem)

}

function dragOverHandler (event) {
    event.preventDefault()
    // console.log('DragOver');
}
```

### addEventListener(event, function, options)

addEventListener() : The addEventListener() method attaches an event handler to the specified element.

```js
document.getElementById("id").addEventListener("event", function);
```

> Options : The options parameter is an optional object that specifies characteristics about the event listener. It can have the following properties:
```js
element.addEventListener("event", function, {
  capture: true, // Boolean value indicating whether the event should be captured or not.
  once: true, // Boolean value indicating whether the event should be executed at most once after being added.
  passive: true, // Boolean value indicating that the function will never call preventDefault().
});
```

- once : The once property is a Boolean value that indicates whether the event handler should be invoked at most once after being added. If true, the event handler will be removed automatically after its first invocation.

- capture : The capture property is a Boolean value that indicates whether the event handler should be invoked during the capture phase or the bubbling phase. If true, the event handler will be invoked during the capture phase.

### removeEventListener()

removeEventListener() : The removeEventListener() method removes an event handler that has been attached with the addEventListener() method.

```js
document.getElementById("id").removeEventListener("event", function);

// Example :

document.getElementById("id").addEventListener("click", function () {
  console.log("Hello World");
});

document.getElementById("id").removeEventListener("click", function () {
  console.log("Hello World");
});
```

### The Third Way To Set The Event

```js
document.getElementById("id").onclick = functionName;

document.getElementById("id").onclick = function () {
  console.log("Hello World");
};
```

### Animation Events

- onanimationstart

fff

- onanimationiteration

fff

- onanimationend

fff

### onresize

onresize : The onresize event occurs when the document view (window) has been resized.

```js
window.onresize = function () {
  console.log(`width: ${window.innerWidth} | height: ${window.innerHeight}`);
};
```

### Mouse Events

- onmousedown : The onmousedown event occurs when the user presses a mouse button.

- onmouseup : The onmouseup event occurs when the user releases a mouse button.

- onmousemove : The onmousemove event occurs when the user moves the mouse pointer.

- onmouseenter : The onmouseenter event occurs when the mouse pointer is moved onto an element.

- onmouseleave : The onmouseleave event occurs when the mouse pointer is moved out of an element.

- onmouseover : The onmouseover event occurs when the mouse pointer is moved onto an element.

- onmouseout : The onmouseout event occurs when the mouse pointer is moved out of an element.

### event.cancelBubble

event.cancelBubble : The cancelBubble property is used to stop the bubbling of an event to parent elements, preventing any parent event handlers from being executed.

```js
document.getElementById("id").addEventListener("click", function (event) {
  event.cancelBubble = true;
});
```

### event.preventDefault()

event.preventDefault() : The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

Tip : For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.

Tip : cancelable : A Boolean value indicating whether the event is cancelable.

```js
document.getElementById("id").addEventListener("click", function (event) {
  event.preventDefault();
});
```

### event.target

event.target : The target property of the Event interface is a reference to the object that dispatched the event.

```js
document.getElementById("id").addEventListener("click", function (event) {
  console.log(event.target);
}); // The element that was clicked
```

### event.pageX & event.pageY

event.pageX & event.pageY : The pageX and pageY properties return the X and Y coordinates of the mouse pointer when an event is triggered.

```js
document.getElementById("id").addEventListener("click", function (event) {
  console.log(event.pageX, event.pageY);
});
```

## Node

Node : The Node interface is a key part of the DOM. It's an abstract base class upon which many other DOM API objects are based, thus letting those object types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way.

### nodeType

nodeType : The nodeType property returns the type of the specified node.

```js
document.getElementById("id").nodeType;
```

### nodeName

nodeName : The nodeName property returns the name of the specified node.

```js
document.getElementById("id").nodeName;
```

### nodeValue

nodeValue : The nodeValue property returns the value of the specified node.

```js
document.getElementById("id").nodeValue;
```

## Navigation

### parentNode

parentNode : The parentNode property returns the parent node of the specified node, as a Node object.

```js
document.getElementById("id").parentNode;
```

### parentElement

parentElement : The parentElement property returns the parent element of the specified element, as a Node object.

```js
document.getElementById("id").parentElement;
```

### previousElementSibling

previousElementSibling : The previousElementSibling property returns the previous element of the specified element, as a Node object.

```js
document.getElementById("id").previousElementSibling;
```

### nextElementSibling

nextElementSibling : The nextElementSibling property returns the next element of the specified element, as a Node object.

```js
document.getElementById("id").nextElementSibling;
```

### previousSibling

previousSibling : The previousSibling property returns the previous node of the specified node, as a Node object.

Different previousElementSibling : The previousElementSibling property returns the previous element of the specified element, as a Node object.

```js
document.getElementById("id").previousSibling;
```

### nextSibling

nextSibling : The nextSibling property returns the next node of the specified node, as a Node object.

Different nextElementSibling : The nextElementSibling property returns the next element of the specified element, as a Node object.

```js
document.getElementById("id").nextSibling;
```

### childElementCount

childElementCount : The childElementCount property returns the number of child elements an element has.

```js
document.getElementById("id").childElementCount;
```

Example :

```html
<div id="parent">
  <div id="child1">Child 1</div>
  <div id="child2">Child 2</div>
  <div id="child3">Child 3</div>
</div>
```

```js
var parent = document.getElementById("parent");

console.log(parent.childElementCount); // 3
```

### children

children : The children property returns a collection of an element's child elements, as an HTMLCollection object.

```js
document.getElementById("id").children;

// Output:
// HTMLCollection
```

Example :

```html
<div id="parent">
  <div id="child1">Child 1</div>
  <div id="child2">Child 2</div>
  <div id="child3">Child 3</div>
</div>
```

```js
var parent = document.getElementById("parent");

console.log(parent.children);
// Output:
// HTMLCollection [div#child1, div#child2, div#child3]
```

### childNodes

childNodes : The childNodes property returns a collection of a node's child nodes, as a NodeList object.

```js
document.getElementById("id").childNodes;

// Output:
// NodeList
```

Example :

```html
<div id="parent">
  <div id="child1">Child 1</div>
  <div id="child2">Child 2</div>
  <div id="child3">Child 3</div>
</div>
```

```js
var parent = document.getElementById("parent");

console.log(parent.childNodes);
// Output:
// NodeList [text, div#child1, text, div#child2, text, div#child3, text]
```

### hasChildNodes()

hasChildNodes() : The hasChildNodes() method returns true if an element has any child nodes, otherwise false.

```js
document.getElementById("id").hasChildNodes();
```

Example :

```html
<div id="parent">
  <div id="child1">Child 1</div>
  <div id="child2">Child 2</div>
  <div id="child3">Child 3</div>
</div>
```

```js
var parent = document.getElementById("parent");

console.log(parent.hasChildNodes()); // true
```

### firstElementChild & lastElementChild

firstElementChild : The firstElementChild property returns the first child element of the specified element.

lastElementChild : The lastElementChild property returns the last child element of the specified element.

```js
document.getElementById("id").firstElementChild;
document.getElementById("id").lastElementChild;
```

### firstChild & lastChild

firstChild : The firstChild property returns the first child node of the specified node.

lastChild : The lastChild property returns the last child node of the specified node.

Different firstElementChild & firstChild : The firstElementChild property returns the first child element of the specified element. The firstChild property returns the first child node of the specified node.

Different lastElementChild & lastChild : The lastElementChild property returns the last child element of the specified element. The lastChild property returns the last child node of the specified node.

```js
document.getElementById("id").firstChild;
document.getElementById("id").lastChild;
```

## Data Set

dataset : The dataset property allows access, both in reading and writing mode, to all the custom data attributes (data-\*) set on the element.

```html
<div id="id" data-name="value"></div>
```

```js
document.getElementById("id").dataset.name; // value
document.getElementById("id").dataset.name = "newValue"; // newValue
```

```js
document.getElementById("id").dataset; // DOMStringMap {name: "value"}
```

## Audio & Video

### Audio

```html
<audio id="audio" src="audio.mp3" controls></audio>
```

```js
var audio = document.getElementById("audio");

// Play the audio
audio.play();

// Pause the audio
audio.pause();

// Stop the audio
audio.pause();
audio.currentTime = 0; // Reset the audio to the beginning

// Get the duration of the audio (in seconds)
audio.duration;

// Get the current time of the audio (in seconds)
audio.currentTime;

// Set the current time of the audio (in seconds)
audio.currentTime = 10; // Set the audio to start at 10 seconds

// Get the playback rate of the audio
audio.playBackRate; // Get the playback rate of the audio (1.0 is normal speed)

// Set the playback rate of the audio
audio.playBackRate = 1.5; // Set the playback rate of the audio to 1.5x speed
audio.playBackRate = 0.5; // Set the playback rate of the audio to 0.5x speed

// Get the volume of the audio (0.0 to 1.0)
audio.volume; // Get the volume of the audio (0.0 to 1.0)

// Set the volume of the audio (0.0 to 1.0)
audio.volume = 0.5; // Set the volume of the audio to 50%
audio.volume = 0.0; // Set the volume of the audio to 0% (muted)
audio.volume = 1.0; // Set the volume of the audio to 100%
```

### Video

```html
<video id="video" src="video.mp4" controls></video>
```

```js
var video = document.getElementById("video");

// Play the video
video.play();

// Pause the video
video.pause();

// Stop the audio
video.pause();
video.currentTime = 0; // Reset the video to the beginning

// Get the duration of the audio (in seconds)
video.duration;

// Get the current time of the audio (in seconds)
video.currentTime;

// Set the current time of the audio (in seconds)
video.currentTime = 10; // Set the video to start at 10 seconds

// Get the playback rate of the audio
video.playBackRate; // Get the playback rate of the video (1.0 is normal speed)

// Set the playback rate of the audio
video.playBackRate = 1.5; // Set the playback rate of the video to 1.5x speed
video.playBackRate = 0.5; // Set the playback rate of the video to 0.5x speed

// Get the volume of the audio (0.0 to 1.0)
video.volume; // Get the volume of the video (0.0 to 1.0)

// Set the volume of the audio (0.0 to 1.0)
video.volume = 0.5; // Set the volume of the video to 50%
video.volume = 0.0; // Set the volume of the video to 0% (muted)
video.volume = 1.0; // Set the volume of the video to 100%
```

## Variables In CSS

fff

```css
:root {
    --color: green
}
```

```js
document.documentElement.style.setProperty("--color", "red")

document.documentElement.style.getProperty("--color") // red
```

## Fragment

Fragment : A DocumentFragment is a minimal document object that has no parent. It is a lightweight version of a Document that stores a portion of the document tree.

```js
var container = document.getElementById("container");
var fragment = document.createDocumentFragment();

fragment.appendChild(document.createElement("div"));
fragment.appendChild(document.createElement("p"));
fragment.appendChild(document.createElement("span"));
fragment.appendChild(document.createElement("h1"));

container.appendChild(fragment);
```

output :

```html
<div id="container">
  <div></div>
  <p></p>
  <span></span>
  <h1></h1>
</div>
```

# BOM => Browser Object Model

## BOM (Browser Object Model)

BOM : The Browser Object Model (BOM) is a set of objects that allow JavaScript to interact with the browser. It provides methods and properties to manipulate the browser window, history, location, and navigator.

## Width & Height

window.innerWidth : The innerWidth property returns the width of the window's content area (viewport) in pixels.

```js
window.innerWidth; // 1920
```

window.innerHeight : The innerHeight property returns the height of the window's content area (viewport) in pixels.

```js
window.innerHeight; // 1080
```

window.outerWidth : The outerWidth property returns the width of the window's content area (viewport) in pixels, including the window's borders and scrollbars.

```js
window.outerWidth; // 1920
```

window.outerHeight : The outerHeight property returns the height of the window's content area (viewport) in pixels, including the window's borders and scrollbars.

```js
window.outerHeight; // 1080
```

window.screenTop : The screenTop property returns the distance of the current window from the top edge of the screen in pixels.

```js
window.screenTop; // 0
```

window.screenLeft : The screenLeft property returns the distance of the current window from the left edge of the screen in pixels.

```js
window.screenLeft; // 0
```

document.documentElement.clientWidth : The clientWidth property returns the width of the element's content area in pixels, including padding but excluding borders, scrollbars, and margins.

```js
document.documentElement.clientWidth; // 1920
```

document.documentElement.clientHeight : The clientHeight property returns the height of the element's content area in pixels, including padding but excluding borders, scrollbars, and margins.

```js
document.documentElement.clientHeight; // 1080
```

## Screen Object
window.screen : The screen object contains information about the user's screen, such as its width, height, and color depth.

```js
window.screen.width; // width of the screen in pixels => 1920
window.screen.height; // height of the screen in pixels => 1080
window.screen.availWidth; // available width of the screen in pixels => 1920
window.screen.availHeight; // available height of the screen in pixels => 1080
window.screen.colorDepth; // color depth of the screen in bits => 24
window.screen.pixelDepth; // pixel depth of the screen in bits => 24
```

## History Object
window.history : The history object contains the URLs visited by the user in the current browser session.

```js
window.history.length; // number of URLs in the history stack => 10
window.history.back(); // go back to the previous URL
window.history.forward(); // go forward to the next URL
window.history.go(-1); // go back to the previous URL
window.history.go(1); // go forward to the next URL
window.history.go(0); // reload the current URL
```

## Location Object
window.location : The location object contains information about the current URL of the document.

```js
window.location.href; // current URL of the document => "https://www.example.com"
window.location.protocol; // protocol of the URL => "https:"
window.location.host; // host of the URL => "www.example.com"
window.location.hostname; // hostname of the URL => "www.example.com"
window.location.port; // port of the URL => "80"
window.location.pathname; // pathname of the URL => "/path/to/file.html"
window.location.search; // query string of the URL => "?query=string"
window.location.hash; // anchor of the URL => "#anchor"
window.location.reload(); // reload the current URL
window.location.replace("https://www.example.com"); // replace the current URL with a new URL
window.location.assign("https://www.example.com"); // navigate to a new URL
window.location.href = "https://www.example.com"; // navigate to a new URL
```

> URLSearchParams : The URLSearchParams interface defines utility methods to work with the query string of a URL.

```js

const url = new URL("https://www.example.com?param1=value1&param2=value2");

location.search.slice(1).split("=")[1]; // get the value of the first query parameter (Bad Way)

// OR

const params = new URLSearchParams(location.search);

params.get("param1"); // get the value of the first query parameter (Good Way) => value1
params.get("param2"); // get the value of the second query parameter => value2
```

## Connection Events
ononline : The online event occurs when the browser goes online.

```js
window.addEventListener("online", function () {
  console.log("Browser is online");
});
```

onoffline : The offline event occurs when the browser goes offline.

```js
window.addEventListener("offline", function () {
  console.log("Browser is offline");
});
```
