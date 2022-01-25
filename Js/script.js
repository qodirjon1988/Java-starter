///*-------------- ARRAY Methods  --------------*\\\
// .pop ------ arrayni oxiridagi elementni o'chiradi va consolga chiqarib beradi
// .push -------- arrayni oxiriga element qo'shadi
// .toString -------- arrayni elementlarini string qilib beradi
// .join("and") -------- arrayni stringa aylantiradi va orasiga 'and' qo'shib beradi
// .shift() --------- arrayni 1 chi elementini o'chiradi
// .unshift('element1') ---------- arrayni boshiga 'element1' ni qo'shib beradi

// const usernames = ["Abror", "Akmal", "Akram", "Baxrom"];
// usernames.push("Javlon");

// let jon = ["Smith", "John", "Eddy", 232323];
// let stephan = jon;
// stephan[1] = "Javlon";
// console.log(jon, stephan);

// const list = document.getElementById("list");
// const usernames = ["Bob", "jon", "glory"];

// for (let username of usernames) {
//   let li = document.createElement("li");
//   li.innerHTML = username;
//   list.appendChild(li);
// }

// const list = document.getElementById("list");
// const database = {
//   usernames: ["olim", "salim", "halim"],
//   ages: [23, 33, 30],
// };
// let users = [];
// for (let i = 0; i < database.usernames.length; i++) {
//   database.usernames[
//     i
//   ] = `<li> ${database.usernames[i]} is ${database.ages[i]} years old </li>`;
// }
// list.innerHTML = database.usernames.join("");

//* ------------ HOMEWORK ----------------*\\
// const list = document.getElementById("list");
// const users = [
//   { user: "John", age: 25 },
//   { user: "Smith", age: 26 },
//   { user: "Lucy", age: 24 },
//   { user: "Lucy", age: 24 },
//   { user: "Lucy", age: 24 },
//   { user: "Lucy", age: 24 },
//   { user: "Lucy", age: 24 },
// ];
// const listItems = [];

// for (let i = 0; i < users.length; i++) {
//   const li = `<li>${users[i].user} is   ${users[i].age}  years old </li>`;
//   listItems.push(li);
// }

// list.innerHTML = listItems.join(" ");

// function printHello() {
//   let hi = "Hello World!";

//   function say() {
//     console.log(hi);
//   }
//   say();
// }
// printHello();

// const box = document.getElementById("box");

let randomColors = [
  "#fff",
  "#ff0",
  "#f0f",
  "#ff7700",
  "#e7f5",
  "#7777",
  "#f5f5f5",
];

// const generateRandomNum = function () {
//   const rdm = Math.floor(Math.random() * randomColors.length);
//   return rdm;
// };

// document.body.addEventListener("click", function () {
//   document.body.style.backgroundColor = randomColors[generateRandomNum()];
// });
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

const generateRandomNum = function () {
  const rdm = Math.floor(Math.random() * randomColors.length);
  return rdm;
};
box1.addEventListener("click", function () {
  box1.style.backgroundColor = randomColors[generateRandomNum()];
  box2.style.backgroundColor = randomColors[generateRandomNum()];
  box3.style.backgroundColor = randomColors[generateRandomNum()];
});
box2.addEventListener("click", function () {
  box1.style.backgroundColor = randomColors[generateRandomNum()];
  box2.style.backgroundColor = randomColors[generateRandomNum()];
  box3.style.backgroundColor = randomColors[generateRandomNum()];
});
box3.addEventListener("click", function () {
  box1.style.backgroundColor = randomColors[generateRandomNum()];
  box2.style.backgroundColor = randomColors[generateRandomNum()];
  box3.style.backgroundColor = randomColors[generateRandomNum()];
});
