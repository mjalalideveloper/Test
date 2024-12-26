<style>
    code {
        font-family: "Courier New";
        font-size: 120%
    }

</style>

<h1 align="center">
  <br>
  <a href="https://html.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png" alt="Html"></a>
  <br>
  HTML
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

## Logical Operators => ||
- - -

```js
true || true // true
true || false // true
true || false // true
false || false // false
```