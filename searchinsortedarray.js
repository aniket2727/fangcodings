
// search in sorted list binary search list


function sortedSearch(data, n) {
    var start = 0;
    var end = data.length - 1; // Adjusted to the last index of the array

    while (start <= end) {
        var mid = Math.floor((start + end) / 2);

        if (data[mid] === n) {
            return mid; // Return the index of the found element
        } else if (data[mid] < n) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

const array = [1, 2, 3, 4, 5, 6];
const result = sortedSearch(array, 3);
console.log(result);
