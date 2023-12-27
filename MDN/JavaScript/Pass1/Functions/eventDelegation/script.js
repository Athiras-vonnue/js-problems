//Event delegation

function random(number) {
  return Math.floor(Math.random() * number);
}
function bgChange() {
  const ranColor = `rgb(${random(255)},${random(255)},
  ${random(255)})`;
  return ranColor;
}

const tileContainer = document.querySelector("#tile-container");
console.log(tileContainer);
tileContainer.addEventListener("click", (e) => {
  e.target.style.backgroundColor = bgChange();
});
