var findKthLargest = function(nums, k) {
    // Sort the array in descending order
    nums.sort((a, b) => b - a);

    // Return the kth largest element
    return nums[k - 1];
};


var myArray = [3, 1, 4, 1, 5, 9, 2, 6];
var kValue = 3;

var result = findKthLargest(myArray, kValue);
console.log("The", kValue + "th largest element is:", result);