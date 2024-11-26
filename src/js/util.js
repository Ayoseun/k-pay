export function cleanNumber(input) {
    // Convert to a number first to handle scientific notation or floating point issues
    const num = Number(input);
    
    // Use toFixed() to round to 2 decimal places, then convert back to a number 
    // to remove unnecessary trailing zeros
    return Number(num.toFixed(2)).toString();
  }
  