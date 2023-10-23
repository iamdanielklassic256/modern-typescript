// BASIC TYPES IN TYPESCRIPT
let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: number | string; //union in typescript
// let album: any; //can be string, number, boolean


myName = 'Daniel';
meaningOfLife = 30;
isLoading = true;
album = 'React.js dev '


const sum = (a: number, b: string) => { // parentheses can have any basic data type ie number, string, boolean
	return a + b
}
let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;


// TYPESCRIPT OBJECTS --array, tupple, enums
let stringArray = ['one', 'hey', 'Daniel'];

let armies = ['React.js', 'MongoDB', 'Express js', 'Node.js', 50];

let mixData = ['EVM', 1980, true];

stringArray[0] = "Jessica";
stringArray.push('Jess'); //Appends new elements to the end of an array, and returns the new length of the array.

armies[0] = 2;
armies.unshift(30) // Inserts new elements at the start of an array, and returns the new length of the array.

// stringArray = armies  
/*
Type '(string | number)[]' is not assignable to type 'string[]'.
  Type 'string | number' is not assignable to type 'string'.
  Type 'number' is not assignable to type 'string'.
*/

armies = stringArray //it worked vice versa


//empty array
let myGreatArmies = []; //any basic data types can work out
let bands: string[] = []
bands.push('Daniel Okumu');

// TUPLE
let myTuple: [string, number, boolean] = ['Daniel', 24, true]

let mixed = ['Jess', 1, true]


// OBJECTS
let myObject: object;
myObject = [];
console.log(typeof myObject)
myObject = {};

const exampleObject = {
	prop1: 'Daniel',
	prop2: true
}
exampleObject.prop1 = 'Jessica';
exampleObject.prop2 = false;

interface GreatArmies {
	name?: string,
	active: boolean, //active?: boolean | undefined -- object optional property
	album: (string | number)[]
}
// interface is almost the same as type below
// type GreatArmies = {
// 	name: string,
// 	active?: boolean, //active?: boolean | undefined -- object optional property
// 	album: (string | number)[]
// }

let evh: GreatArmies = {
	name: "Mary",
	active: true,
	album: ['sister-in-law', 18]
}
let rkvh: GreatArmies = {
	// name: "Jess",
	active: false,
	album: ['wife', 16]
}
evh = rkvh //as long as their objects are at the same level

const readMe = (greatArmies: GreatArmies) => {
	if (greatArmies.name) {
		return `Hello ${greatArmies.name.toUpperCase()}`
	}
	return `Hello Anonymous`
}

console.log(readMe(rkvh))


// ENUM
/*
"Unlike most Typescript features, Enums are not a type-level addition to Javascript	 but something added to the language and runtime."
*/

enum Grade {
	U, //if i put 1 my index will change from 0 to 1
	G,
	A,
	B,
	C
}
console.log(Grade.U)


// TYPESCRIPT FUNCTIONS

// Type Alias
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[]
type Company = {
	name?: string,
	active?: boolean, //active?: boolean | undefined -- object optional property
	desscription: stringOrNumberArray
}

type UserId = stringOrNumber;
// interface postId = stringOrNumber --- it wont work --aint allowed with interface only with type


// Literal Types
let fullName: 'Okumu Daniel Combobi'

let userName: 'Daniel' | 'Jess' | 'Jessidan'
userName = 'Daniel' //only pick names in the declaration

// FUNCTIONS
const add = (a: number, b: number): number => {
	return a + b;
}
const logMsg = (message: any) => {
	console.log(message) //return type is void - doesnot return anything.... there is no return
}
logMsg('Hello Mssg!')
logMsg(add(30, 50))

let subtract = function (c: number, d: number): number {
	return c - d
}
// Function type aliases
type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = function (c, d) {
	return c * d
}
logMsg(multiply(30, 50))

// Function Interface
interface mathFunctions { (a: number, b: number): number }

let divide: mathFunctions = function (c, d) {
	return c / d
}
logMsg(divide(100, 50))

// Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
	if (typeof c !== 'undefined') {
		return a + b + c
	}
	return a + b;

}
// default parameter value
const sumAll = (a: number = 10, b: number, c: number = 2): number => { //default value for c = 2
	return a + b + c;
}
logMsg(addAll(100, 50, 3))
logMsg(addAll(100, 50))
logMsg(sumAll(100, 50))
logMsg(sumAll(undefined, 50))


// FUNCTIONS WITH REST PARAMS
const total = (...nums: number[]): number => {
	return nums.reduce((pre, curr) => pre + curr)
}
logMsg(total(1, 2, 3, 4, 5))

// NEVER TYPE
const createError = (errMssg: string) => {
	throw new Error(errMssg)
}
const inifinite = () => {
	let i: number = 1;
	while (true) {
		i++;
		if (1 > 100) break //if there is no if statement then will be a endless loop
	}
}

const isNumber = (value: any): boolean => { // Custom Type Guard
	return typeof value === 'number' ? true : false
}

// use of never type....
const numberOrString = (value: string | number): string => {
	if (typeof value === 'string') {
		return 'string'
	}
	if (isNumber(value)) { // Custom Type Guard
		return 'number'
	}
	return createError('This should never happen')
}

// Custom Type Guard


// TYPE ASSERTION & TYPE CASTING IN TYPESCRIPT

type One = string
type Two = string | number;
type Three = 'hello'

// convert to more or less specific 	
let a: One = 'Hello';
let b = a as Two; //less specific type
let c = a as Three //more specific type
// below are not posssible in React.js
let d = <One>'World!'
let e = <string | number>'World!'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
	if (c === 'add') return a + b;
	return '' + a + b;
}
let myValue: string = addOrConcat(2, 2, 'concat') as string //it will return a strin since we added as string
// Be careful! TS see not problem - but a string is string
let nextVal: number = addOrConcat(2, 2, 'concat') as number //it will return a strin since we added as string

// Double Casting
// 10 as string
(10 as unknown) as string;

// DOM Selection Type
const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#img') as HTMLImageElement;

// img.src
// myImg.src

// TYPESCRIPT CLASSES
	