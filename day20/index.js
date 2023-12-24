const dangerArray = [
  ["🎅", "👺"],
  [
    ["🎅", "🦁"],
    ["👹", "🎅"],
  ],
  [
    [
      ["🎅", "🐻"],
      ["🧌", "🎅"],
    ],
    [
      ["🐯", "🎅"],
      ["🎅", "😈"],
    ],
  ],
];

function saveSantaEasy(arr) {
  const flatArray = arr.flat(Infinity);
  const newArray = flatArray.filter((element) => element === "🎅");

  return newArray;
}

function removeElementsOtherThan(arr, enemies) {
  return arr
    .map((item) => {
      if (Array.isArray(item)) {
        const filteredSubarray = removeElementsOtherThan(item, enemies);
        return filteredSubarray.length ? filteredSubarray : null;
      } else {
        return item === enemies ? item : null;
      }
    })
    .filter((item) => item !== null);
}

function saveSantaHard(arr) {
  return removeElementsOtherThan(arr, "🎅");
}

const santaSavedEasy = saveSantaEasy(dangerArray);
const santaSavedHard = saveSantaHard(dangerArray);
console.log(santaSavedEasy);
console.log(santaSavedHard);

// I decided to test if it works with any array

const testDangerArray = [
  ["🎅", "👺", "👺", "👺"],
  [
    ["🎅", "🦁", "👺", "👺"],
    ["👹", "🎅", "👺", "👺"],
  ],
  [
    [
      ["🎅", "🐻", "🐻", "🐻", "🐻"],
      ["🧌", "🎅", "🐻", "🐻", "🐻"],
    ],
    [
      ["🐯", "🎅", "hello", "🐻", "if you are reading this you are cool"],
      ["🎅", "😈", "🐻", "🐻", "🐻", "🐻"],
    ],
  ],
];

const testSantaSavedEasy = saveSantaEasy(testDangerArray);
const testSantaSavedHard = saveSantaHard(testDangerArray);
console.log("it works with any array 😎: ");
console.log(testSantaSavedEasy);
console.log(testSantaSavedHard);
