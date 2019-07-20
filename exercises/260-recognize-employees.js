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
function recognizeEmployees(array1, array2) {
    let greatJob = [];
    array1.forEach(function(name) {
        array2.indexOf(name)
        if(array2.indexOf(name) !== -1){
            greatJob.push('Outstanding job, ' + name + '!');
        }
        else{
            greatJob.push('Great job, ' + name + '!');

        }
        
    });
    return greatJob;
}

var result = recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])
console.log(result);

// function recognizeEmployees(array1,array2){
//     let greatJob = [];
//     array1.forEach(function(element) {
//         for (let i = 0; i < array2.length; i++) {
//             if(element === array2[i]) {
//                 greatJob.push('Outstanding job, ' + element + '!');
//             }
//             else if (element !== array2[i])
//                 greatJob.push('Great job, ' + element + '!');
//         }
//     });
//     return greatJob;
// }