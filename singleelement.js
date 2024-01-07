function findSingleElement(data) {
    var result = 0;

    data.forEach(element => {
        result ^= element;
    });

    return result;
}

const arr = [1, 2, 3, 3, 2];
var result = findSingleElement(arr);
console.log(result);




// simple approch


function singleValue(data) {
    var s = null;
    var arr = {};

    data.forEach(item => {
        if (!arr[item]) {
            arr[item] = 1;
        } else {
            arr[item]++;
        }
    });

    for (var key in arr) {
        if (arr[key] == 1) {
            s = key;
            break;
        }
    }

    return s;
}

const data = [1, 1, 2, 3, 3];
let answer = singleValue(data);
console.log(answer);
