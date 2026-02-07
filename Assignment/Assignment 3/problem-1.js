


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



console.log(newPrice('15000', 20));     
console.log(newPrice(2000, 150));     
console.log(newPrice(1200, 70));      
console.log(newPrice("1000", 10));  
console.log(newPrice(2000, 17.17));  
console.log(newPrice(500, "5"));     
console.log (newPrice('Hafizur', -5));    
console.log (newPrice(1000, -150));
console.log (newPrice(NaN, 10));
console.log (newPrice(100, 100));
console.log (newPrice(100, 0));