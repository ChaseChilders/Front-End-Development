// add new heading

const newHeading = document.querySelector("#heading");
newHeading.innerText = "Toppings";

// add class to burger

const newBurger = document.querySelector("#burger");
newBurger.classList.add("list-item");

// add li to unordered list

function addLi() {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = "Bacon";
  ul.appendChild(li);
}

addLi();

// class solution

const listItem = document.createElement("li");
listItem.innerText = "Bacon";
listItem.classList.add("list-item");
listItem.id = "bacon";

const list = document.querySelector("#list");
list.appendChild(listItem);
