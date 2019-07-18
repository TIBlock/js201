// Write a function "recognizeEmployees" that takes two arguments:
// 1) an array of names of people to be recognized
// 2) an array of employees of the month
// Return an array telling everyone that they did a great job, except employees
// of the month did an outstanding job.
//
// Examples:
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])
// > ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']
//
// Hint: What is the best data structure for the employees of the month list?
function recognizeEmployees(array1, array2){
    //check to see if the outstanding employee is in the second array first,
    // then remove it from the array and apply a string to each array item in array 1
    //use "problem solving with code" search for an item in an array.

//     for (let i = 0; i < array2.length; i++) {
//         let outstandingEmps = array1.find(function(element) {
//             return element === array2[i]
//         });
//         return outstandingEmps;
//     }
// }
//may want to try and use counting unique items in an array instead. 

for (let i = 0; i < array1.length; i++) {
    if (array1.indexOf() !== -1) {
        let outEmpLoc = i;
    }    
}
}