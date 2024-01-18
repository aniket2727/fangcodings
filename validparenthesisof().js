function longestValidParentheses(s) {
    const stack = [-1]; // Initialize the stack with -1 to handle edge cases
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (currentChar === '(') {
            stack.push(i);
        } else {
            // Pop the last index from the stack
            stack.pop();

            if (stack.length === 0) {
                // If the stack is empty, push the current index to act as a new starting point
                stack.push(i);
            } else {
                // Calculate the length of the valid parentheses substring
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
}

const example1 = "(()";
console.log(longestValidParentheses(example1)); // Output: 2

const example2 = ")()())";
console.log(longestValidParentheses(example2)); // Output: 4
