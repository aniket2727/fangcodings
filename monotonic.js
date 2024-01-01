


// check if array is monotonic or not





function isMonotonic(arr) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            decreasing = false;
        } else if (arr[i] < arr[i - 1]) {
            increasing = false;
        }
    }

    if (increasing || decreasing) {
        return 1; // Monotonic
    } else {
        return -1; // Not monotonic
    }
}

let arr = [1, 2, 3, 1, 5];
const result = isMonotonic(arr);
console.log(result);
