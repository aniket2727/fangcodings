


// house robbery problems   leetcode

function houserobbery(data) {
    if (data.length < 1) {
        return 0;
    }

    if (data.length <= 1) {
        return data[0];
    }

    let a = 0;
    let b = 0;

    for (let i = 0; i < data.length; i += 2) {
        a += data[i] || 0;
        b += data[i + 1] || 0;
    }

    return a > b ? a : b;
}

// Example usage
const data = [1, 2, 4, 3, 4, 4];
const result = houserobbery(data);
console.log(result);




