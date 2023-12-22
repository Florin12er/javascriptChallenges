const wishList = document.querySelector("ol");
const addWishButton = document.querySelector("button");
const typeWish = document.querySelector("input");
let wishlist = [];

const storedWishlist = localStorage.getItem("wishlist");
if (storedWishlist) {
  wishlist = JSON.parse(storedWishlist);
} else {
  wishlist = [
    "Macbook Air M2",
    "New iphone",
    "New nvidia rtx 4070",
    "oranges",
    "money",
  ];
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function renderWishlist() {
  wishList.innerHTML = "";
  wishlist.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    wishList.appendChild(listItem);
  });
}

renderWishlist();

addWishButton.addEventListener("click", () => {
  if (typeWish.value === "") return alert("Type your wish, please");
  wishlist.push(typeWish.value);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
  typeWish.value = "";
});

/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/
