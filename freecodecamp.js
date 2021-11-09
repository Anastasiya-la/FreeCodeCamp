// Comment Your JavaScript Code

// comment in-line
/*this is my way*/

// Declare JavaScript Variables
var myName;

//Storing Values with the Assignment Operator
var a;
a = 7;

//Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

// initialize variable
var a = 9;

//string var 
var myFirstName = 'Anastasiya';
var myLastName = 'Rabetskaya';

//  Uninitialized Variables
var a = 5;
var b = 10;
var c = 'I am a';
a = a + 1;
b = b + 5;
c = c + " String!";

// case sensitive
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// let vs var 
let catName = "Oliver";
let catSound = "Meow!";

//  let vs const
const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact);

// two numbers 
const sum = 10 + 10;

// subtraction 
const difference = 45 - 33;

// multiplication 
const product = 8 * 10;

// division
const quotient = 66 / 33;

// increment
let myVar = 87;
myVar++;

// decrement
let myVar = 11;
myVar--;

// decimal 
const ourDecimal = 5.7;
const myDecimal = 6.7;

//multiply decimal
const product = 2.0 * 2.5;

// divid decimal 
const quotient = 4.4 / 2.0;

// find reminder
const remainder = 11 % 3;

// operator += 
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// operator -=
let a = 11;
let b = 9;
let c = 3;


a -= 6;
b -= 15;
c -= 1;

//operator *= 
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// operator /= 
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

// quotes 
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

// single qoutes 
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// escape 
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

// concatenating
const myStr = "This is the start. " + "This is the end."; 

// concatenating with += 
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';

//variable + string 
const myName = "Anstasiya";
const myStr = "My name is " + myName + " and I am well!";

// Appending Variables to Strings
const someAdjective = "fantastic!";
let myStr = "Learning to code is ";
myStr += someAdjective;

// length of string 
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// bracket notation in string 
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 

// change string 
let myStr = "Jello World";
myStr = 'Hello World'; 

// third letter 
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];

// last charachter 
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1]; 

// lasttotwocharachter 
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; 

// word blanks 
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "Wow " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " stop!";

// array 
const myArray = ['cherry', 13];

//nested array 
const myArray = [['left', 3],['right', 5]];

// array with indexes 
const myArray = [50, 60, 70];
const myData = myArray[0];

// modify array 
const myArray = [18, 64, 99];
myArray[0] = 45;

//// Multi-Dimensional Arrays with indexes 
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

// push() 
const myArray = [["John", 23], ["cat", 2]];
myArray.push(['dog', 3]);

// pop() 
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// shift() 
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

// unshift() 
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(['Paul', 35]);

// shopping list
const myList = [['Chocolate Bar', 15], ['Cake', 20], ['Manga', 12], ['Apple', 3], ['Note', 1]];

// create function 
function reusableFunction(){
    console.log('Hi World');
  }
  reusableFunction();

// function with arguments 
function functionWithArgs(num1, num2){
    console.log(num1 + num2);
}
functionWithArgs(20, 30);

// return value from function 
function timesFive(num){
    return num * 5;
  }

// Global scope 
let myGlobal = 10;
let oopsGlobal;

function fun1() {
oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// local scope 
function myLocalScope() {
    let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);

// global vs local scope
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = 'sweater';
  return outerWear;
}

myOutfit();

// undefined value in function
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum = sum + 5;
}

addThree();
addFive();

// assingment with function value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);



