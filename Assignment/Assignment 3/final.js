

//Problem 1 Solution 

function newPrice(currentPrice, discount) {

  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }

  if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  const discountAmount = (currentPrice * discount) / 100;
  const finalPrice = currentPrice - discountAmount;

  return finalPrice.toFixed(3);
}


//Problem 2 Solution
function validOtp(otp) {
//type of input must be string
  if (typeof otp !== "string") {
    return "Invalid";
  }

  if (otp.length !== 8) {
    return false;
  }

  if (otp.startsWith("ph-") !== true) {
    return false;
  }

  return true;
}


//problem 3 Solution

function finalScore(omr) {

  // input must be an object
  if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
    return "Invalid";
  }

  const right = omr.right;
  const wrong = omr.wrong;
  const skip = omr.skip;

  if (typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number") {
    return "Invalid";
  }

  //  total questions  exactly 100
  if (right + wrong + skip !== 100) {
    return "Invalid";
  }

  const score = (right * 1) - (wrong * 0.5);

  return Math.round(score);
}


//problem 4 Solution
function gonoVote(array) {

  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let haCount = 0;
  let naCount = 0;

  //  count "ha" and "na"
  for (let i = 0; i < array.length; i++) {

    if (array[i] === "ha") {

      haCount++;
    } else if (array[i] === "na") {

      naCount++;
    }
  }

  if (haCount > naCount) {

    return true;
  } else if (haCount === naCount) {

    return "equal";
  } else {

    return false;
  }
}


//problem 5 Solution
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
