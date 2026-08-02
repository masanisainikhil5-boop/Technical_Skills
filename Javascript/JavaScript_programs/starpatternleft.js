// Number of rows in the pattern
let n = 5;

// This string will store the final pattern before printing it
let pattern = ""

// Outer loop: run once for each row
// For row 0, row 1, row 2, ... up to row 4
for (let i = 0; i < n; i++) {
    // Inner loop: print stars for the current row
    // j goes from 0 to n - i - 1, so the number of stars decreases as i increases
    // Example: row 0 -> 5 stars, row 1 -> 4 stars, row 2 -> 3 stars, ...
    for (let j = 0; j < n - i; j++) {
        // Add one star to the current row
        pattern += '*'
    }

    // Move to the next line after finishing one row
    pattern += '\n'
}

// Print the complete pattern on the console
console.log(pattern);
