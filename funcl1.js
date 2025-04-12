function test() {
    
    function isEven(n) {
         if ( n%2 === 0 ){
             return true;
         }
         else{
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