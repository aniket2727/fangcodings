



// happy  numbers leetcode problems

function happynumbers(n) {
    const newset = new Set();
    
    while (n !== 1 && !newset.has(n)) {
        newset.add(n);
        n = getproducts(n);
    }

    return n === 1;

    function getproducts(data) {
        let sum = 0;
        while (data > 0) {
            let a = data % 10;
            sum = sum + (a * a);
            data = Math.floor(data / 10);
        }
    
        return sum;
    }
}

const n = 19;
const result = happynumbers(n);
console.log(result);

