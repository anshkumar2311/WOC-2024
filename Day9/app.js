// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }
// // sayHello(`Ansh`);

// var msg = "";
// console.log(global.msg);

// setTimeout(handler)
// setInterval(handler)
// console.log(module);

var url = "http://mylearning/log";
var name = "ansh";

console.log(name);

function log(msg, name) {
  console.log(msg);
  console.log(`hello ${name}`);
}

module.exports.log = log;
module.exports.url = url;
module.exports.name = name;

// console.log(module);
