

const UV = "Southeast University";

const dept = "Computer Science";

const book = "JavaScript Programming";

if (UV.toLowerCase() === book.toLowerCase()) {
  console.log("University and Book are the same.");
} else {
  console.log("University and Book are different.");
}



const fruit1 = "Mango";
const fruit2 = "Mango     ";
if (fruit1.trim() === fruit2.trim()) {
  console.log("Both fruits are the same.");
} else {
  console.log("Fruits are different.");
}

//uppercase and lowercase comparison
const name1 = "Alice";
const name2 = "alice";
if (name1.toLowerCase() === name2.toLowerCase()) {
  console.log("Names are the same (case-insensitive).");
}
else {
  console.log("Names are different.");
}

//slice method
const message = "Hello, welcome to Southeast University!";
const slicedMessage = message.slice(7, 14);
console.log("Sliced Message:", slicedMessage); // Output: "welcome"
//replace method
const newMessage = message.replace("Southeast University", "JavaScript Programming");
console.log("Replaced Message:", newMessage); // Output: "Hello, welcome to JavaScript Programming!"
//includes method
const hasWelcome = message.includes("welcome");
console.log("Message includes 'welcome':", hasWelcome); // Output: true
//indexOf method
const index = message.indexOf("Southeast");
console.log("Index of 'Southeast':", index); // Output: 18
//charAt method
const char = message.charAt(5);
console.log("Character at index 5:", char); // Output: ","
//length property
console.log("Length of the message:", message.length); // Output: 38
//trim method
const spacedString = "   Hello World!   ";
console.log("Trimmed String:", spacedString.trim()); // Output: "Hello World!"

//join method
const words = ["JavaScript", "is", "fun"];
const joinedString = words.join(" ");
console.log("Joined String:", joinedString); // Output: "JavaScript is fun"
//split method
const csv = "apple,banana,cherry";
const fruits = csv.split(",");
console.log("Fruits Array:", fruits); // Output: ["apple", "banana", "cherry"]
//substring method
const subStr = message.substring(7, 14);
console.log("Substring:", subStr); // Output: "welcome"


