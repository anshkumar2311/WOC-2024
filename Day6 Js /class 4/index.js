// truthy and falsy values
// falsy values: undefined, null, 0, '', NaN, false ,document.all
// truthy values: NOT falsy values

/*
if (document.all) {
  console.log('Truthy');
}
else {
  console.log('Falsy');
}
*/

// asynchronous programming
// setInterval
// setTimeout
// fetch
// Axios
// promises
// async await
// const interval = setInterval(() => {
//   console.log('Hello');
// }, 2000); // 2 seconds = 2000 milliseconds
// setTimeout(() => {
//     clearInterval(interval);
// }, 10000); //band kr rhe hain 10 seconds baad


// fetch
// fetch('https://randomuser.me/api/')
//     .then((response) => {
//     return response.json();
//     })
// .then
//     ((data) => {
//     console.log(data.results[0].name.first);
//     })

//Axios
// axios.get('https://randomuser.me/api/')
//     .then((response) => {
//     console.log(response.data.results[0].name.first);
//     })
//     .catch((error) => {
//     console.log(error);
//     })


// generator
// [[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]
// function* generator() {
//     yield 1; console.log('Hello') ;
//     yield 2; console.log('world') ;
//     yield 3; console.log('ansh') ;
// }
// const gen = generator();
// console.log(gen.next());
// console.log(gen.next());


/*web worker*/
const nums=Array.from({length:100000},(v,i)=>i+1);
let worker = new Worker('worker.js');
worker.postMessage('Hello');
worker.onmessage = function(e) {
    console.log('Message received from worker');
    console.log(e.data);
}
