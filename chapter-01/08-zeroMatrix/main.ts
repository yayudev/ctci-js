type Matrix<T> = Array<Array<T>>;

export function zeroMatrix(matrix: Matrix<number>): Matrix<number> {
  const rows = [];
  const cols = [];

  // Find the rows and columns with zeros
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        rows.push(row);
        cols.push(col);
      }
    }
  }

  // Set rows to 0
  for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      matrix[rows[row]][col] = 0;
    }
  }

  // Set cols to 0
  for (let col = 0; col < cols.length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][cols[col]] = 0;
    }
  }

  return matrix;
}
