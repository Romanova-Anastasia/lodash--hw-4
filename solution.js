const lodash = require("lodash");
const { data1, data2 } = require("./task");

//task1
const userSort = lodash.sortedIndexBy(data1, { age: 23 }, "age");
console.log(userSort);

//task2
const unionArray = lodash.unionBy(data1, data2);
console.log(unionArray);

//task3
const arrayAssign = lodash.assign(data2[1]);
console.log(arrayAssign); //original

const arrayAssignOmit = lodash.omit(arrayAssign, ["age"]);
console.log(arrayAssignOmit); //new

//task4
const arrayAssignJS = Object.assign(data2[0]);
console.log(arrayAssignJS); //original

const arrayNewAssignJS = Object.keys(data2[0])
  .filter((key) => key !== "age")
  .reduce((acc, key) => {
    acc[key] = data2[0][key];
    return acc;
  }, {});
console.log(arrayNewAssignJS); //new
