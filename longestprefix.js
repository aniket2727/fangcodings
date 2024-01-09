



// longest prefix in array




function longestprefix(data){

    data.sort()

    var first=data[0]
    var last=data[data.length-1]
    var i=0
    while (i < first.length && first[i] === last[i]) {
        i += 1;
    }
    return first.substring(0, i);
}

var data=["aniket","ankit","aniridg","angha"]
const result=longestprefix(data)
console.log('result is',result)

