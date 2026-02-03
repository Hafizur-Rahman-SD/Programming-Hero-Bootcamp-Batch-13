


//push and pop methods in array

const stack = [];

// Using push to add elements to the end of the array
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack); // Output: [1, 2, 3]


const age =[25, 30, 35];
age.push(40);
console.log(age); // Output: [25, 30, 35, 40]  




//pop in array removes the last element from an array and returns that element.
const numbers = [10, 20, 30, 40, 50];
const removedElement = numbers.pop();
console.log(removedElement);
console.log(numbers); // Output: [10, 20, 30, 40]


const fruits = ['apple', 'banana', 'cherry'];
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits); // Output: ['apple', 'banana']


//combining push and pop methods
const queue = [];   
queue.push('first');
queue.push('second');
console.log(queue); // Output: ['first', 'second']
const served = queue.pop();
console.log(served);
console.log(queue); // Output: ['first']




const letters = [];
letters.push('A');
letters.push('B');
letters.push('C');
console.log(letters); // Output: ['A', 'B', 'C']
const lastLetter = letters.pop();
console.log(lastLetter);
console.log(letters); // Output: ['A', 'B']




//shift and unshift methods in array

const deque = [];
// Using unshift to add elements to the beginning of the array
deque.unshift(1);
deque.unshift(2);
deque.unshift(3);
console.log(deque); // Output: [3, 2, 1]
const nums =[5, 10, 15];
nums.unshift(20);
console.log(nums); // Output: [20, 5, 10, 15]
const letters2 = ['B', 'C', 'D'];
letters2.unshift('A');
console.log(letters2); // Output: ['A', 'B', 'C', 'D']
const removedFirst = deque.shift();
console.log(removedFirst);
console.log(deque); // Output: [2, 1]
const colors = ['red', 'green', 'blue'];
const firstColor = colors.shift();
console.log(firstColor);
console.log(colors); // Output: ['green', 'blue']


