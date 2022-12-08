const gameSpaces = document.querySelectorAll(".gameSpace");
gameSpaces.forEach((gameSpace) => {
  gameSpace.addEventListener("click", showCard);
});

function showCard(event) {
  event.target.innerHTML = "A";
}
