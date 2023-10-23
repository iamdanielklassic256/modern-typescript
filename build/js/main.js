"use strict";
// BASIC TYPES IN TYPESCRIPT
let myName;
let meaningOfLife;
let isLoading;
let album; //union in typescript
// let album: any; //can be string, number, boolean
myName = 'Daniel';
meaningOfLife = 30;
isLoading = true;
album = 'React.js dev ';
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let re = /\w+/g;
// TYPESCRIPT OBJECTS --array, tupple, enums
let stringArray = ['one', 'hey', 'Daniel'];
let armies = ['React.js', 'MongoDB', 'Express js', 'Node.js', 50];
let mixData = ['EVM', 1980, true];
stringArray[0] = "Jessica";
stringArray.push('Jess'); //Appends new elements to the end of an array, and returns the new length of the array.
armies[0] = 2;
armies.unshift(30); // Inserts new elements at the start of an array, and returns the new length of the array.
// stringArray = armies  
/*
Type '(string | number)[]' is not assignable to type 'string[]'.
  Type 'string | number' is not assignable to type 'string'.
  Type 'number' is not assignable to type 'string'.
*/
armies = stringArray; //it worked vice versa
//empty array
let myGreatArmies = []; //any basic data types can work out
let bands = [];
bands.push('Daniel Okumu');
// TUPLE
let myTuple = ['Daniel', 24, true];
let mixed = ['Jess', 1, true];
// OBJECTS
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = {};
const exampleObject = {
    prop1: 'Daniel',
    prop2: true
};
exampleObject.prop1 = 'Jessica';
exampleObject.prop2 = false;
// interface is almost the same as type below
// type GreatArmies = {
// 	name: string,
// 	active?: boolean, //active?: boolean | undefined -- object optional property
// 	album: (string | number)[]
// }
let evh = {
    name: "Mary",
    active: true,
    album: ['sister-in-law', 18]
};
let rkvh = {
    // name: "Jess",
    active: false,
    album: ['wife', 16]
};
evh = rkvh; //as long as their objects are at the same level
const readMe = (greatArmies) => {
    if (greatArmies.name) {
        return `Hello ${greatArmies.name.toUpperCase()}`;
    }
    return `Hello Anonymous`;
};
console.log(readMe(rkvh));
// ENUM
/*
"Unlike most Typescript features, Enums are not a type-level addition to Javascript	 but something added to the language and runtime."
*/
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["G"] = 1] = "G";
    Grade[Grade["A"] = 2] = "A";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["C"] = 4] = "C";
})(Grade || (Grade = {}));
console.log(Grade.U);
// interface postId = stringOrNumber --- it wont work --aint allowed with interface only with type
// Literal Types
let fullName;
let userName;
userName = 'Daniel'; //only pick names in the declaration
// FUNCTIONS
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message); //return type is void - doesnot return anything.... there is no return
};
logMsg('Hello Mssg!');
logMsg(add(30, 50));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(30, 50));
let divide = function (c, d) {
    return c / d;
};
logMsg(divide(100, 50));
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default parameter value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(100, 50, 3));
logMsg(addAll(100, 50));
logMsg(sumAll(100, 50));
logMsg(sumAll(undefined, 50));
// FUNCTIONS WITH REST PARAMS
const total = (...nums) => {
    return nums.reduce((pre, curr) => pre + curr);
};
logMsg(total(1, 2, 3, 4, 5));
// NEVER TYPE
const createError = (errMssg) => {
    throw new Error(errMssg);
};
const inifinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (1 > 100)
            break; //if there is no if statement then will be a endless loop
    }
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of never type....
const numberOrString = (value) => {
    if (typeof value === 'string') {
        return 'string';
    }
    if (isNumber(value)) { // Custom Type Guard
        return 'number';
    }
    return createError('This should never happen');
};
// convert to more or less specific 	
let a = 'Hello';
let b = a; //less specific type
let c = a; //more specific type
// below are not posssible in React.js
let d = 'World!';
let e = 'World!';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myValue = addOrConcat(2, 2, 'concat'); //it will return a strin since we added as string
// Be careful! TS see not problem - but a string is string
let nextVal = addOrConcat(2, 2, 'concat'); //it will return a strin since we added as string
// Double Casting
// 10 as string
10;
// DOM Selection Type
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
// img.src
// myImg.src
// TYPESCRIPT CLASSES
