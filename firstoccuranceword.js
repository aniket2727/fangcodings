







// the first occorance of word at index


function firstOccurrence(handle1, word1) {
    return handle1.indexOf(word1);
}

const handle1 = "dataaniket";
const word1 = "ani";
const result1 = firstOccurrence(handle, word);

console.log(result1);


function firstOccurrence(handle, word) {
    var j = 0;
    var count = 0;

    // Iterate through each character of 'handle'
    for (let i = 0; i < handle.length; i++) {
        // Check if the current character matches the corresponding character in 'word'
        if (handle[i] === word[j]) {
            j++;
            count++;

            // Check if the entire 'word' is found in 'handle'
            if (count === word.length) {
                // Return the index where the first occurrence starts
                return i - count + 1;
            }
        } else {
            // Reset the count if characters don't match
            j = 0;
            count = 0;
        }
    }

    // Return -1 if the 'word' is not found in 'handle'
    return -1;
}

const handle = "dataaniket";
const word = "ani";
const result = firstOccurrence(handle, word);

console.log(result);
