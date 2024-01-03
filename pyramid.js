function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// Example usage:
let numRows = 5;
printPyramid(numRows);
