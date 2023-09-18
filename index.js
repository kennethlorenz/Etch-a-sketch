const gridContainer = document.querySelector("#gridContainer");
const gridSize = 16;

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");

    const boxSize = 50 / gridSize;
    grid.classList.add("grid");
    grid.style.width = boxSize + "rem";
    grid.style.height = boxSize + "rem";
    gridContainer.appendChild(grid);
  }
}

createGrid();
