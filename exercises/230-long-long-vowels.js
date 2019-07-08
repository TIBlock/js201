// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'
function longLongVowels(word){
    let str = word;
    let replaceWord;
    if (str.includes('aa')){
        replaceWord = str.replace('aa', 'aaaaa');
    } 
    else if (str.includes('ee')){
        replaceWord = str.replace('ee', 'eeeee');
    } 
    else if (str.includes('ii')){
        replaceWord = str.replace('ii', 'iiiii');
    } 
    else if (str.includes('oo')){
        replaceWord = str.replace('oo', 'ooooo');
    }
    else if (str.includes('uu')){
        replaceWord = str.replace('uu', 'uuuuu');
    }
    else if (str.includes('yy')){
        let replaceWord = str.replace('yy', 'yyyyy');
    }
    else { 
        return str;
    }    
    return replaceWord;
}