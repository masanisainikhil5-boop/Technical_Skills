// Number of rows in the pyramid
let n = 5;

// This string will store the full pyramid before printing it
let pattern = ""

// Outer loop: one pass for each row from 1 to n
for (let i = 1; i <= n; i++) {
    // First inner loop: add spaces before the stars
    // This keeps the pyramid centered
    // For row 1, we add 4 spaces; for row 2, 3 spaces; and so on
    for (let j = 1; j <= n - i; j++) {
        pattern += " "
    }

    // Second inner loop: print the stars for this row
    // The number of stars is odd: 1, 3, 5, 7, 9
    for (let k = 0; k < 2 * i - 1; k++) {
        pattern += "*"
    }

    // Move to next line after finishing one row
    pattern += '\n'
}

// Print the complete pyramid pattern
console.log(pattern);