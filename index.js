let startButton = document.querySelector("#startButton");
let resetButton = document.querySelector("#resetButton");
let gameContainer = document.querySelector("#container");
let promptNumber;


startButton.addEventListener("click", () => {
clearGrid();
createGrid()});

function clearGrid(){
    gameContainer.replaceChildren()
};

function createGrid() {
    promptNumber = prompt("How many rows X columns do you want your etch-a-sketch to be?", "Enter a number here");
    for (i=0; i<promptNumber; i++){
    let column = document.createElement("div");
    column.className = "moo";
    column.id = "columns";
    gameContainer.append(column);
    column.addEventListener("mouseover",() => column.style.background = "Blue" );
    resetButton.addEventListener("click", () => column.style.background = "Red");
    for (j=0; j<promptNumber; j++) {
    let row = document.createElement("div");
    row.className="moo";
    row.id= "rows";
    column.append(row);
    row.addEventListener("mouseover",(e) => row.style.background = "Blue")
    resetButton.addEventListener("click", () => row.style.background = "Red");
    };;
    };
}