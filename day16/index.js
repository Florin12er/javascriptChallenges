const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
const addName = document.getElementById("add");
const nameInput = document.getElementById("name");
const niceOrNaughty = document.getElementById("good_not");

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

function sort(arr) {
  niceList.innerHTML = "";
  naughtyList.innerHTML = "";
  arr.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${person.name} 
            <button class="switch-button">Switch</button>
        `;
    listItem
      .querySelector(".switch-button")
      .addEventListener("click", () => switchList(person));
    person.hasBeenGood
      ? niceList.appendChild(listItem)
      : naughtyList.appendChild(listItem);
  });
}

function add() {
  if (nameInput.value === "") {
    alert("Please type the name");
    return;
  }

  const newItem = {
    name: nameInput.value,
    hasBeenGood: !niceOrNaughty.checked,
  };

  sorteesArr.push(newItem);
  sort(sorteesArr);
  nameInput.value = "";
}

function switchList(person) {
  person.hasBeenGood = !person.hasBeenGood;
  sort(sorteesArr);
}

btn.addEventListener("click", () => {
  sort(sorteesArr);
});

addName.addEventListener("click", () => {
  add();
});

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
