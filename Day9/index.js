// const logger = require("./app.js");
// // console.log(logger.url);

// logger.name = "bvjhs";
// console.log(logger.name);
// logger.log(`sorry`, `ansh`);

// path

// const path = require(`path`);
// var pathobj = path.parse(__filename);
// console.log(pathobj);

//os
// const os = require("os");
// var freeMemory = os.freemem();
// var totalMemory = os.totalmem();
// let upTime = os.uptimee();
// console.log(totalMemory);
// console.log(freeMemory);
// console.log(upTime);

//fs
const fs = require("fs");
var files = fs.readdirSync("/", function (error, files) {
  if (files) {
    console.log("Result", files);
  } else {
    console.log("err", error);
  }
});
console.log(files);
