let count = 0;

let previousCard = "";

const gameSpaces = document.querySelectorAll(".gameSpace");

gameSpaces.forEach((gameSpace) => {
  gameSpace.addEventListener("click", showCard);
});

function CheckIfPair() {
  if (count === 2) {
  }
}

function showCard(event) {
  count++;
  if (event.target.classList.contains("1") === "1") {
    event.target.innerHTML = "!";
  }
  if (event.target.classList.contains("2") === "2") {
    event.target.innerHTML = "@";
  }
  if (event.target.classList.contains("3") === "3") {
    event.target.innerHTML = "#";
  }
  if (event.target.classList.contains("4") === "4") {
    event.target.innerHTML = "$";
  }
  if (event.target.classList.contains("5") === "5") {
    event.target.innerHTML = "%";
  }
  if (event.target.classList.contains("6") === "6") {
    event.target.innerHTML = "^";
  }
  if (event.target.classList.contains("7") === "7") {
    event.target.innerHTML = "&";
  }
  if (event.target.classList.contains("8") === "8") {
    event.target.innerHTML = "*";
  }
  previousCard = event.target;
}
