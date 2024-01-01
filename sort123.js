




function sortArray(arr){
    const count=[0,0,0]


    for( const num in arr){
          count[num-1]++;
    }

    let index=0;
    for(let i=0;i<count.length;i++){
        while(count[i]>0){
            arr[index++]=i+1
            count[i]--;

        }
    }


    return arr
}



// Example usage:
const unsortedArray = [3, 1, 2, 3, 1, 2, 3];
const sortedArray = sortArray(unsortedArray);

console.log("Original Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);