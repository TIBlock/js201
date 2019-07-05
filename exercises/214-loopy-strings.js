// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse(inString){
    let string = inString;
    reverseArray = string.split('') ; 
    stringReverse = reverseArray.reverse();
    stringBack = stringReverse.join('');
    return stringBack;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord(string){
    let spString = string.split(' ');
    let wdLength = [];
    for (let i = 0; i < spString.length; i++) {
        let letterCount = spString[i].length;
        wdLength.push(letterCount);
        }
        let longWord = Math.max(...wdLength);
        
        let longestWord = wdLength.indexOf(longWord);
        
        return spString[longestWord];
        
    }
    

//I need to split the string into an array
//write a for each function to checke the lengths of each word
//then compare the length of each word together, only keeping the greatest of all
//then print the location of the array that has the longest word. 
    



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer(string){
    let spString = string.split(' ');
    for (let i = 0; i < spString.length; i++) {
        if (String(spString[i]) === 'heck'){
            spString.splice( i , 1 );
        }
        else if (String(spString[i]) === 'darn'){
            spString.splice( i , 1 );
        }
        else if (String(spString[i]) === 'dang'){
            spString.splice( i , 1 );
        }
        else if (String(spString[i]) === 'crappy'){
            spString.splice( i , 1 );
        }      
    }
    return spString.join(' ');
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll(string){
    let spString = string.split(' ');
    for (let i = 0; i < spString.length; i++) {
        spString[i] = spString[i].charAt(0).toUpperCase() + spString[i].substring(1);
    }
    return spString.join(' ');
}


// take zero element and capitalize 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split(myString, separator){
    let result = [];
    
    let startIndex = 0;
    
    let notDone = true;
    
    while (notDone){
        let nextIndex = myString.indexOf(separator, startIndex);
        
        if (nextIndex !== -1){
            
            let nextString = myString.substring(startIndex, nextIndex);
            
            if( nextString !== '');

            result.push(nextString);

            startIndex += separator.length + nextString.length;
        }
        
        else {
          result.push(myString.substring(startIndex));
          
          notDone = false;
            
        }
    }
        return result;
    
}

// remove the selected separator from the string then split the string into individual elements
//bo/alex notes loop through and say if a keep track of the start and end index of every string which willallow you yo

// can use indexOf to find the position

// start a new array  

// one you find the position you can find the index of and pull the substring. 

// find the indexes of the substring and pull the results 


// for each methods you use to solve a problem

// what variables do you need to solve this problem. 
