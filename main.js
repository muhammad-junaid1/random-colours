// HEX values creator

const btn = document.querySelector("button"),
  hexCode = document.querySelector("#hex-code"),
  hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", changeColour);
function changeColour() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const values = Math.floor(Math.random() * hexChars.length);
    hex += hexChars[values];
  }
  hexCode.textContent = hex;
  document.body.style.backgroundColor = hex;
}
