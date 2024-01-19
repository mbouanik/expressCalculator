const expressError = require("./errors");

function findMean(nums) {
  return Math.round(nums.reduce((a, b) => a + b) / nums.length);
}

function findMedian(nums) {
  if (!(nums.length % 2)) {
    const index = nums.length / 2 - 1;
    return (result = Math.round((nums[index] + nums[index + 1]) / 2));
  } else {
    return (result = nums[Math.floor(nums.length / 2)]);
  }
}

function findMode(nums) {
  let count = {};
  let maxNum = 0;
  for (n of nums) {
    if (n in count) {
      count[n] += 1;
    } else {
      count[n] = 1;
    }
    if (count[n] > maxNum) {
      maxNum = count[n];
    }
  }
  let result = [];
  for ([k, v] of Object.entries(count)) {
    if (v == maxNum) {
      result.push(k);
    }
  }
  return result;
}
function converToNumber(nums) {
  n = nums.split(",").map(function (x) {
    if (isNaN(x)) {
      throw new expressError(`Bad Request '${x}' not a number`, 400);
    } else {
      return Number(x);
    }
  });
  return n;
}
module.exports = {
  findMean: findMean,
  findMedian: findMedian,
  findMode: findMode,
  converToNumber: converToNumber,
};
