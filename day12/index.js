const xmasGifts = [
  "guitar 🎸",
  "skates ⛸️",
  "bear 🧸",
  "magnet 🧲",
  "laptop 💻",
  "games console 🎮 ",
  "jewellery 💍",
  "kite 🪁",
];

const sortedAZ = xmasGifts.toSorted();
console.log("A-Z: ", sortedAZ);
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "magnet🧲", "skates ⛸️"

const sortedZA = xmasGifts.toSorted().reverse();
console.log("Z-A: ", sortedZA);

//["skates ⛸️", "magnet 🧲", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]

// sorting algorithm:

function mergeSort(arr) {
  const half = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}
const sortedGifts = mergeSort(xmasGifts);
console.log("A-Z : ", sortedGifts);
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "magnet🧲", "skates ⛸️"

const ReversedGifts = sortedGifts.reverse();
console.log("Z-A:", ReversedGifts);
//["skates ⛸️", "magnet 🧲", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]
