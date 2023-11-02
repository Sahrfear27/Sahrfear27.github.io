
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function sumMatrix(arr: number[][]) {
    //implement this
    let sumArray = 0;
    for (let row of matrix) {
        for (let col of row) {
            sumArray += col;
        }
    }
    return sumArray;
}
console.log(`The sum of ${matrix}  is ${sumMatrix(matrix)}`);