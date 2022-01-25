const list = document.getElementById("list");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const database = [
  { Num: 1, Name: "Oybek", PhoneNumber: 1111111 },
  { Num: 2, Name: "Abdulaziz", PhoneNumber: 2222222 },
  { Num: 3, Name: "Jahongir", PhoneNumber: 3333333 },
  { Num: 4, Name: "Dilshoda", PhoneNumber: 4444444 },
  { Num: 5, Name: "QOdirjon", PhoneNumber: 5555555 },
];
listItems = [];
function addListItem() {
  for (let i = 0; i < database.length; i++) {
    const li = `<li>${database[i].Num} ${database[i].Name} ${database[i].PhoneNumber}   </li>`;
    listItems.push(li);
  }
}

let inc = 0;

btn1.addEventListener("click", function () {
  listItems.push(
    `<li>
      ${database[inc].Num} ${database[inc].Name} ${database[inc].PhoneNumber}
    </li>`
  );
  inc++;
  if (inc === 5) {
    inc = 0;
  }

  list.innerHTML = listItems.join(" ");
});
btn2.addEventListener("click", function () {
  listItems.pop();
  list.innerHTML = listItems.join(" ");
});
btn3.addEventListener("click", function () {
  listItems.shift();
  list.innerHTML = listItems.join(" ");
});
