let count = 0;
let click = 0;
let firstCard = "";
let secondCard = "";
const gameSpaces = document.querySelectorAll(".gameSpace");
const reset = document.getElementById("reset");
const turns = document.getElementById("userClick");
const record = document.getElementById("record");

gameSpaces.forEach((gameSpace) => {
  gameSpace.addEventListener("click", showCard);
});

reset.addEventListener("click", resetGame);

function insertName(userInput) {
  let userName = document.getElementById("userName");
  let inputName = document.getElementById("nameID");

  userName.innerHTML = inputName.value + "'s ";
  inputName.style.visibility = "hidden";
  document.getElementById("submitButton").style.visibility = "hidden";
}

function resetGame() {
  gameSpaces.forEach((gameSpace) => {
    gameSpace.innerHTML = "";
    gameSpace.disabled = false;
  });
  if (
    (record.innerHTML === "RECORD: " && turns.innerHTML.slice(7) >= 8) ||
    click / 2 <= record.innerHTML.slice(8)
  ) {
    record.innerHTML = "RECORD: " + click / 2;
  }
  click = 0;
  turns.innerHTML = "TURNS: ";
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
  turns.innerHTML = "TURNS: " + click / 2;
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
