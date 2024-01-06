

// circular array sum

function kadane(arr) {
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        maxGlobal = Math.max(maxGlobal, maxCurrent);
    }

    return maxGlobal;
}

function maxCircularSum(arr) {
    const n = arr.length;
    const nonCircularMaxSum = kadane(arr);

   
    const totalSum = arr.reduce((sum, num) => sum + num, 0);
    const invertedArr = arr.map(x => -x);
    const circularMaxSum = totalSum + kadane(invertedArr);

    
    return Math.max(nonCircularMaxSum, circularMaxSum);
}


const arr = [8, -1, 3, 4];
const result = maxCircularSum(arr);
console.log(result);
