


// remove duplicates from the sortded array


function removeDuplicates(data) {
    var i = 0;

    while (i < data.length - 1) {
        if (data[i] === data[i + 1]) {
            // Remove the duplicate element
            data.splice(i + 1, 1);
        } else {
            // Move to the next element
            i = i + 1;
        }
    }

    return data;
}


var data=[1,1,2,3,3,4]
const result=removeduplicates(data)
console.log(result)
