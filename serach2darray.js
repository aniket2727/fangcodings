




// search into the 2d array in which elemets are in the sorted from the left to the right

// most effient

function search2darrayBinary(data, n) {
    const row = data.length;
    const col = data[0].length;
    let low = 0;
    let high = row * col - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midValue = data[Math.floor(mid / col)][mid % col];
  
      if (midValue === n) {
        return 1;
      } else if (midValue < n) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  
  const dataa = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const na = 7;
  const resultBinary = search2darrayBinary(dataa, na);
  console.log(resultBinary);
  


// First Method
function search2darray(data, n) {
    const row = data.length;
    const col = data[0].length;
  
    for (let i = 0; i < row; i++) {
      if (data[i][col - 1] === n) {
        return 1;
      } else if (data[i][col - 1] < n) {
        for (let j = 0; j < col; j++) {
          if (data[i][j] === n) {
            return 1;
          }
        }
      }
    }
    return -1;
  }
  
  const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const n = 7;
  const result = search2darray(data, n);
  console.log(result);
  
  
  // Second Method
  function searchArray(data, n) {
    let a = {};
  
    data.forEach((element) => {
      if (!a[element]) {
        a[element] = true;
      }
    });
  
    return Object.values(a).forEach((item) => {
      if (item === n) {
        return 1;
      }
    });
  
    return -1;
  }
  
  const result2 = searchArray(data, n);
  console.log(result2);
  