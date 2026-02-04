


//Stinrg Methods

//Sting is immutable ypu can not change string directly

//How to define a String 

const country = "Bangladesh";
const city = 'Dhaka';
const language = `Bengali`;
const Thana = new String('Kutuali');

// String Methods Examples

const myString = "Hello, World!";

// 1. Length Property
console.log("Length of the string:", myString.length); // Output: 13
// 2. toUpperCase() Method
console.log("Uppercase:", myString.toUpperCase()); // Output: "HELLO, WORLD!"
// 3. toLowerCase() Method
console.log("Lowercase:", myString.toLowerCase()); // Output: "hello, world!"
// 4. charAt() Method
console.log("Character at index 7:", myString.charAt(7)); // Output: "W"
// 5. indexOf() Method
console.log("Index of 'World':", myString.indexOf("World")); // Output: 7
// 6. substring() Method
console.log("Substring from index 0 to 5:", myString.substring(0, 5)); // Output: "Hello"
// 7. replace() Method
console.log("Replace 'World' with 'JavaScript':", myString.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"
// 8. split() Method
console.log("Split by comma:", myString.split(",")); // Output: ["Hello", " World!"]
// 9. trim() Method
const stringWithSpaces = "   Hello, World!   ";
console.log("Trimmed string:", stringWithSpaces.trim());
// Output: "Hello, World!"
// 10. includes() Method
console.log("Includes 'Hello':", myString.includes("Hello")); // Output: true
