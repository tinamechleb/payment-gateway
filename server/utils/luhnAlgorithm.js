const luhnAlgorithm = (input) => {
    // Convert the input to an array of digits
    const digits = input.toString().split('').map(Number);
  
    // Reverse the array of digits
    const reversedDigits = digits.reverse();
  
    // Double every second digit
    const doubledDigits = reversedDigits.map((digit, index) => {
      return index % 2 === 1 ? digit * 2 : digit;
    });
  
    // Subtract 9 from digits greater than 9
    const normalizedDigits = doubledDigits.map((digit) => (digit > 9 ? digit - 9 : digit));
  
    // Calculate the sum of all digits
    const sum = normalizedDigits.reduce((acc, digit) => acc + digit, 0);
  
    // The number is valid if the sum is a multiple of 10
    return sum % 10 === 0;
  };
  
  module.exports = luhnAlgorithm;
  