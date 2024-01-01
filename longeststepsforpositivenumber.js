

// what is added to number so that sum becaem positive



function findMinimumPositiveValue(steps) {
    let sum = 0;
    let minPositiveValue = Infinity;

    for (const step of steps) {
        sum += step;
        minPositiveValue = Math.min(minPositiveValue, sum);
    }

    // If the minimum positive value is still Infinity, it means the sum is already positive
    return minPositiveValue === Infinity ? 0 : Math.abs(minPositiveValue) + 1;
}

// Example usage:
const steps = [2, -3, 1, -4, 2];
const result = findMinimumPositiveValue(steps);
console.log("Minimum Positive Value to Get Positive Steps:", result);
