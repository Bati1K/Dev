/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The value of the 1st, 3rd, and 7th elements should be doubled
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */
 
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.1, 67.00];
for (let index = 0; index < prices.length; index++){
  //change the value of first element
  if (index === 0) {
    prices[index] = prices[index] * 2;
  }
  //change the value of third element
  else if (index === 2) {
    prices[index] = prices[index] * 2;
  }
  //change the value of seventh element
  else if (index === 6) {
    prices[index] = prices[index] * 2;
  }
}

console.log(prices);
// your code goes here