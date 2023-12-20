let countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmasDate = new Date(new Date().getFullYear(), 11, 25);
  let todayDate = new Date();
  let difference = christmasDate - todayDate;
  let remainingDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
  countdownDisplay.innerHTML = remainingDays;
}

renderCountdown();
