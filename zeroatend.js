function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;

    // Iterate through the array and move non-zero elements to the beginning
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Swap non-zero element to the front
            [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
            nonZeroIndex++;
        }
    }

    // The nonZeroIndex now points to the first zero or beyond
    // Fill the remaining elements with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

// Example usage:
const array = [1, 0, 3, 0, 5, 0, 2];
console.log("Original array:", array);

// Move zeros to the end of the array
const resultArray = moveZerosToEnd(array);
console.log("Array with zeros at the end:", resultArray);
