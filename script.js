const gameSpaces = document.querySelectorAll(".gameSpace");
gameSpaces.forEach((gameSpace) => {
  gameSpace.addEventListener("click", showCard);
});

function showCard(event) {
  if (event.target.id === "1") {
    event.target.innerHTML = "!";
  }
  if (event.target.id === "2") {
    event.target.innerHTML = "@";
  }
  if (event.target.id === "3") {
    event.target.innerHTML = "#";
  }
  if (event.target.id === "4") {
    event.target.innerHTML = "$";
  }
  if (event.target.id === "5") {
    event.target.innerHTML = "%";
  }
  if (event.target.id === "6") {
    event.target.innerHTML = "^";
  }
  if (event.target.id === "7") {
    event.target.innerHTML = "&";
  }
  if (event.target.id === "8") {
    event.target.innerHTML = "*";
  }
}
