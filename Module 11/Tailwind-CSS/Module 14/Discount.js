

//discount .js

let discountPercentage = 10;
let originalPrice = 200;
let discountAmount = (discountPercentage / 100) * originalPrice;
let finalPrice = originalPrice - discountAmount;
console.log("The final price after discount is: $" + finalPrice);



// if ,else-if

let marks = 60;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}   



//nested if else 


    const money = 50;
    if (money >= 100) {
        if (money >= 200) {
            console.log("You can buy a laptop.");
        } else {
            if (money >= 150) {
                console.log("You can buy a tablet.");
            } else {
                if (money >= 100) {
                    console.log("You can buy a smartphone.");
                }
            }
        }
    } else {
        console.log("You do not have enough money to buy any device.");
    }
