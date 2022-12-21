let count = 0;
let click = 0;
let firstCard = "";
let secondCard = "";
const gameSpaces = document.querySelectorAll(".gameSpace");
const reset = document.getElementById("reset");
const clicks = document.getElementById("clicks");
const record = document.getElementById("record");

gameSpaces.forEach((gameSpace) => {
  gameSpace.addEventListener("click", showCard);
});

reset.addEventListener("click", resetGame);

function resetGame() {
  gameSpaces.forEach((gameSpace) => {
    gameSpace.innerHTML = "";
    gameSpace.disabled = false;
  });
  if (
    (record.innerHTML === "" && clicks.innerHTML >= 16) ||
    click <= record.innerHTML
  ) {
    record.innerHTML = click;
  }
  click = 0;
  clicks.innerHTML = "";
}

function toggleClicks() {
  gameSpaces.forEach((gameSpace) => {
    gameSpace.classList.toggle("preventClick");
  });
}

function clearCards(event) {
  firstCard.innerHTML = "";
  secondCard.innerHTML = "";
  count = 0;
  firstCard.disabled = false;
  secondCard.disabled = false;
  firstCard = "";
  secondCard = "";
  toggleClicks();
}

function showCard(event) {
  count++;
  click++;
  clicks.innerHTML = click;
  if (event.target.classList.contains("-1")) {
    event.target.innerHTML = "!";
  } else if (event.target.classList.contains("-2")) {
    event.target.innerHTML = "@";
  } else if (event.target.classList.contains("-3")) {
    event.target.innerHTML = "#";
  } else if (event.target.classList.contains("-4")) {
    event.target.innerHTML = "$";
  } else if (event.target.classList.contains("-5")) {
    event.target.innerHTML = "%";
  } else if (event.target.classList.contains("-6")) {
    event.target.innerHTML = "^";
  } else if (event.target.classList.contains("-7")) {
    event.target.innerHTML = "&";
  } else if (event.target.classList.contains("-8")) {
    event.target.innerHTML = "*";
  }

  if (count === 1) {
    firstCard = event.target;
    firstCard.disabled = true;
  } else if (count === 2) {
    toggleClicks();
    secondCard = event.target;
    secondCard.disabled = true;
    if (secondCard.innerHTML !== firstCard.innerHTML) {
      setTimeout(clearCards, 1000);
    } else {
      secondCard.disabled = true;
      firstCard.disabled = true;
      count = 0;
      toggleClicks();
    }
  }
}
