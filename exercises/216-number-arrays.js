// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max(array){
    if (Math.max(...array) === -Infinity) {
        return 0;
    }else {
        return Math.max(...array);
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(array){
    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        arraySum += array[i];
    }
        return arraySum;
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives(array){
    let myArray = array.filter(function(element){
        return Math.sign(element) === 1;
    });
    return myArray;
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function evens(array){
    var myArray = array.filter(function(element){
        return element % 2 === 0;
    });
    return myArray;

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
function odds(array){
    var myArray = array.filter(function(element){
        return element % 2 !== 0;
    });
    return myArray;

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
function integers(array){
    var myArray = array.filter(function(element){
        return Number.isInteger(element);
    });
    return myArray;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance(array){
    let myArray = [];
    array.forEach(function(element){
        myArray.push(Math.pow(element, 2));
    });
    return myArray;
}