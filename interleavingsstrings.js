


// interleaving strings



function interleaving(data1, data2, data3) {
    var a = data1.split('');
    var b = data2.split('');
    var c = data3.split('');

    var i = 0;
    var j = 0;

    for (const element of c) {
        if (i < a.length && element === a[i]) {
            i++;
        } else if (j < b.length && element === b[j]) {
            j++;
        } else {
            return -1;
        }
    }

    // Check if both a and b have been completely interleaved
    if (i === a.length && j === b.length) {
        return 1;
    } else {
        return -1;
    }
}

// Example usage
const first = "abcabc";
const second = "defce";
const third = "abcdefcabce";
const result = interleaving(first, second, third);
console.log(result);
