// window.alert("Hello, World!");

// variable
// var name = "John";
// let age = 25;
// const country = "USA";
// console.log(name+age, country);

// let b;
// var a;
// function arc() {
//      a = 5;
//     let b = 10;

// }
// arc();
// console.log(a);
// console.log(b);

/*
let name = "ansh";
console.log(name);
function arc() {
    name = "john"; // agar mai name ke aage let laga dunga to vo nyi value lelega and vo global variable nhi rahega
    console.log(name);
}
arc();
console.log(name);
*/

// let a = null;//null string number boolean undefined agar value hi na de to undefined hota hai
// console.log(typeof a, a);


//comparism operator
// let num = '5';

// console.log(num == 5);
// console.log(num === 5);
// console.log(num > 5);
// console.log(num >= 5);
// console.log(num != 5);
// console.log(num !== 5);


// if else
// let sAge = 10;
// let sDrink = true;
// if (sAge> 60 && sDrink) {
//     alert('sayad ansh ke pass license h!')
// }else if(sAge > 60){
//     alert('ansh ko drive mt krne do!')
// } else {
//     alert('ansh ke pass license nhi h!')
// }

let unit = window.prompt("Enter the unit of electricity consumed");
unit=Number(unit);
let bill = 0;
function billcalculator() {
    if (unit <= 100) {
        bill = unit * 5;
    } else if (unit > 100 && unit<200) {
        bill = (100*5) + ((unit - 100) * 7);
    } else if(unit>=200) {
        bill = (100*5) + (100*7) + ((unit - 200) * 10);
    }
    return bill;
}
console.log(billcalculator());

let name = document.getElementById('name').value;
let btn = document.getElementById('btn');
btn.OnClick = function () {
    console.log(name);
}


// switch
// let day = "mon";

// switch (day) {
//   case "sun":
//     alert("weekend!!");
//     break;
//   case "mon":
//     alert("week!!");
//     break;
//   case "tue":
//     alert("week!!");
//     break;
//   case "wed":
//     alert("week!!");
//     break;
//     default:
//       alert("Data not found!!");
//     break;
// }
