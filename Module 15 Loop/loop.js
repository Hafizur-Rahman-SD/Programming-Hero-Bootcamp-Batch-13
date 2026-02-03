

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
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}



let num = 10;
let sum = 0;
while (num > 0) {
    sum += num;
    num--;
    console.log("Sum of numbers 1 to 10 is:", sum);
}


//even numbers using while loop
let n = 2;
while (n <= 20) {
    console.log(n);


    if (n % 4 === 0) {
        console.log(n, "is divisible by 4");
    }
    n += 2;
}