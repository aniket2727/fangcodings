function shortestDistance(matrix, start, end) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const directions = [ [-1, 0], [1, 0], [0, -1], [0, 1] ];

    const queue = [ [start[0], start[1], 0] ];
    const visited = new Set([`${start[0]},${start[1]}`]);

    while (queue.length > 0) {
        const [currentRow, currentCol, distance] = queue.shift();

        if (currentRow === end[0] && currentCol === end[1]) {
            return distance;
        }

        for (const [dr, dc] of directions) {
            const newRow = currentRow + dr;
            const newCol = currentCol + dc;
            const positionKey = `${newRow},${newCol}`;

            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                !visited.has(positionKey) &&
                matrix[newRow][newCol] === 0
            ) {
                queue.push([newRow, newCol, distance + 1]);
                visited.add(positionKey);
            }
        }
    }

    // If no path is found
    return -1;
}


const matrix = [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
];

const startPoint = [0, 0];
const endPoint = [4, 4];

const result = shortestDistance(matrix, startPoint, endPoint);

if (result !== -1) {
    console.log(`The shortest distance from ${startPoint} to ${endPoint} is ${result} units.`);
} else {
    console.log(`There is no path from ${startPoint} to ${endPoint}.`);
}
