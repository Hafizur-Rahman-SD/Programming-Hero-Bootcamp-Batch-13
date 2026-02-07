



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



    console.log(validOtp("ph-10985"));    // true
    console.log(validOtp("ph-1234"));     // false
    console.log(validOtp("abc-12345"));   // false
    console.log(validOtp(["ph-10985"]));  // "Invalid"
    console.log(validOtp(12345678));      // "Invalid"
    console.log(validOtp("ph-123456"));   // false
    console.log(validOtp("ar-1567"));
    console.log(validOtp("ph-12344"));  // True
    console.log(validOtp("ph-1234567")); //false
