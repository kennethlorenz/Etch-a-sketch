const gridContainer = document.querySelector("#gridContainer");
var gridSize = 16;
var grids;
var slider = document.getElementById("slider");
var sliderOutput = document.getElementById("sliderValue");
var blackButton = document.getElementById("blackButton");
var rgbButton = document.getElementById("rgbButton");
const resetButton = document.getElementById("resetButton");
sliderOutput.textContent = slider.value;
slider.oninput = function () {
  sliderOutput.textContent = this.value;
  gridSize = this.value;
  console.log(gridSize);
};
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

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function mouseHover() {
  grids.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (e.buttons == 1 || e.buttons == 3) {
        //checks if color black is selected
        if (!blackButton.classList.contains("active")) {
          item.style.background = getRandomColor();
        } else {
          item.style.background = "black";
        }
      }
    });
  });
}
function mouseDown() {
  grids.forEach((item) => {
    item.addEventListener("mousedown", () => {
      //checks if color black is selected
      if (!blackButton.classList.contains("active")) {
        item.style.background = getRandomColor();
      } else {
        item.style.background = "black";
      }
    });
  });
}

function clearGrid() {
  grids.forEach((box) => {
    box.remove();
  });
}

function draw() {
  mouseHover();
  mouseDown();
}

draw();
slider.addEventListener("change", () => {
  resetGrid();
});

function resetGrid() {
  clearGrid();
  createGrid();
  draw();
}

rgbButton.addEventListener("click", () => {
  blackButton.classList.remove("active");
  rgbButton.classList.add("active");
  console.log(rgbButton.classList);
});

blackButton.addEventListener("click", () => {
  rgbButton.classList.remove("active");
  blackButton.classList.add("active");
  console.log(blackButton.classList);
});

resetButton.addEventListener("click", resetGrid);
document.querySelector(".currentYear").textContent = new Date().getFullYear();
