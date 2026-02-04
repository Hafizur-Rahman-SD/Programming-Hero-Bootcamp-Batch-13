
// when we use it ? we use it when we want to run loop at least one time

//syntax
// do {
//     //loop body
// } while (condition);


const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
};
console.log(bottle);

//Access Object Properties
console.log(bottle.color); //dot notation
console.log(bottle['price']); //bracket notation
//Object Methods
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }   
};

person.greet(); // Output: Hello, my name is John

//dot  notation vs Bracket notation
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
};
// Dot Notation
console.log(car.brand); // Output: Toyota
// Bracket Notation
console.log(car['model']); // Output: Camry
const propertyName = 'year';
console.log(car[propertyName]); // Output: 2020
// Modifying Object Properties
car.year = 2021;
car['model'] = 'Corolla';
console.log(car);
// Adding New Properties
car.color = 'Red';
car['price'] = 25000;
console.log(car);
// Deleting Properties
delete car.price;
console.log(car);
// Looping Through Object Properties
for (const key in car) {
    console.log(key + ': ' + car[key]);
}
// Output:
// brand: Toyota
// model: Corolla
// year: 2021
// color: Red

