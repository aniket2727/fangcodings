function longestCircularSubstring(arr) {
    // Concatenate the array with itself to handle circularity
    arr = arr.concat(arr);

    // Find the longest substring using Kadane's algorithm
    let maxSum = Number.NEGATIVE_INFINITY;
    let currentSum = 0;

    for (const num of arr) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    // If maxSum is still negative, all elements are negative, and we need to exclude the case where no element is selected
    if (maxSum < 0) {
        return 0;
    }

    return maxSum;
}


const circularArray = [8, -1, 3, 4];
const result = longestCircularSubstring(circularArray);
console.log(result);
