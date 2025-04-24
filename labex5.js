/*function test() {
    function greet(name) {
        console.log("Hello, " + name + "!");
    }
        greet("Alice");
        greet("Bob");
        greet("Charlie");
}
test();*/

// Lab5 ex.4
/*
function testFunctions() {
    function greet(name) {
    console.log("Hello, " + name + "!");
    }
    function square(num) {
        return (num * num);
        }
        console.log(square(2)); // 4
        console.log(square(3)); // 9
        console.log(square(4)); // 16
        }
*/
// Lab5 chel.1

//  Solution for question1
/*
function test(){
    function randomAverage(n) {
       let average = 0;
       for (let i = 0; i < n; i++) {
          average += Math.random()
       }
       return average/n;
    }
    for (let i = 1; i <= 10000; i=i*10) {  
       console.log(`RandomAverage(${i}) => ${randomAverage(i)}`); //want: 1, 10, 100, 1000, 10000 -> How to do this?
    }
 }
 test();
 */
// Lab5 ex.5
/*
 function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
    result *= i;
}
    return result;
}
    console.log(factorial(5)); // 120
    console.log(factorial(6)); // 720
    console.log(factorial(7)); // 5040
*/
// Lab5 ex.6
/*
function multiplyArray(arr) {
    var result = 1;
    for (var i = 0; i < arr.length; i++) {
    result *= arr[i];
    }
    return result;
    }
    console.log(multiplyArray([2, 3, 4])); // 24
    console.log(multiplyArray([5, 6, 7, 8])); // 1680
    console.log(multiplyArray([1, 2, 3, 4, 5])); // 120
*/
// Lab5 ch.2

// Random numbers examples
// Ex.1 (Randoms numbers between 0 and 10).
/*
function test(){
    for (let i = 0; i < 10; i+=1)
        console.log(Math.random());
}
test();
*/
// Ex.2 (Randoms number between 0 and 4).
/*
function test(){
    let low = 3;
    let high = 7;
    let range = high - low;
    for (let i = 0; i < 10; i+=1)
        console.log(range * Math.random());  // If add "(range+1)" it gives numbers up to 4 with out never 
}         // rich 4. If place "Math.floor" before the "range" it will rounds the numbers. If place "low" before
test();   // "Math.floor" it shift the numbers by 1. Called "Shifting".
*/
// Ex.3

