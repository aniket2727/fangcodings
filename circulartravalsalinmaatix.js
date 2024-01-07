




///circular travalsal in matrix
function circularTraversal(matrix) {
    const result = [];

    let startRow = 0,
        endRow = matrix.length - 1,
        startCol = 0,
        endCol = matrix[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        // Traverse top row
        for (let i = startCol; i <= endCol; i++) {
            result.push(matrix[startRow][i]);
        }
        startRow++;

        // Traverse right column
        for (let i = startRow; i <= endRow; i++) {
            result.push(matrix[i][endCol]);
        }
        endCol--;

        // Traverse bottom row
        if (startRow <= endRow) {
            for (let i = endCol; i >= startCol; i--) {
                result.push(matrix[endRow][i]);
            }
            endRow--;
        }

        // Traverse left column
        if (startCol <= endCol) {
            for (let i = endRow; i >= startRow; i--) {
                result.push(matrix[i][startCol]);
            }
            startCol++;
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const result = circularTraversal(matrix);
console.log(result);
