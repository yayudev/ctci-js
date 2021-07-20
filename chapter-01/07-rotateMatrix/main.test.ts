import { rotateMatrix } from "./main";

describe("rotateMatrix", () => {
  it("should rotate a matrix a 3x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = rotateMatrix(matrix);

    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    expect(result).toEqual(true);
    expect(matrix).toEqual(expected);
  });

  it("should rotate a matrix a 4x4 matrix", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const result = rotateMatrix(matrix);

    const expected = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ];
    expect(result).toEqual(true);
    expect(matrix).toEqual(expected);
  });

  it("should rotate a matrix a 6x6 matrix", () => {
    const matrix = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
    ];
    const result = rotateMatrix(matrix);

    const expected = [
      [31, 25, 19, 13, 7, 1],
      [32, 26, 20, 14, 8, 2],
      [33, 27, 21, 15, 9, 3],
      [34, 28, 22, 16, 10, 4],
      [35, 29, 23, 17, 11, 5],
      [36, 30, 24, 18, 12, 6],
    ];
    expect(result).toEqual(true);
    expect(matrix).toEqual(expected);
  });
});
