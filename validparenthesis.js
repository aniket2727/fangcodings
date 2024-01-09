function isValidParenthesis(input) {
    if (!input || input.length === 0) {
        return false;
    }

    const stack = [];

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === ' ' || char === '\t') {
            continue; // Ignore spaces and tabs
        }

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' && stack.pop() !== '(') {
            return false;
        } else if (char === '}' && stack.pop() !== '{') {
            return false;
        } else if (char === ']' && stack.pop() !== '[') {
            return false;
        }
    }

    return stack.length === 0;
}

const data = '() {} []';
const result = isValidParenthesis(data);
console.log(result);
