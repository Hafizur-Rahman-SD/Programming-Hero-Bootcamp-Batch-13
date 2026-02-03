

//for loop over an array
const fruits = ['apple', 'banana', 'cherry', 'date'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num * 2);
}

//for of loop over a string
const message = "Hello";
for (const char of message) {
    console.log(char);
}
const word = "JavaScript";
for (const letter of word) {
    console.log(letter);
}

//while loop
const n = 5;
if (n<10) {
    console.log("n is less than 10");
}



let count = 1;
while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}

let n =0;
while (n < 3) {
    console.log("n is: " + n);
    n++;
}