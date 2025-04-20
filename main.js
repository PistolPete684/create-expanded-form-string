function expandedForm(num) {
  // Convert the number to a string
  let numString = num.toString();
  // Create an empty array to tabulate the numbers
  let expandedNumber = [];
  
  // A for loop to iterate through the string
  for (let i = 0; i < numString.length; i++) {
    // Setup a variable to use below
    let digit = numString[i]; 
    // Multiply the digit by the thousandths place in came from
    let placeValue = digit * Math.pow(10, numString.length - i - 1);
    
    // Filter for 0's with an if statement
    if (placeValue > 0) {
      // Push the numbers to the tabulation variable 
      expandedNumber.push(placeValue);
    }
  }
  // Return the string once they are joined together
  return expandedNumber.join(" + ");
}