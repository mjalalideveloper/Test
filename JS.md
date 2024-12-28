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

name(); // undefined

// Default values:

function name(params = "Test Text") {
    alert(params);
}

name(); // Test Text
```
