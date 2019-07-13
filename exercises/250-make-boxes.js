// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare(number) {
    let num = number;
    let square = '';
    let squareArray = [];
        for (let i = 1; i <= Math.floor(num); i++) {
            square += '*';
        }
    square +='\n';
    square = square.repeat(num);
    square= square.substring(0, square.length - 1);
    squareArray.push(square);      
    return squareArray.toString()
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox(width, height) {
    let box = '';
    //Create the end caps for the box
    let myTop = '*'.repeat(width) + '\n';
    let myBottom ='*'.repeat(width);
    let boxMiddle = '';
    //create the middle lines with spaces between
    for (let i = 1; i < width; i++) {
        box = '*' + (' '.repeat(width - 2)) + '*\n';
    }
    for (let i = 0; i < height - 2; i++) {
        boxMiddle += box   
    }
    //Combine everything to create what we need. 
    if (height > 1){
        box = myTop + boxMiddle + myBottom;
    } 
    else if ( height === 1){
        box = myBottom;
    }
    else {
        box = '';
    }
     return box;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(string) {
    let myStr = ' ' + string + ' ';
    //Creates the top and bottom of the banner
    let myTop;
    let myBottom;
    let strBanner;
    //Combine everything to make my banner
    if(string !== ''){
        strBanner = '*' + myStr + '*\n';
        myTop = '*'.repeat(myStr.length + 2) + '\n';
        myBottom ='*'.repeat(myStr.length + 2);
    }
    else {
    myStr = '  '
    strBanner = '*'+myStr+'*\n';
    myTop = '*'.repeat(string.length + 4) + '\n';
    myBottom ='*'.repeat(string.length + 4);    
    }
    return myTop + strBanner + myBottom  
}