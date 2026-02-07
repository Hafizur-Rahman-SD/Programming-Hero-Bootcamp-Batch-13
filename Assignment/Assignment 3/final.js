

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
