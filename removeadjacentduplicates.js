

//remove all adjacent
function removeAdjacentDuplicateElements(arr) {
    // Filter out elements that have adjacent duplicates
    const resultArray = arr.filter((value, index, array) => {
        return index === 0 || index === array.length - 1 || (value !== array[index - 1] && value !== array[index + 1]);
    });

    return resultArray;
}

// Example usage:
const arr = [1, 2, 2, 1, 3, 4, 3, 3];
console.log("Original array:", arr);

// Remove elements with adjacent duplicates
const resultArray = removeAdjacentDuplicateElements(arr);
console.log("Array with elements having adjacent duplicates removed:", resultArray);
