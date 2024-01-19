const { findMean, findMedian, findMode, converToNumber } = require("./helpers");

describe("mean", () => {
  it("return the mean of array", () => {
    expect(findMean([1, 2, 3, 4, 5])).toBe(3);
  });
});

describe("median", () => {
  it("return the medina of array", () => {
    expect(findMedian([1, 2, 3, 4, 5])).toBe(3);
  });
});

describe("mode", () => {
  it("return the mode of array", () => {
    expect(findMode([1, 2, 3, 4, 5, 5, 5])).toEqual(["5"]);
  });
});

describe("convert to number", () => {
  it("return array of  numbers", () => {
    expect(converToNumber("1,2,3,4,5")).toEqual([1, 2, 3, 4, 5]);
  });
});
