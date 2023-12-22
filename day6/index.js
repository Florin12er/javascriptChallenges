const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function generateSecretSantaPairs(arr) {
  let gift = arr.slice();
  for (let i = gift.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gift[i], gift[j]] = [gift[j], gift[i]];
  }
  const pairs = {};
  for (let i = 0; i < arr.length; i++) {
    pairs[arr[i]] = gift[i];
  }

  return pairs;
}
console.log(generateSecretSantaPairs(people));

let names = document.getElementById("names");
names.innerHTML = people;
let assignSecretSanta = document.getElementById("assign-secret-santa");
let secretSanta = document.getElementById("secret-santa");

assignSecretSanta.addEventListener("click", () => {
  const pairs = generateSecretSantaPairs(people);
  let htmlString = "<ul>";
  for (const [person, santa] of Object.entries(pairs)) {
    htmlString += `<li>${person} -> ${santa}</li>`;
  }
  htmlString += "</ul>";
  secretSanta.innerHTML = htmlString;
});
