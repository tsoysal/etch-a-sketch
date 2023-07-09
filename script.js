/* Declarations */

const container = document.querySelector('.container');
let paintColor = "black";

let squares = [];
let rows = [];

/* Functions */
function renderCanvas(size){
    container.innerHTML = " ";
    squares = [];
    rows = [];

    if(!size){
        do{
            size = prompt("Enter size (min:2, max: 64)");
        } while(isNaN(size) || size <= 1 || size >= 65);
    }
  //Create squares, rows and push to empty arrays
  for (let i = 0; i < size; i++) {
    rows.push(document.createElement("div"));
    squares.push(document.createElement("div"));
  }

  //Add squares to rows
  rows.forEach((row) => {
    squares.forEach((square) => {
      square.classList.add("square");
      row.appendChild(square.cloneNode(true));
    });
    row.classList.add("row");
    container.appendChild(row);
  });

  //Select rendered squares and add event listener to each
  const currSquares = document.querySelectorAll(".square");
  currSquares.forEach((square) => {
    square.addEventListener("click", changeColor);
    square.addEventListener("dragover", changeColor);
    square.addEventListener("touchstart", changeColor);
    square.addEventListener("touchmove", changeColor)
  });
}

function changeColor(event) {
    event.target.style.backgroundColor = paintColor;
}

function resetCanvas(){
  renderCanvas(16);
}

renderCanvas(16);
