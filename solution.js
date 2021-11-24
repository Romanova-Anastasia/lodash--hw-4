const lodash = require("lodash");
const { data1, data2 } = require("./task");

//task1
const userSort = lodash.findIndex(data1, { age: 23 }, "age");

//task2
const unionArray = lodash.unionBy(data1, data2);

//task3
const arrayAssign = lodash.assign(data2[1]);
const arrayAssignOmit = lodash.omit(arrayAssign, ["age"]);

//task4
const arrayAssignJS = Object.assign(data2[0]);

const arrayNewAssignJS = Object.keys(data2[0])
  .filter((key) => key !== "age")
  .reduce((acc, key) => {
    acc[key] = data2[0][key];
    return acc;
  }, {});
