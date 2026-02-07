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



console.log(gonoVote(["ha", "na", "ha", "na"])); // "equal"
console.log(gonoVote(["ha", "na", "na"]));      // false
console.log(gonoVote(["ha", "ha", "ha", "na"]));// true
console.log(gonoVote("ha, na"));                // "Invalid"
console.log(gonoVote(12345));                   // "Invalid"
console.log(gonoVote(["ha", "ha", "na", "ha", "na", "ha", "ha"])); // true
console.log(gonoVote(["na", "na", "ha", "na", "ha", "na"]));
console.log(gonoVote([])); // "equal"
console.log(gonoVote(["ha", "ha", "ha"])); // true
