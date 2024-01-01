



// find polose in which store the maximum water

function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;

        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Example usage:
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(heights);
console.log("Maximum Area of Water:", result);
