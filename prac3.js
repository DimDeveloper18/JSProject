// Math Functions
console.log(Math.PI); // 3.14159265359

console.log("Math.floor() - Round down to the nearest integer");
console.log(Math.floor(4.9)); // otput 4
console.log(Math.floor(7.5)); // 7
console.log(Math.floor(9.8)); // 9


console.log("Math.ceil() - Round up to the nearest integer");
console.log(Math.ceil(4.1)); //output 5
console.log(Math.ceil(7.5)); // 8
console.log(Math.ceil(9.2)); // 10


console.log("Math.random() - Returns decimal between 0 (inclusive) and 1 (exclusive)");
console.log(Math.random());  // e.g. 0.324859409
console.log(Math.random());  // e.g. 0.948375238


console.log("Math.random() * 5 - Random decimal between 0 and 5");
console.log(Math.random() * 5);  // 2.747838523
console.log(Math.random() * 5);  // 4.647837239

console.log(Math.round(4.4));  // Round decimal number down to 4
console.log(Math.round(4.5));  // Round decimal number up to 5

console.log(" To make Math.random() return integers, we need to floor it.");
console.log(Math.floor(Math.random() * 10));  // e.g. 0, 3, 5, 9
console.log(Math.floor(Math.random() * 10) + 1);  // e.g. 1, 4, 6, 10

