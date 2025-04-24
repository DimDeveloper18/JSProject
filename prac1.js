//console.log("Hello World");
function mathFunction(x) {
    return (x ** 2) - (5 * x) + 6;
}

// console.log(mathFunction (4) );

function milesToKm(miles){
    return miles * 1.60934;
}
// console.log(milesToKm (20))

function quotient(divident, divisor){
    return (divident - divident % divisor) / divisor;
}
// console.log(quotient (17,4))

function farenheitToCelcius(farenheit){
    return 9 / 5 *(farenheit - 32);
}
// console.log(farenheitToCelcius (10));

let str1 = "Hello World"; //Double quots
let str2 = "Hellow again"; //Single quots

//Wraping quots
let quots = 'He sad "No way" and "I heard" something else';
console.log(quots);