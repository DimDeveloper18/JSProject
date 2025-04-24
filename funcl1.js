// Function lessons

// Functions running test
/*
function test() {
    function getFruit() {
      console.log("function running test");
    }
      getFruit();  // Prints: function running test
}
test();
*/
/*
function test() {
    function getFruit(text) {
      console.log("function running test");
      console.log(text+ "was passed in");
    }
      getFruit( "my plum");  // Prints: function running test
}                                  // "my plum" (or any text) was passed in
test();
*/
/*
function test() {
    function getFruit(text) {     // Output is: xxxx my plum
      return "xxxx" + text;
    }
      console.log(getFruit ( " my plum") );  
}                                  
test();
*/

/*
// This structure is called a "Regular function"
function test() {
    function pname(b) {
      return 5 * 8 *(b)
}  
  console.log(pname (8))  // Output is: 320
}
test();
*/
/*
// This structure is called a "Regular function" verssion2
function test() {
    let myvar = function (b){
        return 5 * 8 *(b)
    }
  console.log(myvar (8));
}
test();
*/

// Lesson 1 (Predicate functions (tru or false))verssion1
/*
function test() {
    
    function isEven(n) {
         if ( n%2 === 0 ){
             return true;
         }
         else{              // Expirienced programer's may not include keword "else".
             return false;
         }
     } 
 let num = parseInt (prompt ("Enter a num: ") )
     
         if ( isEven (num)){
             console.log("entered number was even");
         }
             else{
             console.log("entered number was odd");
         }
 }
         test();
*/

// Lesson 1 (shorter) verssion2
/*
function test() {
    
    function isEven(n) {
        let outcome = (n%2 === 0) ? true : false; // Or even shorter then this if replace this function block,
         return outcome;    // with "return n%2 === 0".
     } 
 let num = parseInt (prompt ("Enter a num: ") )
     
         if ( isEven (num)){
             console.log("entered number was even");
         }
             else{
             console.log("entered number was odd");
         }
 }
         test();
*/

// Lesson 1 (shortest) verssion3 bad readability
/*
function test() {
    let num = parseInt (prompt ("Enter a num: ") )
    if ( n%2 === 0 ){
        console.log("entered number was even");
}
    else{
    console.log("entered number was odd");
}
}
test();
*/
// The same function verssion4
/*
function test() {
    
    let num = parseInt (prompt ("Enter a num: ") )
    if ( isEven (num) ){
        console.log("entered number was even");
}
    else{
    console.log("entered number was odd");
}
    function isEven(n) {
        return n%2 === 0;
    }
}
test();
*/

// Lesson2 verssion1
/*
function test() {
    function printNameAge( name, age){   // This function don't have "return" called ("re-use consept")
        console.log("Name: ", name);
        console.log("Age: ", age);
    }
    printNameAge("David", 30);
    printNameAge("Bob", 43);
    
}
test();
*/
/*
// verssion2

function test() {
    function printNameAge( name, age){   // This function don't have "return" called ("re-use consept")
        console.log("Name: ", David);
        console.log("Age: ", 50);
    }
    printNameAge();
    printNameAge();
    
}
test();
*/

// Function definition ("arow" style), make cod shorter
/*
function test() {
    function printFunctionTable(f, min, max){
        for (let i = min; i <= max; i++ ){
          console.log(" f (" + i + ") = " + f (i) );   // f(i) => double (1), then double (2) and so on by the loop
    }
  }
      function double(n){      // If replace this 3 lines with "printFunctionTable( (n) => n*2, 1, 5); "
        return n*2;            // the output is the same but cod is shorter.
      }
      printFunctionTable(double, 1, 5);  // This is a call for "function double"
}
      test();
*/