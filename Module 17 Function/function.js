
//what is function? Function is a block of code designed to perform a particular task. It is executed when "called" or "invoked".

//function declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!


const numbers =50;
function fanOff(num) {
    if (num > 0) {
        return "Fan is On";
    } else {
        return "Fan is Off";
    }
}
console.log(fanOff(numbers)); // Output: Fan is On


function square(num) {
    return num * num;
}
console.log(square(5)); // Output: 25
console.log(square(10)); // Output: 100
console.log(square(15)); // Output: 225

function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // Output: 7
console.log(add(10, 20)); // Output: 30


function doubleIt (numbers) {
    const double = numbers * 2;
    console.log (numbers,double);
}

console.log(doubleIt (5));
console.log(doubleIt (15));
console.log(doubleIt (25));