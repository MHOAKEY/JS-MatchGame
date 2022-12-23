let count = 0;
let click = 0;
let userRecord = 1000;
let firstCard = "";
let secondCard = "";
const colorWhite = "white";
const cardColor = "rgba(42, 170, 17, 0.723)";
const gameSpaces = document.querySelectorAll(".gameSpace");
const reset = document.getElementById("reset");
const turns = document.getElementById("userClick");
const record = document.getElementById("record");

document.addEventListener("keydown", keysDisable);

gameSpaces.forEach((gameSpace) => {
  gameSpace.addEventListener("click", showCard);
});

reset.addEventListener("click", resetGame);

function keysDisable(event) {
  if (event.keyCode == "13" || event.keyCode == "9") {
    event.preventDefault();
  }
}

function checkWin() {
  let counter = 0;
  gameSpaces.forEach((gameSpace) => {
    if (gameSpace.disabled === true) {
      counter++;
    }
  });
  if (counter === 16) {
    return true;
  }
  return false;
}

function insertName(userInput) {
  let userName = document.getElementById("userName");
  let inputName = document.getElementById("nameID");

  userName.innerHTML = inputName.value + "'s ";
  inputName.style.visibility = "hidden";
  document.getElementById("submitButton").style.visibility = "hidden";
}

function resetGame() {
  if (checkWin() && click / 2 >= 8 && click / 2 <= userRecord) {
    userRecord = click / 2;
    record.innerHTML = "RECORD: " + userRecord;
  }
  click = 0;
  turns.innerHTML = "TURNS: ";

  gameSpaces.forEach((gameSpace) => {
    gameSpace.innerHTML = "";
    gameSpace.disabled = false;
    gameSpace.style.backgroundColor = cardColor;
  });
}

function toggleClicks() {
  gameSpaces.forEach((gameSpace) => {
    gameSpace.classList.toggle("preventClick");
  });
}

function clearCards() {
  firstCard.innerHTML = "";
  secondCard.innerHTML = "";
  count = 0;
  firstCard.disabled = false;
  secondCard.disabled = false;
  firstCard = "";
  secondCard = "";
  toggleClicks();

  gameSpaces.forEach((gameSpace) => {
    if (
      gameSpace.innerHTML === "" &&
      gameSpace.style.backgroundColor === colorWhite
    ) {
      gameSpace.style.backgroundColor = cardColor;
    }
  });
}

function showCard(event) {
  count++;
  click++;
  if (click % 2 === 0) {
    turns.innerHTML = "TURNS: " + click / 2;
  }
  if (event.target.classList.contains("-1")) {
    event.target.innerHTML = "!";
    event.target.style.backgroundColor = colorWhite;
  } else if (event.target.classList.contains("-2")) {
    event.target.innerHTML = "@";
    event.target.style.backgroundColor = colorWhite;
  } else if (event.target.classList.contains("-3")) {
    event.target.innerHTML = "#";
    event.target.style.backgroundColor = colorWhite;
  } else if (event.target.classList.contains("-4")) {
    event.target.innerHTML = "$";
    event.target.style.backgroundColor = colorWhite;
  } else if (event.target.classList.contains("-5")) {
    event.target.innerHTML = "%";
    event.target.style.backgroundColor = colorWhite;
  } else if (event.target.classList.contains("-6")) {
    event.target.innerHTML = "^";
    event.target.style.backgroundColor = colorWhite;
  } else if (event.target.classList.contains("-7")) {
    event.target.innerHTML = "&";
    event.target.style.backgroundColor = colorWhite;
  } else if (event.target.classList.contains("-8")) {
    event.target.innerHTML = "*";
    event.target.style.backgroundColor = colorWhite;
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
