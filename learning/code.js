// let obj = {
//   type: "Company",
//   location: "Noida",
// };

// console.log(obj.type);

// console.log(obj.location);

// let s1 = Symbol("Geeks");
// let s2 = Symbol("Geeks");
// console.log(s1 == s2);

// function greet(name) {
//   return "Hello, " + name + "!";
// }

// greet(); // "Hello, Mahima!"
// function greet() {
//   // Working (called function hoisting)
//   console.log("Hello, Mahima!");
// }

// var hello = function () {
//   // ! Error
//   console.log("Hello, Mahima!");
// };

// const person = {
//   name: "GFG",
//   greet: function () {
//     console.log("hello" + this.name);
//   },
// };

// console.log(person);
// console.log(typeof person);
// ===================
// function outer() {
//     let outerVar = "I'm in the outer scope!";

//     function inner() {
//         console.log(outerVar);
//     }
//     return inner;
// }

// const closure = outer();

// closure();
// closure();
// ===================
// const counter = (function () {
//   let count = 0;

//   return {increment: function () {count++;console.log(count);},reset: function () {count = 0;console.log("Counter reset");},};
// })();

// counter.increment();
// counter.increment();
// counter.reset();

// ===================
// let numbers = [1, 2, 3];
// let iter = numbers[Symbol.iterator]();
// ===================
// console.log(iter.next());
// const a = [1, 4, 9, 16, 25];
// const sr = a.map((num) => Math.sqrt(num));

// const sr = a.map(function (value, index) {
//   return { key: index, value: value };
// });

// console.log(sr);
// let s = "Geeks";

// const res = Array.prototype.map.call(s, (item) => "A" + item);
// console.log(res);
// ===================
//const a = ["10", "20", "30"];
//const b = a.map((s) => parseInt(s));

//console.log(b);
////////////////
// let mix = "A13BS2ZX";
// let arr = mix.split("")
//    .filter((a) => (!isNaN(a)))
//    .map((a) => a * a)
//    .join("");

//  console.log(arr);

// /////////////
//  let Biggest = ["Bla"," Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "Propaganda", "Other", "AAA", "Battery"];

//  let newarr = Biggest.reduce((prv, curr) =>
//    prv.length > curr.length ? prv : curr );

// console.log(newarr);

////////////////
// let str = "ali";
// let num = 123;
// console.log([...str]);
// console.log(String(num).split(""));

// import * as mathUtils from "./utils.js";

// console.log(mathUtils.pi);
// #############################################################################
// let checkEven = new Promise((resolve, reject) => {
//   let number = 4;
//   if (number % 2 === 1) resolve("The number is even!");
//   else reject("The number is odd!");
// });

// checkEven
//   .then((message) => console.log(message)) // On success
//   .catch((error) => console.error(error)); // On failure

// Promise.all([
//   Promise.resolve("Task 1 completed"),
//   Promise.resolve("Task 2 completed"),
//   checkEven,
// ])
//   .then((results) => console.log(results))
//   .catch((error) => console.error(error));

// ############################################################################# fetching github repos using js promises

// const url = `https://api.github.com/users/ali-ezghari/repos`;

// fetch(url)
// .then((res) => {
//   if (!res.ok) {
//     throw new Error(`Error => Status code: ${res.status}`);
//   }
//   return res.json();
// })
// .then((res) => {
//   res.forEach((element) => {
//     console.log(element["name"]);
//   });
// })
// .catch((err) => console.error(err));

//   .then((res) => res.json())

// ############################################################################# fetching github repos using js async and await
// const url = `https://api.github.com/users/ali-ezghari/repos`;
// const fetchRepos = async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     data.forEach((element) => {
//       console.log(element["name"]);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchRepos();
// const getData = async () => {
//     let y = await Promise.resolve("Hello World");
//     console.log(y);
// }

// console.log(1);
// getData();
// console.log(2);
// #############################################################################
// setTimeout(() => {
//   console.log("HI from timeout");
// }, 1);

// const getData = async () => {
//   let y = await Promise.resolve("hi from promise");
//   console.log(y);
// };
// getData();
// console.log("HI from global");

