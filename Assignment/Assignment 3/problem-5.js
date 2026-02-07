function analyzeText(str) {

  if (typeof str !== "string") {
    return "Invalid";
  }

  if (str.trim() === "") {
    return "Invalid";
  }

  const words = str.split(" ");

  let longestWord = "";
  let totalChar = 0;

  for (let i = 0; i < words.length; i++) {

    // skip  extra spaces
    if (words[i] === "") {
      continue;
    }

    // count characters 
    totalChar = totalChar + words[i].length;

    // find longest word
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return {
    longwords: longestWord,
    token: totalChar
  };
}



 console.log(analyzeText("I am a little honest person"));
// { longwords: "little", token: 22 }

console.log(analyzeText("Hello world"));
// { longwords: "Hello", token: 10 }

// console.log(analyzeText("Keep coding keep shining"));
// { longwords: "shining", token: 21 }

// console.log(analyzeText(12345));
// "Invalid"

// console.log(analyzeText("Programming is fun"));
// { longwords: "Programming", token: 16 }

// console.log(analyzeText("A quick brown fox"));
// { longwords: "quick", token: 14 }

// console.log(analyzeText(" "));
// "Invalid"
console.log(analyzeText("JavaScript is awesome"));
// { longwords: "JavaScript", token: 19 }