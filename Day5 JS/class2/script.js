/*using math built in function*/

// console.log(Math.PI);
// console.log(Math.E);

// let x = 45;
// let y = 2;
// let z = 25;
// console.log(Math.round(x)); //round the no
// console.log(Math.floor(x)); //remove no after point
// console.log(Math.ceil(x)); //show next no if dec use
// console.log(Math.trunc(x)); //remove no after point
// console.log(Math.pow(x, y));//power
// console.log(Math.sqrt(x));//square root
// console.log(Math.abs(x));//convert neg no to sam postive no
// console.log(Math.sign(x));//tell sign if -no then -1 if +no then +1 if 0 then 0
// console.log(Math.sin(x));// x is radian
// console.log(Math.cos(x));// x is radian
// console.log(Math.tan(x));// x is radian
// console.log(Math.max(x, y, z)); //max among all
// console.log(Math.min(x, y, z));//min among all
// console.log(Math.log(10));// tell log value





/*Random Number*/
// const max = 100;
// const min = 50;
// a = (Math.floor(Math.random() * (max - min)) + min); //+min to start *part is for range
// console.log(a);


/*random number generator*/
// let roll = document.getElementById("roll");
// let value1 = document.getElementById("value1");
// let value2 = document.getElementById("value2");
// let value3 = document.getElementById("value3");
// const max = 6;
// const min = 1;
// let randomNum;
// roll.onclick = function () {
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     value1.textContent = randomNum1;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     value2.textContent = randomNum2;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     value3.textContent = randomNum3;
// }




/*if-else statement*/
// let a = window.prompt(`tell me the number`);
// a = Number(a);
// if (a >= 50) {
//     console.log(`Hei you are more than 50`);
// }
// else if (a >= 50 + a <= 50) {
//     console.log(`try hard more`);
// }
// else {
//     console.log(`hei  try more hard you are too behind`);
// }


// const subbtn = document.getElementById("subbtn");
// const inpage = document.getElementById("inpage");
// const outline = document.getElementById("outline");
// let age;
// subbtn.onclick = function () {
//     age = inpage.value;
//     age = Number(age);

//     if (age > 100) {
//         outline.textContent = `Hei budhe`;
//     }
//     else if (age >= 18) {
//         outline.textContent = `Hei you are 18+ you can enter`;
//     }
//     else if (age == 0) {
//         outline.textContent = `Hei you just born`;
//     }
//     else if (age < 0) {
//         outline.textContent = `Hei how you are below 0`;
//     }
//     else {
//         outline.textContent = `Hei you are not 18+ you can not enter`;
//     }
// }


// const checkinp = document.getElementById("checkinp");
// const visa = document.getElementById("visa");
// const Rozerpay = document.getElementById("Rozerpay");
// const Paypal = document.getElementById("Paypal");
// const subbtn = document.getElementById("subbtn");
// const p1 = document.getElementById("p1");
// const p2 = document.getElementById("p2");
// subbtn.onclick = function () {
//     if (checkinp.checked) {
//         p1.textContent=`You Subscribed us`
//     }
//     else {
//         p1.textContent=`You are not Subscribing us`
//     }
//     if (visa.checked) {
//         p2.textContent=`You are paying with visa`
//     }
//     else if (Rozerpay.checked) {
//         p2.textContent=`You are paying with Rozerpay`
//     }
//     else if (Paypal.checked) {
//         p2.textContent=`You are paying with Paypal`
//     }
//     else {
//         p2.textContent=`select any one method for payment`
//     }
// }



/*Ternary Operator shortcut for if else
        condition ? "if bali statement" : "else bali statement" */
// const age = 21;
// const message = age >= 18 ? "You are older than 18" : "you are young";
// console.log(message)

// let stud = true;
// const message = stud ? "You are student" : "you are not student";
// console.log(message)

// let purchase = window.prompt(`enter amout`);
// purchase = Number(purchase);
// let disc = purchase >= 100 ? 10 : 0;
// console.log(`Your discount for this is $${purchase - purchase *(disc/100)} `)
