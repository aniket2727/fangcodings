function addBinary(a, b) {
    let result = '';
    let carry = 0;

    // Make the lengths of a and b equal by padding with zeros
    while (a.length < b.length) {
        a = '0' + a;
    }

    while (b.length < a.length) {
        b = '0' + b;
    }

    // Iterate through the strings from right to left
    for (let i = a.length - 1; i >= 0; i--) {
        const bitA = parseInt(a[i]);
        const bitB = parseInt(b[i]);

        // Perform binary addition
        const sum = bitA + bitB + carry;
        result = (sum % 2) + result; // Append the least significant bit to the result
        carry = Math.floor(sum / 2); // Update the carry for the next iteration
    }

    // If there's still a carry after the loop, append it to the result
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

const binaryA = '1011';
const binaryB = '1101';
const result = addBinary(binaryA, binaryB);

console.log(`The sum of ${binaryA} and ${binaryB} is: ${result}`);
