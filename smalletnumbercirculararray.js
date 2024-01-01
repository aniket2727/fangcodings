function findSmallestInCircularArray(arr) {
    if (arr.length === 0) {
        return null;
    }

    let minElement = arr[0];
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }

    return minElement;
}


const circularArray = [8, 9, 10, 2, 5, 6];
const smallestElement = findSmallestInCircularArray(circularArray);
console.log("Smallest Element in Circular Array:", smallestElement);
