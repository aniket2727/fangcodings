




// find the missing value......




function findMissingNumber(arr, n) {
    // Calculate the expected sum of consecutive integers from 1 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the sum of the given array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Example usage:
const arrayWithMissingNumber = [1, 2, 4, 6, 3, 7, 8];
const n = 8; // The expected length of the array

const missingNumber = findMissingNumber(arrayWithMissingNumber, n);
console.log("Missing Number:", missingNumber);




