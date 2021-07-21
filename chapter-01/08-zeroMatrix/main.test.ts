import { zeroMatrix } from "./main";

describe("zeroMatrix", () => {
  it("should zero out one line in a 3x3 matrix", () => {
    const matrix = [
      [0, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [0, 0, 0],
      [0, 5, 6],
      [0, 8, 9],
    ];
    expect(zeroMatrix(matrix)).toEqual(expected);
  });

  it("should zero out two lines on 3x4 matrix", () => {
    const matrix = [
      [0, 2, 3, 4],
      [5, 6, 7, 0],
      [9, 10, 11, 12],
    ];
    const expected = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 10, 11, 0],
    ];
    expect(zeroMatrix(matrix)).toEqual(expected);
  });

  it("should return the original matrix if no 0s found", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const expected = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    expect(zeroMatrix(matrix)).toEqual(expected);
  });
});
