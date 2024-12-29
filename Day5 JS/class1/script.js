/*console print*/
// console.log(`Hello world`);


/*window alert*/
// window.alert(`this is an alert`);


/* change element using id */
// document.getElementById("myid1").textContent = `Hello Ansh`




/*Variable*/
// let fullname = "Ansh Kumar"
// let age = 18;
// let email="ansh123@gmail.com"
// let isstudent = true;

// document.getElementById("p1").textContent = `My name is ${fullname}`;
// document.getElementById("p2").textContent = `My age is ${age}`;
// document.getElementById("p3").textContent = `Still Student ? ${isstudent}`;
// document.getElementById("p4").textContent=`Email id ${email}`



/*arithmatic operator*/

// let students = 30;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// students = students % 4;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 4;

// students++;
// students--;

// console.log(students);


/*operator preference
    parenthesis ()
    exponent **
    multiplication division modulo
    add sub
 */

// let ques = 10 + 3 ** 2 / 4 - 8 * (8 + 6);

// console.log(ques)




/*accept userinput
    1. easy proptway
    2. using html index*/

/*1.*/
// let usernam = window.prompt(`what is your name ?`)
// console.log(usernam)

/*2.*/
// let username;
// document.getElementById("mysub").onclick = function () {
//     username = document.getElementById("myinp").value;
//     window.alert(`Name submitted`);
//     console.log(username);
//     document.getElementById("myh1").textContent = `Hello ${username}`;
// }




/*type conversion = string Number boolen
    try different things in empty string
    and not given anythong*/

// let age = window.prompt(`How old are you`);
// age = Number(age);
// age += 1;
// console.log(age);

// let x="";
// let y="bcm";
// let z;
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)



/*const in js*/

// let pi = 3.14159;
// let radius = window.prompt(`Enter Radius`);
// radius = Number(radius);
// /*pi = 12165;*/    // in let we can change pi value it is not fixed
// circumference = 2 * pi * radius;
// console.log(circumference);

const PI = 3.14159;
let radius;
let circumference;
document.getElementById("mysub").onclick = function () {
    radius = document.getElementById("myinp").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(circumference);
    document.getElementById("myh3").textContent = `Your circumference is ${circumference} cm`;
}
