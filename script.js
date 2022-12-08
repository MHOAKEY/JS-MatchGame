let count = 0;

let previousCard = "";

const gameSpaces = document.querySelectorAll(".gameSpace");

gameSpaces.forEach((gameSpace) => {
  gameSpace.addEventListener("click", showCard);
});

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
  if (count === 2) {
    if (event.target.innerHTML === previousCard.innerHTML) {
      event.target.disabled = true;
      previousCard.disabled = true;
    }
  }
  previousCard = event.target;
}
