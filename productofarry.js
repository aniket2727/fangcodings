// Product of all array elements replaced by selected element

function productElement(data) {
    let productArray = data.reduce((prev, item) => prev * item, 1);

    for (let i = 0; i < data.length; i++) {
        data[i] = productArray / data[i];
    }

    return data;
}

const data = [1, 2, 3];
const result = productElement(data);
console.log(result);
