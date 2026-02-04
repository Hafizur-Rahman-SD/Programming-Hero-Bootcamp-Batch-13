//concate Strings

let string1 = "Hello, ";
let string2 = "world!";
let resultString = string1.concat(string2);
console.log(resultString); // Output: Hello, world!


const sentence = 'I am learning web dev from PHero';
const extra = ' and it is fun!';
const fullSentence = sentence.concat(extra);
console.log(fullSentence); // Output: I am learning web dev from PHero and it is fun!


//reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}   
const originalString = "JavaScript";
const reversedString = reverseString(originalString);
console.log("Reversed String:", reversedString); // Output: tpircSavaJ
//another way to reverse a string
function reverseStr(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
const strToReverse = "Hello";
const reversedStr = reverseStr(strToReverse);
console.log("Reversed String:", reversedStr); // Output: olleH
