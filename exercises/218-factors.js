// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10
function gcd(num1, num2){
    let numArray1 = [];
    let numArray2 = [];
    let finalArray = [];
    let longestArray;
    let shortestArray;
    for (let i = 1; i <= Math.floor(num1); i++) {
      if (num1 % i === 0) {
        numArray1.push(i);
        }  
    }
      for (let i = 1; i <= Math.floor(num2); i++) {
        if (num2 % i === 0) {
        numArray2.push(i);
        }  
    } 
      for (let i = 0; i < numArray1.length || i < numArray2.length; i++) {
        if (numArray1.length > numArray2.length){
            longestArray = numArray1;
            shortestArray = numArray2;
        }
        else {
            longestArray = numArray2;
            shortestArray = numArray1;
          }
        }
      for (let i = 0; i < shortestArray.length; i++) {
        if(longestArray.indexOf(shortestArray[i]) > -1){
          finalArray.push(shortestArray[i])
        }        
      }
        return Math.max(...finalArray);
      }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

