



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



console.log(finalScore({ right: 67, wrong: 23, skip: 10 })); // 56
console.log(finalScore({ right: 80, wrong: 25, skip: 0 })); // "Invalid"
console.log(finalScore({ right: 50, wrong: 10, skip: 40 })); // 45
console.log(finalScore({ right: 30, wrong: 30, skip: 40 })); // 15
console.log(finalScore("!@#"));                             // "Invalid"
console.log(finalScore(["Raj"]));                            // "Invalid"
console.log(finalScore({ right: 70, wrong: 20, skip: 5 }));  // "Invalid"
console.log(finalScore({ right: 90, wrong: 5, skip: 5 }));   // 87.5