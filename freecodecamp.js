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

// stand in line
function nextInLine(arr, item) {
    arr.push(item);
   
    return  arr.shift(0);
  }
  
  const testArr = [1, 2, 3, 4, 5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

// boolean values
function welcomeToBooleans() {
    return true; 
  }

// if
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
      return 'Yes, that was true';
    } else {
    return 'No, that was false';
    }
  }

// equality operator
function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

// Strict Equality Operator
function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

// different values
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

// !=
function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

// !==
function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

// operator >
function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
  
    if (val  > 10) { 
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

// >=
function testGreaterOrEqual(val) {
    if (val >= 20) { 
      return "20 or Over";
    }
  
    if (val  >= 10 ){  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

// <
function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) { 
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

// <=
function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

// logical and operator
function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {
        return "Yes";
      }
    return "No";
  }
  
  testLogicalAnd(10);

// logical or operator
function testLogicalOr(val) {

    if (val < 10 || val > 20) {
      return "Outside";
    }
    return "Inside";
  }
  
  testLogicalOr(15);

// else statement
function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
    return result;
  }
  
  testElse(4);

// else if statement
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
  }
    }

    
// order in else if
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    }
     else if (val < 10) {
      return "Less than 10";
      } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);

// Chaining If Else
function testSize(num) {
    if(num < 5){
      return 'Tiny';
    } else if(num < 10){
      return 'Small';
    } else if(num < 15){
      return 'Medium';
    } else if(num < 20){
      return 'Large';
    } else if(num >= 20){
      return 'Huge';
    } else {
      return "Change Me";
    }
    }
    
    testSize(7);

// Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

if(strokes === 1){
  return 'Hole-in-one!';
} else if(strokes <= par - 2){
  return 'Eagle';
} else if(strokes === par - 1){
  return 'Birdie';
} else if(strokes === par){
  return 'Par';
} else if(strokes === par + 1){
  return 'Bogey';
} else if(strokes === par + 2){
  return 'Double Bogey';
} else if(strokes >= par + 3){
  return 'Go Home!';
} 
}

golfScore(5, 4);


// switch
function caseInSwitch(val) {
    let answer = "";
  switch(val){
   case 1:
     answer = 'alpha';
     break;
   case 2:
     answer = 'beta';
     break;
   case 3:
     answer =  'gamma';
     break;
   case 4:
     answer = 'delta';
     break;
  }
    return answer;
  }
  
  caseInSwitch(1);

  
// default option in switch
function switchOfStuff(val) {
    let answer = "";
    switch(val){
      case 'a':
      answer = 'apple';
      break;
      case 'b':
      answer = 'bird';
      break;
      case 'c':
      answer = 'cat';
      break;
      default:
      answer = 'stuff';
      break;
    }
  
  
    return answer;
  }
  
// multiple identical options
function sequentialSizes(val) {
    let answer = "";
    switch(val){
      case 1:
      case 2:
      case 3:
      answer = 'Low';
      break;
      case 4:
      case 5:
      case 6:
      answer = 'Mid';
      break;
      case 7:
      case 8:
      case 9:
      answer = 'High';
      break;
    }
  }

// Replacing If Else with switch
function chainToSwitch(val) {
    let answer = "";
    switch(val){
      case 'bob':
      answer = "Marley";
      break;
      case 42:
      answer = "The Answer";
      break;
      case 1:
      answer = "There is no #1";
      break;
      case 99:
      answer = "Missed me by this much!";
      break;
      case 7:
      answer = "Ate Nine";
      break;
    }
    return answer;
  }

  
//Returning Boolean Values from Functions
function isLess(a, b) {
    return a < b;
  }
  
  isLess(10, 15);
  
// return early
function abTest(a, b) {
    if (a < 0 || b < 0){
      return;
    }
    
    
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    
    abTest(2,2);

//counting cards
let count = 0;

function cc(card) {
 switch(card){
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
   count++;
   break;
   case 7:
   case 8:
   case 9:
   count += 0;
   break;
   case 10:
   case 'J':
   case 'Q':
   case 'K':
   case 'A':
   count--;
   break;
 }
 if(count > 0){
   return count + ' Bet';
 } else {
   return count + ' Hold';
 }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// objects
const myDog = {
    name: 'Mira',
    legs: 4,
    tails: 1,
    friends: ['Me', 'toys']
   
   };

// dot notation
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  const hatValue = testObj.hat;      
  const shirtValue = testObj.shirt;   

// bracket notation
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  const entreeValue = testObj['an entree'];   
  const drinkValue = testObj['the drink'];   

// object properties with variables
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  const playerNumber = 16;  
  const player = testObj[playerNumber]; 

// update properties
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.name = 'Happy Coder';

// add new properties
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog.bark = 'woof';

//delete properties
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;

// lookups
function phoneticLookup(val) {
    let result = "";
    const lookup = {
      alpha: 'Adams',
      bravo: 'Boston',
      charlie: 'Chicago',
      delta: 'Denver',
      echo: 'Easy',
      foxtrot: 'Frank'
    }
    return result = lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");
  


