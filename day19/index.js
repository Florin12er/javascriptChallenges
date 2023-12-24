import JSConfetti from "js-confetti";
const christmasWords = [
  "Santa",
  "Snowman",
  "Sleigh",
  "Reindeer",
  "Stocking",
  "Ornament",
  "Mistletoe",
  "Gift",
  "Candy Cane",
  "Jingle Bells",
  "Christmas Tree",
  "Gingerbread",
  "Wreath",
  "Elf",
  "Joy",
  "Peace",
  "Festive",
  "Holly",
  "Nutcracker",
  "Chimney",
  "Snowflake",
  "Frosty",
  "Candle",
  "Tinsel",
  "Star",
  "Snow Globe",
  "Mittens",
  "Eggnog",
  "Caroling",
  "Poinsettia",
  "Icicle",
  "Sweater",
  "Fireplace",
  "Cocoa",
  "Marshmallow",
  "Sled",
  "Winter",
  "North Pole",
  "Sugarplum",
  "Silver Bells",
  "Wish",
  "Merry",
  "Bright",
  "Yule Log",
  "Cranberry",
  "Parade",
  "Silent Night",
];

function generateRandomChristmasWord() {
  const randomIndex = Math.floor(Math.random() * christmasWords.length);
  return christmasWords[randomIndex];
}

const randomChristmasWord = generateRandomChristmasWord();
const word = randomChristmasWord;

const wordArr = word.split("");
const wordDisplay = document.getElementById("word-display");
document.addEventListener("submit", handleGuess);

function renderSpaces() {
  const wordHtml = wordArr.map(() => {
    return `<span class="letter">-</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}
renderSpaces();

function renderGuess(arr) {
  const wordHtml = arr.map((letter) => {
    return `<span class="letter">${letter}</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}

function handleGuess(e) {
  e.preventDefault();
  /**
   * Debug Challenge:
   * 1. There are loads of problems with the
   *    code below. Find them and fix them!
   **/

  let currentState = [];
  let input = document.getElementById("user-input"); // bug the id is written wrong it should be user-input not users-input
  let guess = input.value; // Bug: Should get the value of the input, not the input itself.
  const guessArr = guess.split(""); // Bug: Split the guess, not the word.
  wordArr.forEach((letter, index) => {
    // Bug: The forEach function should take two arguments, letter and index. and guessArr should get index not empty string
    if (letter === guessArr[index]) {
      currentState.push(letter);
    } else {
      currentState.push("-"); // Bug: Replace letter with "-" to indicate incorrect guesses.
    }
  });
  /* bugs end 🦠*/
  renderGuess(currentState);
  checkWin(guess);
  input.value = "";
}

function checkWin(guess) {
  if (word === guess) {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["🧑‍🎄", "🎅"],
      emojiSize: 50,
      confettiNumber: 60,
      confettiRadius: 6,
    });
    jsConfetti.addConfetti();
  }
}
function refreshPage() {
  location.reload(true);
}
const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", refreshPage);
