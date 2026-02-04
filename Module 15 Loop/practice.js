


//give me the some of numbers from 1 to 1000 that are dvisible by 7

let sum = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 7 === 0) {
        console.log(i);
        sum += i;
    }
}
console.log("Sum of numbers from 1 to 1000 that are divisible by 7:", sum);


//braek statement
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; //exit the loop when i is 6
    }
    console.log(i);
}



//continue statement
for (let i = 1; i <= 10; i++) {
    if (i === 6) {  
        continue; //skip the iteration when i is 6
    }
    console.log(i);
}


