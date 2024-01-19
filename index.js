const express = require("express");
const expressError = require("./errors");
const { findMean, findMedian, findMode, converToNumber } = require("./helpers");
const app = express();
app.use(express.json());

app.get("/mean", (req, res, next) => {
  try {
    console.log(req.query.nums);
    if (!req.query.nums) {
      const e = new expressError(`nums are required`, 400);
      next(e);
    }

    const nums = converToNumber(req.query.nums);
    console.log(nums.sort());
    return res.json({
      operation: "mean",
      value: findMean(nums),
    });
  } catch (err) {
    next(err);
  }
});

app.get("/median", (req, res, next) => {
  if (!req.query.nums) {
    const e = new expressError(`nums are required`, 400);
    next(e);
  }

  const nums = converToNumber(req.query.nums);
  return res.json({
    operation: "median",
    value: findMedian(nums),
  });
});

app.get("/mode", (req, res, next) => {
  if (!req.query.nums) {
    const e = new expressError(`nums are required`, 400);
    next(e);
  }

  const nums = converToNumber(req.query.nums);
  return res.json({
    operation: "mode",
    value: findMode(nums),
  });
});

app.use(function (err, req, res, next) {
  let status = err.status || 500;
  let message = err.msg || err.stack;

  return res.status(status).json({
    error: { message, status },
  });
});
app.listen(3000, () => {
  console.log("app started at port:3000");
});
