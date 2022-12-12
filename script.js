// remove ability to click same card twice.
// limit of two cards per turn.
//

let count = 0;

let firstCard = "";

let secondCard = "";

const gameSpaces = document.querySelectorAll(".gameSpace");

gameSpaces.forEach((gameSpace) => {
  gameSpace.addEventListener("click", showCard);
});

function clearCards(event) {
  firstCard.innerHTML = "";
  secondCard.innerHTML = "";
  count = 0;
  firstCard = "";
}

function showCard(event) {
  count++;
  if (event.target.classList.contains("1")) {
    event.target.innerHTML = "!";
  }
  if (event.target.classList.contains("2")) {
    event.target.innerHTML = "@";
  }
  if (event.target.classList.contains("3")) {
    event.target.innerHTML = "#";
  }
  if (event.target.classList.contains("4")) {
    event.target.innerHTML = "$";
  }
  if (event.target.classList.contains("5")) {
    event.target.innerHTML = "%";
  }
  if (event.target.classList.contains("6")) {
    event.target.innerHTML = "^";
  }
  if (event.target.classList.contains("7")) {
    event.target.innerHTML = "&";
  }
  if (event.target.classList.contains("8")) {
    event.target.innerHTML = "*";
  }
  if (count === 1) {
    firstCard = event.target;
  }
  if (count === 2) {
    secondCard = event.target;
    if (secondCard.innerHTML === firstCard.innerHTML) {
      event.target.disabled = true;
      firstCard.disabled = true;
      count = 0;
    }
    if (secondCard.innerHTML !== firstCard.innerHTML) {
      setTimeout(clearCards, 1000);
    }
  }
}
