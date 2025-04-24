
// Array ex.1 (prints fruit by order)
/*
function test(){
    let arrayOfFruits = ["pear", "apple", "plum", "grape"];
  //TASK: use the loop below to print the elements
  //       use 'indexing' also
  for (let i = 0; i<arrayOfFruits.length; i+=1){
    console.log(i + ( arrayOfFruits [i] ) );
  }  
}
test();
 */
/*
function test(){
  function reverseText( text ){
  let result = "";
  let lastIndex = text.length-1;
  for(let i=lastIndex; i>=0; i-=1){
    result += text.charAt(i);
  }
  return result;
}
// [s][p][a][m][m][a][p][s]
// [0][1][2][3][4][5][6][7]
  function isPalindrome(text){
      let lastIndex  = text.length-1;
      let halfLength = Math.floor( text.length/2 );
      
      for(let i=0; i<halfLength; i+=1){
          let leftIndex = i;
          let rightIndex = lastIndex-i
          if( ! text[leftIndex] === text[rightIndex] ){
              return false;
          }
      }
      return true;
  }
  console.log( isPalindrome("spammaps") ); //true

}
test();
*/