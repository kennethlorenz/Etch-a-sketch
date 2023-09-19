const gridContainer = document.querySelector("#gridContainer");
const gridSize = 16;
var grids;
function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");

    const boxSize = 50 / gridSize;
    grid.classList.add("grid");
    grid.style.width = boxSize + "rem";
    grid.style.height = boxSize + "rem";
    gridContainer.appendChild(grid);
  }

  grids = document.querySelectorAll(".grid");
}

createGrid();

console.log(grids);

function mouseHover() {
  grids.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (e.buttons == 1 || e.buttons == 3) {
        item.classList.add("black");
      }
    });
  });
}
function mouseDown() {
  grids.forEach((item) => {
    item.addEventListener("mousedown", () => {
      item.classList.add("black");
    });
  });
}

function draw() {
  mouseHover();
  mouseDown();
}

draw();
