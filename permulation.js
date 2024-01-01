


// permutation cde in javascript


function generatePermutations(arr) {
    const result = [];

    function permute(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const next = current.concat(remaining[i]);
            const remainingCopy = remaining.slice(0, i).concat(remaining.slice(i + 1));
            permute(next, remainingCopy);
        }
    }

    permute([], arr);
    return result;
}

// Example usage:
const inputArray = [1, 2, 3];
const permutations = generatePermutations(inputArray);
console.log(permutations);
