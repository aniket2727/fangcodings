

// checking inputs is vald parenthesis

function isValid(data) {
    if (data[0] === '}' || data[0] === ')' || data[0] === ']') {
        return -1;
    }

    var a = [];

    data.forEach(element => {
        if (element === '{' || element === '(' || element === '[') {
            a.push(element);
        } else {
            if (element === '}') {
                var temp = a.pop();
                if (temp !== '{') {
                    return -1;
                }
            }
            if (element === ']') {
                var temp = a.pop();
                if (temp !== '[') {
                    return -1;
                }
            }
            if (element === ')') {
                var temp = a.pop();
                if (temp !== '(') {
                    return -1;
                }
            }
        }
    });

    return a.length === 0 ? 1 : -1;
}

// Example usage
const data = ['{', '{', '}', '}'];
const result = isValid(data);
console.log(result);
