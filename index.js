let startButton = document.querySelector("#startButton");
let resetButton = document.querySelector("#resetButton");
let createButton = document.querySelector("#createButton");
let gameContainer = document.querySelector("#container");


startButton.addEventListener("click", () => {
createGrid()});

function createGrid() {
    for (i=0; i<16; i++){
    let column = document.createElement("div");
    column.className = "moo";
    column.id = "columns";
    gameContainer.append(column);
    for (j=0; j<16; j++) {
    let row = document.createElement("div");
    row.className="moo";
    row.id= "rows";
    column.append(row);
    }
};
}

// function createRows () {
//     for (i=0; i<16; i++) {
//         // let row = document.createElement("div");
//         // row.className = "moo";
//         // row.id = "moo3";
//         column.appendChild(row)}
// }

// let square = document.createElement("div");
// square.className = "moo";
// square.id = "moo2"
// gameContainer.append(square);

// square.addEventListener("mouseover",(e) => {square.style.background = "Blue"});

// resetButton.addEventListener("click", () => {
//     resetGrid()});
// function resetGrid () {
// square.style.background = "red"};
// }
// }
