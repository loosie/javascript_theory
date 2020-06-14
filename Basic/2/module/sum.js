function sum(a,b) {
  return a+b;
}

module.exports = sum;


// sum.js
// module.exports = {
//   sum : (a,b) =>{
//     return a+b;
//   },
// }

// main.js
// const sum = require('./Basic/2/module/sum');
//
// var result = sum.sum(1,3);
// console.log("sum : ",  result);
