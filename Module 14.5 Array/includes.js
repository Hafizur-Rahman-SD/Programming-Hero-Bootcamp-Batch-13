


//includes in js what is it? this is used to check whether an array contains a certain element or not and returns true or false accordingly
//this is case sensitive
const fruits = ['apple', 'banana', 'mango', 'orange'];
console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('grape'));  // Output: false



const numbers = [10, 20, 30, 40, 50];
console.log(numbers.includes(30));
// Output: true
console.log(numbers.includes(60)); 
// Output: false


const colors = ['red', 'green', 'blue', 'yellow'];
console.log(colors.includes('green'));
// Output: true
console.log(colors.includes('purple')); 
// Output: false


//index of method in array
const animals = ['cat', 'dog', 'rabbit', 'hamster'];
console.log(animals.indexOf('rabbit'));
// Output: 2
console.log(animals.indexOf('elephant')); 
// Output: -1
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
console.log(cities.indexOf('Chicago'));
// Output: 2
console.log(cities.indexOf('Miami')); 
// Output: -1




//its array method or not checking
const arrayMethods = ['push', 'pop', 'shift', 'unshift', 'includes', 'indexOf'];
console.log(arrayMethods.includes('push'));
// Output: true
console.log(arrayMethods.includes('slice')); 
// Output: false
const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];
console.log(programmingLanguages.includes('Python'));   
// Output: true
console.log(programmingLanguages.includes('Ruby'));     
// Output: false
const vehicles = ['car', 'bike', 'truck', 'bus'];
console.log(vehicles.includes('truck'));
// Output: true


//Array.isArray() method
const fruits2 = ['apple', 'banana', 'mango'];
console.log(Array.isArray(fruits2)); 
// Output: true
const number2 = 42;
console.log(Array.isArray(number2)); 
// Output: false
const mixedData = {name: 'Alice', age: 30};
console.log(Array.isArray(mixedData)); 
// Output: false
const emptyArray2 = [];
console.log(Array.isArray(emptyArray2)); 
// Output: true



//concat method in array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray); 
// Output: [1, 2, 3, 4, 5, 6]


const letters1 = ['A', 'B', 'C'];
const letters2 = ['D', 'E', 'F'];
const allLetters = letters1.concat(letters2);
console.log(allLetters); 
// Output: ['A', 'B', 'C', 'D', 'E', 'F']