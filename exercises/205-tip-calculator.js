// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

function tipAmount(bill, service){
    if (service === 'good'){
        return bill * .2;
    }else if(service === 'fair'){
        return bill * .15;
    }else(service === 'poor')
        return bill * .1;
    }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46
function totalAmount(bill, service){
    if (service === 'good'){
        let tip = bill * .2;
        return tip + bill;
    }else if(service === 'fair'){
        let tip = bill * .15;
        return tip + bill;
    }else(service === 'poor')
        let tip = bill * .1;
        return tip + bill;
    }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

function splitAmount(bill, service, split){
    if (service === 'good'){
        let totalAmount = ((bill * .2) + bill) / split;
        return totalAmount;
    }else if(service === 'fair'){
        let totalAmount = ((bill * .15) + bill) / split;
        return totalAmount;
    }else(service === 'poor')
        let totalAmount = ((bill * .1) + bill) / split;
        return totalAmount;
    }