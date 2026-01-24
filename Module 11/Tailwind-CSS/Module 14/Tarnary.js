//Ternary means a condition with two outcomes, true or false.

// syntax
// condition ? expression if true : expression if false; three parts
// condition ? do something if true : do something if false
// example 1
// var age = 20;
// var canVote = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
// console.log(canVote); // Output: You are eligible to vote.


const age = 60;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

let price = 100;

price >= 150 ? console.log("The price is high.") : console.log("The price is low.");