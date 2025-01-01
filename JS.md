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

## Js

> Js is case-sensitive

## Using JavaScript In HTML
- - -

```html
<!-- ... -->
<body>

    <!-- ... -->

    <!-- Internal -->
    <script>
        alert("Hello World")
    </script>

    <!-- External -->
    <script src="script.js"></script>

</body>
```

## Variables
- - -

```js
var variableName = "Value"
```

## Datatypes
- - -

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

## Comment
- - -

```js
// This Is A Comment

/*
This Is A Comment
*/
```

## Console
- - -

## Alert & Prompt
- - -

## Convert Datatype
- - -

```js
// Number
Number("25") // 25 -> typeof : number

+"25" // 25 -> typeof : number

Number("Hello World") // NaN -> Not A Number

// String
String(25) // "25" -> typeof : string

String(true) // "true" -> typeof : string

// Boolean
Boolean(1) // true -> typeof : boolean
Boolean(25) // true -> typeof : boolean
Boolean(0) // false -> typeof : boolean
Boolean("Hello World") // true -> typeof : boolean
Boolean(" ") // true -> typeof : boolean
Boolean("0") // true -> typeof : boolean
Boolean("") // false -> typeof : boolean
```

## Logical Operators
- - -

```js
3 + 5 // 8

5 - 3 // 2

3 * 5 // 15

10 / 5 // 2

5 ** 3 // 125

5 % 3 // 2
```

## Concat Action On Strings

```js
"Hello" + "World" // HelloWorld
"Hello" + " " + "World" // Hello World
"Hello World " + 25 // Hello World 25
"12" + 4 // 124
"12" / 4 // 3


// \n : New Line

"Hello" + "\n" + "World"
// Hello
// World

// \" , \' : " , '

"Hello \"World\"" + " " + "Hello \'World\'" // Hello "World" Hello 'World'
```

## NaN(Not a Number)
- - -

```js
"Hello World" + 25 // Hello World25
"12" + 4 // 124
"12" / 4 // 3
"12" - 4 // 3
"12" * 4 // 3
"Hello World" - 25 // NaN
"Hello World" * 25 // NaN
"Hello World" / 25 // NaN
25 / 0 // Nan

// Typeof NaN -> Number
typeof NaN // number

// isNaN Method
isNaN("HW" - 25) // true
isNaN("HW" + 25) // true
```

## If & Else
- - -

```js
if (Boolean) { // true
    // Code
} else { // false
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

## Ternary Condition
- - -

```js
(Boolean) ? "If True" : "If False"

// example :
(5 > 2) ? "Yes" : "No" // Yes
(5 < 2) ? "Yes" : "No" // No
```

## Logical Operators => OR =>||
- - -

```js
true || true // true
true || false // true
false || true // true
false || false // false
```

## Logical Operators => AND => &&
- - -

```js
true && true // true
true && false // false
false && true // false
false && false // false
```

## Logical Operators => NOT => !
- - -

```js
!true // false
!false // true
```

## Switch Case
- - -

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

+ The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
+ If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
+ If no case is matched then the default code is executed (if it exists).

## Function
- - -

### Function Declaration
```js
function name(parameter1, parameter2, ... parameterN) {
 // Code
}
```

### Function Expressions
```js
var name = function(parameter1, parameter2, ... parameterN) {
    // Code
}
```

### Call Function
```js
name()
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

    alert("Test") // no alert (after return)
}

name(); // "Hello World" (no alert)

var result = name(); // "Hello World" (no alert)

alert(result); // alert("Hello World"); (no return)
```

## String
- - -

### Strings Syntax

```js
var singleQuote= 'Hello World'; // single quotes

var doubleQuote = "Hello World"; // double quotes

var templateLiteral = `Hello World`; // backticks (template literals)
```

### Indexing

```js
var text = "Hello"; // 5 characters

text[0] // H (index 0)
text[1] // e (index 1)
text[2] // l (index 2)
text[3] // l (index 3)
text[4] // o (index 4)

text[5] // undefined (index 5)

text[-1] // undefined (index -1)
```


### String Properties

> length

```js
var text = "Hello World";

text.length // 11 (characters) (index 0 - 10)

text[text.length - 1] // d (index 10)

text[text.length] // undefined (index 11)

text[text.length - 1] // d (index 10)
```

### String Methods

> chaeAt(index)

Returns the character at the specified index (position)

```js
var text = "Hello World";

text[0] // H (index 0) (indexing)

text.charAt(0) // H (index 0) (charAt() method)
```

> charCodeAt(index)

Returns the Unicode of the character at the specified index (position)

```js
var text = "Hello World";

text.charCodeAt(0) // 72 (index 0) (ASCII code)
```

> concat(string)

Returns a new string that is this string joined with string(s) provided as arguments

```js
var text = "Hello";

text.concat(" World") // Hello World
```

> trim()

Removes whitespace from both ends of a string

```js
var text = "      Hello World      ";

text // "      Hello World      "

text.trim() // "Hello World"
```

> toLowerCase()

Returns the calling string value converted to lowercase

```js
var text = "Hello World";

text.toLowerCase() // hello world
```

> toUpperCase()

Returns the calling string value converted to uppercase

```js
var text = "Hello World";

text.toUpperCase() // HELLO WORLD
```

> search(string)

Searches a string for a specified value and returns the position of the match

```js
var text = "Hello World";

text.search("World") // 6 (index)

text.search("Worlds") // -1 (not found)

text.search("world") // -1 (not found) (case sensitive)
```

> indexOf(string)

Returns the position of the first found occurrence of a specified value in a string

```js
var text = "Hello World";

text.indexOf("World") // 6 (index)

text.indexOf("Worlds") // -1 (not found)

text.indexOf("world") // -1 (not found) (case sensitive)
```

> includes(string)

Returns true if a string contains a specified value, otherwise false

```js
var text = "Hello World";

text.includes("World") // true

text.includes("Worlds") // false

text.includes("world") // false (case sensitive)
```

> slice(start, end)

Extracts a part of a string and returns a new string

```js
var text = "Hello World";

text.slice(0, 5) // Hello (index 0 - 4)

text.slice(6, 11) // World (index 6 - 10)

text.slice(6) // World (index 6 - end)

text.slice(-5) // World (index -5 - end)
```

> substr(start, length)

Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

```js
var text = "Hello World";

text.substr(0, 5) // Hello (index 0 - 4)

text.substr(6, 5) // World (index 6 - 10)

text.substr(6) // World (index 6 - end)

text.substr(-5) // World (index -5 - end)
```

> substring(start, end)

Extracts the characters from a string, between two specified indices

```js
var text = "Hello World";

text.substring(0, 5) // Hello (index 0 - 4)

text.substring(6, 11) // World (index 6 - 10)

text.substring(6) // World (index 6 - end)

text.substring(-5) // Hello World (index 0 - end)
```

## Math Object

```js
Math.PI // 3.141592653589793 (PI)

Math.round(4.7) // 5 (rounds to the nearest integer)
Math.round(4.4) // 4 (rounds to the nearest integer)

Math.pow(8, 2) // 64 (8^2)

Math.sqrt(64) // 8 (square root of 64)

Math.abs(-4.7) // 4.7 (absolute value)

Math.ceil(4.4) // 5 (rounds up to the nearest integer)
Math.floor(4.7) // 4 (rounds down to the nearest integer)
Math.trunc(4.7) // 4 (removes the decimal part)

Math.min(0, 150, 30, 20, -8, -200) // -200 (returns the number with the lowest value)
Math.max(0, 150, 30, 20, -8, -200) // 150 (returns the number with the highest value)

Math.random() // 0.123456789 (returns a random number between 0 and 1)

Math.floor(Math.random() * 10) // 0 - 9 (returns a random integer from 0 to 9)

Math.floor(Math.random() * 10) + 1 // 1 - 10 (returns a random integer from 1 to 10)
```

## Assignment Operators

```js
var num = 10;

num += 5; // 15 (num = num + 5)

num -= 5; // 5 (num = num - 5)

num *= 5; // 50 (num = num * 5)

num /= 5; // 2 (num = num / 5)

num %= 5; // 0 (num = num % 5)

num **= 5; // 100000 (num = num ** 5)

num++; // 11 (num = num + 1) (increment)
++num; // 12 (num = num + 1) (increment)

num--; // 11 (num = num - 1) (decrement)
--num; // 10 (num = num - 1) (decrement)
```

> **Tip:**

The difference between x++ and ++x

+ num++ (post-increment): Returns the current value of num first, then increments num by one.

+ ++num (pre-increment): Increments num by one first, then returns the new value of num.

```js
let num = 5;

console.log(num++); // Output: 5
console.log(num);   // Output: 6

num = 5;

console.log(++num); // Output: 6
console.log(num);   // Output: 6
```

## Comparison Operators

```js
== // equal to (only value)
=== // equal value and equal type (strict)
!= // not equal to (only value)
!== // not equal value or not equal type (strict)
> // greater than
< // less than
>= // greater than or equal to
<= // less than or equal to

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
            average += (+input);
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
    if (i % 2 == 0) {console.log(i);}
    i++;
}

// Output:
// 0
// 2
// 4
// ...
// 98
```
