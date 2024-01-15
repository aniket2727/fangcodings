// lesserbeamprobles

function lesserbeamProblems(data) {
    var prev = 0;
    var current = 0;
    var count = 0;
    var flag = false;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            if (data[i][j] == 1) {
                current++;
                flag = true;
            }
        }

        if (flag) {
            var temp = prev * current;
            count = count + temp;
            prev = current;
            current = 0;
            flag = false;
        }
    }

    return count; // Add this line to return the calculated count
}

var data = [
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0]
];

const result = lesserbeamProblems(data);
console.log(result);
