// // Array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[1]);

// let student = ["Rahul", "Rohit", "Aaj", "Ravi", "Bahul"];
// let [a, b, c, d, e] = student;
// console.log(a,b,c,d,e);

// let student = ["Rahul", "Rohit", "Aaj", "Ravi", "Bahul"]; let student2=["Ansh", "Ankit", "Ankur", "Anshul", "Anshu"];
// student.push("Ansh");
// console.log(student);
// student.pop();
// console.log(student);
// student.unshift("Ansh");
// console.log(student);
// student.shift();
// console.log(student);
// let allStudents = student.concat(student2);
// console.log(allStudents);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach((item, index) => {
//     console.log(item*3, index);
// })

// let odd = numbers.filter((num) => num % 2 !== 0);
// console.log(odd);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let num2 = num.map((item) => item * 3);
// let num2 = num.map((item) => {
//     return item * 3;
// });
// console.log(num2);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = num.reduce((acc, item) => {
//     return acc + item;
// }, 0);
// console.log(sum);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let found = num.find((item) => {
//     return item > 1 && item < 5;
// });
// console.log(found);

// let num = [5, 1, 44, 99, 76, 54, 66, 6, 7, 8, 9];
// let student = ["Rahul", "Rohit", "Aaj", "Ravi", "Bahul"];
// let sorted = student.sort();  //only ascending order
// console.log(sorted);
// let sorted = student.sort((a, b) => {
//     return a.localeCompare(b); //string
//     // return a - b; //number
// }); //agar ham function likhenge to function(a,b){}vrna arrow lagana padega
// console.log(sorted);
// console.log(num);



//object
// let student = {
//     name: "Ansh",
//     age: 20,
//     city: {
//         name: "Delhi",
//         pincode: 110085
//     },
//     hobbies: ["coding", "reading", "writing"]
// }
// const { name, age, city, hobbies } = student;
// console.log(student.city.name);
// console.log(student.name);


//destructuring default value
// const colors = ["red", "green", "blue", "yellow", "pink"];
// const [primary, secondary] = colors;
// console.log(primary, secondary);


// nested destructuring
// const apiResponse = {
//     status: "success",
//     data: {
//         user: {
//             name: "Ansh",
//             age: 20
//         }
//     }
// }
// const { status, data: { user:{name} } } = apiResponse;
// // console.log(apiResponse.data.user.name);
// console.log(name);



// template literals

// let name = `Ansh
// kndknlkw`;
// console.log(name);

// let name = "Ansh";
// let age = 18;
// let city = "Delhi";
// let str = `My name is ${name}, my age is ${age} and I live in ${city}`;
// console.log(str);


// function sum(...args) {
//     // return args.reduce((acc, item) => {
//     //     return acc + item;
//     // }, 0);
//     return args.reduce(
//         (total, num) =>
//             total + num, 0  //0 is the initial value
//     );
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));


// let user = 'Ansh';
// let admin = [...user];
// console.log(admin); //["A", "n", "s


const fetchData = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Data fetched successfully");
    } else {
        reject("Data not fetched");
    }
}
);
fetchData.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
