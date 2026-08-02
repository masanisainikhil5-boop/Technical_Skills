// Declare the total number of rows for the pattern
const n = 5

// Function to print a pyramid/star pattern
const printpattern = (rows) =>{
    // Outer loop: controls the number of rows
    // i starts from 1 and goes up to the given number of rows
    for ( let i =1; i<= rows; i++){
        // Reset the string for each row so a fresh line is built
        let stars = ""

        // Inner loop: adds '*' repeated i times for each row
        // Example: row 1 -> "*", row 2 -> "**", row 3 -> "***"
        for (let j = 1; j<=i; j++){
            stars += "*"
        }

        // Print the current row pattern to the console
        console.log(stars)
    }
}

// Call the function with 5 rows to generate the pattern
printpattern(n)