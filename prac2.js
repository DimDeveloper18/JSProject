/*let instr = "trumpet";
console.log(instr[0]); //"t"
console.log(instr[1]); //"r"
console.log(instr[6]); //"t"

//Indexing work as an array of characters

let account = "123456";
console.log(accountNumber[2]); // "3"
console.log(accountNumber.lenght); // "6 totalnumbers of characters"*/

/* let capitalLetters = "davidEatFish";
console.log(capitalLetters.toUpperCase()); // UPPER CASE LETTERS
console.log(capitalLetters.toLowerCase()); // lower case letters
console.log(capitalLetters); // Original letter

let messy = "     to much space!     ";
console.log(messy.trim()); // Trim excess spaces before text and after

let test = "     test to functions in one log!     ";
let cleaned = test.toLocaleUpperCase().trim(); // Two methods declared for one log expression called "chain method" 
console.log(cleaned);

Example for no chain method (longer cod)

let test = "     test to functions in one log!     ";
let cleaned = test.toLocaleUpperCase();
cleaned = cleaned.trim();
console.log(cleaned);

// Indexof function

let instr = "trumpet";
console.log(instr.indexOf("t")); // 0 (first "t")
console.log(instr.indexOf("tr")); // 0
console.log(instr.indexOf("z")); // -1 (not found)

// Slice function

let word = "trumpet";
//console.log(word.slice(0, 3)); // "tru"
//console.log(word.slice(4)); //"pet"
// or shorter verstion
console.log(word.slice(0, 3) + word.slice(4)); // Inline verssion

// Replace / replaceAll function

let greeting = "Hello World";
let newGreeting = greeting.replace("World", "Everyone"); // Replacing word or all words in the string
console.log(newGreeting); // "Hello Everyone"

// Repeat function

let laght = "ha";
console.log(laght.repeat(3));  // "hahaha" 

// Concatenation (Chain string)

let pName = "John";
let age = 30;
//let message = "My name is " + pName + " and I am " + age + " years old.";
let message = `My name is ${pName} and I am ${age} years old.`; // Second verssion to do concatenation called
//  "template literal" can combine maths operation functions or other function ex. ${age * 3}, 
// {pName.toUperCase()}
console.log(message)

function greet(name){
    return`Hello, ${name.toUpperCase()}!`;
}
console.log(greet("alice")); // Output: Hello, ALICE! */

let product = "Cheesse";
let price = 3.75;
let recipt = `
Item: ${product} 
Price: €${price}
Thank you for your purchase!`;
console.log(recipt);

