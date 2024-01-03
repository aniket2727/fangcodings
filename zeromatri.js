



// zero matrix code in javascript
function zeromatrix(matrix){

    let row=matrix.lenght;
    let col=matrix[0].lenght
    let zerocol=new Set();
    let zerorow=new Set();

    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(matrix[i][j]==0){
                zerorow.add(i)
                zerocol.add(j)
            }
        }
    }

    zerocol.forEach((row)=>{
        for (let j = 0; j < col; j++) {
            matrix[row][j] = 0;
        }
    })


    zerocol.forEach((col) => {
        for (let i = 0; i < row; i++) {
            matrix[i][col] = 0;
        }
    });

}



let matrix = [
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 0]
];

setZeroes(matrix);
console.log(matrix);