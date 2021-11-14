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

// Testing Objects for Properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    } else {
      return 'Not Found';
    }
  }

// Manipulating Complex Objects
const myMusic = [
    {
      artist: 'Imagine Dragons',
      title: 'Natural',
      release_year: 2018,
      formats: [
        'CD',
        '8T',
        'LP'
      ]
    },
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];

//Accessing Nested Objects
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside['glove box'];

//Accessing Nested Arrays
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];

// Record Collection
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(prop !== 'tracks' && value !== ''){
      records[id][prop] = value;
    } else if(prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
      records[id][prop] = [value];
    } else if(prop === 'tracks' && value !== ''){
      records[id][prop].push(value);
    } else if(value === ''){
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//Iterate with JavaScript While Loops
const myArray = [];
let i = 5;
while(i >= 0){
  myArray.push(i);
  i--;
}

//Iterate with JavaScript For Loops
const myArray = [];
for(let i = 1; i <= 5;i++){
  myArray.push(i);
}

//Iterate Odd Numbers With a For Loop
const myArray = [];
for (let i = 1; i < 10; i += 2){
  myArray.push(i);
}

//Count Backwards With a For Loop
const myArray = [];
for (let i = 9; i > 0; i -= 2){
  myArray.push(i);
}

//Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length;i++){
  total += myArr[i];
}

//Nesting For Loops
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length;j++){
        product *= arr[i][j];
      }
    }
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//Iterate with JavaScript Do...While Loops
const myArray = [];
let i = 10;
do{
  myArray.push(i);
  i++;
} while (i < 5);

//Replace Loops using Recursion
function sum(arr, n) {
    // Only change code below this line
  if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    }

//Profile Lookup
function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i = 0; i < contacts.length; i++){
      if(contacts[i].firstName === name){
        if(contacts[i].hasOwnProperty(prop)){
          return contacts[i][prop];
        } else {
          return 'No such property';
        }
      }
    }
       return 'No such contact';
      }

// Generate Random Fractions with JavaScript
function randomFraction() {
    return Math.random();
    }

//Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }

//Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }  

  //Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
  }
  
  convertToInteger("56");

//Use the parseInt Function with a Radix
function convertToInteger(str) {
    return parseInt(str, 2);
  }
  
  convertToInteger("10011");

//Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal';
  }
  
  checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return (num > 0) ? 'positive'
    : (num === 0) ? 'zero'
    : 'negative';
  }
  
  checkSign(10);

//Use Recursion to Create a Countdown
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }

//Use Recursion to Create a Range of Numbe
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
       return [startNum];
   } else {
       let numbers = rangeOfNumbers(startNum, endNum - 1);
       numbers. push(endNum);
       return numbers;
   }
   }

// Compare Scopes of the var and let Keywords
function checkScope() {
  let i = 'function scope';
  if (true) {
   let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

//Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();

//Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

//Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

//Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

//Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const { today : highToday, tomorrow : highTomorrow}  = HIGH_TEMPERATURES; 

//Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

//Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a]

//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line

//Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
const failureItems = arr.map(elem => `<li class="text-warning">${elem}</li>`);
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  }
  // Only change code above this line
};

//Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//Use class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable {
  constructor(name){
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Use getters and setters to Control Access to an Object
// Only change code below this line
class Thermostat{
  constructor(fahrenheit){
    this.fahrenheit = fahrenheit;
  }
  get temperature(){
    return 5 / 9 * (this.fahrenheit - 32);
  }
  set temperature(celsius){
    this.fahrenheit = celsius * 9.0 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// Create a Module Script

<script type = "module" src="index.js"></script>

//Use export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export {uppercaseString, lowercaseString};

//Reuse JavaScript Code Using import
import {uppercaseString, lowercaseString} from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//Use * to Import Everything from a File
import * as stringFunctions from './string_functions.js';
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

//Import a Default Export
import subtract from './math_functions.js';
// Only change code above this line

subtract(7,4);

//Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) =>{


});

//Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve('We got the data');// Change this line
  } else {  
    reject('Data not received');// Change this line
  }
});

//Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result =>{
  console.log(result);
});

//Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//Handle a Rejected Promise with catch
makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error =>{
  console.log(error);
});

//Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

//Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoRegex);

//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

//Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); 

//Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

//Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex);

//Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou3]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

//Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

//Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h[a-z]*?1>/; // Change this line
let result = text.match(myRegex);

//Find One or More Criminals in a Hunt
let reCriminals = /C+/; // Change this line

//Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

//Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

//Match All Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

//Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i // Change this line
let result = userCheck.test(username);

//Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

//Match Non-Whitespace Characters
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/gi; // Change this line
let result = ohRegex.test(ohStr);

//Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/gi; // Change this line
let result = haRegex.test(haStr);

//Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /tim{4}ber/gi; // Change this line
let result = timRegex.test(timStr);

//Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

//Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works


//Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);


//Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

//Use the JavaScript Console to Check the Value of a Variable
let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a);

let sumAB = a + b;
console.log(sumAB);

//Understanding the Differences between the freeCodeCamp and Browser Console
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

//Use typeof to Check the Type of a Variable
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

//Catch Misspelled Variable and Function Names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//Catch Mixed Usage of Single and Double Quotes
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);

//Catch Use of Assignment Operator Instead of Equality Operator
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

//Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);

//Catch Arguments Passed in the Wrong Order When Calling a Function
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

//Catch Off By One Errors When Using Indexing
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

//Use Caution When Reinitializing Variables Inside a Loop
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

//Prevent Infinite Loops with a Valid Terminal Condition
function myFunc() {
  for (let i = 1; i<= 4; i += 2) {
    console.log("Still going!");
  }
}

//Use an Array to Store a Collection of Data
let yourArray = ['LA', 2, true, 93, 'h']; // Change this line


//Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = 'mommy';
// Only change code above this line
console.log(myArray);