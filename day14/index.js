const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const elfZone = document.getElementById("elf-hangout-zone");

let elfCount = 1;
const maxElfCount = 20;

btn.addEventListener("click", duplicateElf);

function duplicateElf() {
  if (elfCount >= maxElfCount) {
    btn.style.display = "none";
    alert("To many elfs");
    return;
  }
  let duplicatedElf = elf.cloneNode(true);
  let cup = document.createElement("div");
  cup.id = "cup";
  cup.innerHTML = "☕";
  elfZone.appendChild(cup);
  elfZone.appendChild(duplicatedElf);
  elfCount++;
}
/** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/
