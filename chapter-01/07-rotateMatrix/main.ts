type Matrix2D<T> = Array<Array<T>>;

/*
 Note for blogpost:
 - matrix[row][col];                         // top
 - matrix[col][size - row];             // right
 - matrix[size - row][size - col]; // bottom
- matrix[size - col][row];              // left
*/

export function rotateMatrix(matrix: Matrix2D<number>): boolean {
  if (matrix.length !== matrix[0].length) return false;

  const size = matrix.length - 1;

  for (let row = 0; row < matrix.length / 2; row++) {
    const first = row;
    const last = size - row;

    for (let col = row; col < last; col++) {
      const temp = matrix[row][col]; // Top -> Temp
      matrix[row][col] = matrix[size - col][row]; // Left -> Top
      matrix[size - col][row] = matrix[size - row][size - col]; // Bottom -> Left
      matrix[size - row][size - col] = matrix[col][size - row]; // Right -> Bottom
      matrix[col][size - row] = temp; // Top/Temp -> Right
    }
  }

  return true;
}
