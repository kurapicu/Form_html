alert();
console.log(100);

// let name
// function person(name, age){
//         console.log(person.name);
//         return 
// }

let number = 12345;
let toString = number.toString; // convert to string
let toFix = number.toFixed(5) // return numbers of specified decimal places
let toPrecision = number.toPrecision(3); // returns rounded up/down value
let toExponential = number.toExponential(2); // returns exponential value
console.log(toString);
console.log(toFix);
console.log(toPrecision);
console.log(toExponential);
console.log(toString);


//MATH METHOD
console.group(MATH_METHODS);
 
let newnum = 144;
let sqrt = Math.sqrt(newnum);
console.log(sqrt);

let pow = Math.pow(newnum, 2);
console.log(pow);

let sineNum = 90;
let sine = Math.cos(sineNum);
console.log(sine);

let logNum = 10;
let log = Math.log(logNum);
console.log(log);

let pi = Math.PI;
let cir = 2 * pi * (7**2); // or Math.pow(7, 2)
console.log(cir);

let min = Math.max(1, 2, 3, 4, 6, -5); // returns the max number 
console.log(min);

let trunc = Math.trunc(123.23); // returns numbers without decimal
console.log(trunc);

let random = Math.random() * 10000; // returns decimal numbers between 0 - 1
console.log(random);

console.log(Math.floor(random)); // floor() rounddown / ceil() roundup any number
console.groupEnd();

console.table({name: 'Daniel Ayodeji', Course: 'Javascript'});

//ASSIGNMENT 
//WRITE A CODE THAT RETURNS HALF OF A STRING
// WRITE A CODE THAT RETURNS LENGTH OF A STRING EXCLUDING THE WHITE SPACE

