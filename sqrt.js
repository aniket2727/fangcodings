



//the square root of number



function sqrt(x) {
    if (x === 0 || x === 1) {
        return x;
    }

    let left = 1;
    let result = 0;
    let right = x;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Example usage:
const number = 100;
const sqrtResult = sqrt(number);
console.log(`The square root of ${number} rounded down is: ${sqrtResult}`);
