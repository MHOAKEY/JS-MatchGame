let count = 0;

let firstCard = "";

let secondCard = "";

const gameSpaces = document.querySelectorAll(".gameSpace");

gameSpaces.forEach((gameSpace) => {
  gameSpace.addEventListener("click", showCard);
});

function disableClicks() {
  gameSpaces.forEach((gameSpace) => {
    gameSpace.classList.add("preventClick");
  });
}

function enableClicks() {
  gameSpaces.forEach((gameSpace) => {
    gameSpace.classList.remove("preventClick");
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
  enableClicks();
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
    firstCard.disabled = true;
  }
  if (count === 2) {
    disableClicks();
    secondCard = event.target;
    secondCard.disabled = true;
    if (secondCard.innerHTML === firstCard.innerHTML) {
      secondCard.disabled = true;
      firstCard.disabled = true;
      count = 0;
    }
    if (secondCard.innerHTML !== firstCard.innerHTML) {
      setTimeout(clearCards, 1000);
    }
  }
}
