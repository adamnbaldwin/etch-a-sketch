let startButton = document.querySelector("#startButton");
let gameContainer = document.querySelector("#container")

startButton.addEventListener("click", () => {
createGrid()

});

function createGrid() {
for (i=0; i<256; i++) {
let square = document.createElement("div");
square.className = "moo";
gameContainer.append(square)
    }
}

