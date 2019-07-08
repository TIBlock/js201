// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"
function leetspeak(sentence){
    let str = sentence.toLowerCase();
    let leetString;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (str[i].includes('a')){
            str = str.replace('a', '4');
        }
        else if (str[i].includes('e')){
            str = str.replace('e', '3');
        }
        else if (str[i].includes('g')){
            str = str.replace('g', '6');
        }
        else if (str[i].includes('i')){
            str = str.replace('i', '1');
        }           
        else if (str[i].includes('o')){
            str = str.replace('o', '0');
        }
        else if (str[i].includes('s')){
            str = str.replace('s', '5');
        }
        else if (str[i].includes('t')){
            str = str.replace('t', '7');
        }
    }               
    return str
}