/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
const balance = 100;
const checkBalance = true;
const isActive = true;

// your code goes here
// Start only if checkBalance === true
if (isActive === true) {
    // Cases when account is active. Now, the balance could be <, =, or > zero
    if (checkBalance === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (checkBalance === true && balance === 0) {
        console.log("Your account is empty.");
    }
    else if (checkBalance === true && balance < 0) {
        console.log("Your balance is negative. Please contact bank.");
    }
    // Case when account is NOT active
    else if (checkBalance === false) {
        console.log("Your account is no longer active.");
    }

}
else {
    console.log("Thank you. Have a nice day!");
}
