




function countSteps(n) {
    if (n === 0 || n === 1) {
        return 1; 
    } else {
        return countSteps(n - 1) + countSteps(n - 2);
    }
}


const numberOfStairs = 5;
const waysToClimb = countSteps(numberOfStairs);

console.log(`Number of ways to climb ${numberOfStairs} stairs: ${waysToClimb}`);
