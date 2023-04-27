/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
const shirtWidth = 18; // size S (small)
const shirtLength = 29; // size M (medium)
const shirtSleeve = 8.47; // size M (medium)

// your code goes here
if ((shirtWidth >= 18 && shirtwidth < 20) && 
    (shirtLength >= 28 && shirtLength <= 28.99) &&  // Size S(small)
    (shirtSleeve <= 8.379)) {
    console.log("your size is: S ");
} else if ((shirtWidth >= 22 && shirtWidth < 24) && 
            shirtLength === 30 && 
            shirtSleeve === 8.63) {
  console.log("N/A: size don't match."); 
} else {
  console.log("Don't have it.")
}