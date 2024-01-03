function longestNonRepeatingSubstring(s) {
    let n = s.length;
    let start = 0;  // Start index of the current substring
    let maxLength = 0;  // Length of the longest non-repeating substring
    let lastSeen = {};  // Object to store the last index of each character

    for (let end = 0; end < n; end++) {
        if (s[end] in lastSeen && lastSeen[s[end]] >= start) {
            // If the character is already in the current substring,
            // update the start index to the next position after the last occurrence
            start = lastSeen[s[end]] + 1;
        }

        // Update the last index of the current character
        lastSeen[s[end]] = end;

        // Update the maximum length if the current substring is longer
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Return the longest non-repeating substring
    return s.slice(start, start + maxLength);
}

// Example usage:
let inputString = "abcabcbb";
let result = longestNonRepeatingSubstring(inputString);
console.log(result);
