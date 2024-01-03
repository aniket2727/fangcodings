
// if value are contious

function sortColors(data) {
    var a = [0, 0, 0];
    var len = a.length;

    data.forEach(element => {
        let temp = element - 1;
        a[temp] += 1;
    });

    var i = 0;
    var j = 0;

    while (i < len) {
        var temp = a[i];
        while (temp !== 0) {
            data[j] = i + 1; // Corrected this line
            temp--;
            j++;
        }
        i++;
    }

    return data;
}

// Example usage
var data = [1, 2, 3, 3, 1, 2];
var result = sortColors(data);
console.log(result);



// second approch



function sortColors(nums) {
    let low = 0;
    let high = nums.length - 1;
    let current = 0;

    while (current <= high) {
        if (nums[current] === 0) {
            // Swap with the low pointer
            [nums[current], nums[low]] = [nums[low], nums[current]];
            low++;
            current++;
        } else if (nums[current] === 2) {
            // Swap with the high pointer
            [nums[current], nums[high]] = [nums[high], nums[current]];
            high--;
        } else {
            // Move to the next element
            current++;
        }
    }

    return nums;
}

const nums = [2, 0, 2, 1, 1, 0];
const sortedColors = sortColors(nums);
console.log(sortedColors);