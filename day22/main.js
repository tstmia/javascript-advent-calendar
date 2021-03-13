/**
 * day22 extract Matrix Column
 * @param {} matrix 
 * @param {*} column 
 * @returns 
 */
const extractMatrixColumn = (matrix, column) => {
    const retVal = [];
    for(let row of matrix){
        retVal.push(row[column]);
    }
    return retVal;
}

const modelAnswer = (matrix, column) => {
   return matrix.map(row => row[column]);
}

const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
const column = 2;

console.log(extractMatrixColumn(matrix, column));
console.log(modelAnswer(matrix, column));
