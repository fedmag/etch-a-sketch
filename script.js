

function makeGrid (rows) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", rows);
    for (let i = 0; i < (rows * rows); i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseenter", function () {
            if (randColor) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor;
        } else {
            this.style.backgroundColor = "black";
        }

    });
        container.appendChild(cell).className = "cell";
    }
}

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function () {
    let cells = document.querySelectorAll(".cell");
    console.log(cells);
    cells.forEach(function(cell) {
        cell.style.backgroundColor = "white";
    })
});


const newGrid = document.getElementById("new-grid");
newGrid.addEventListener('click', function () {
    let newSize = window.prompt("New size: ");
    container.innerHTML = "";
    makeGrid(newSize);
       
});

function clearGrid () {
    let newSize = window.prompt("New size: ");
    container.innerHTML = "";
    makeGrid(newSize);
}

let randColor = true;
const randColorBtn = document.getElementById("random-color");
randColorBtn.addEventListener('click', function () {
    randColor = !randColor;
    if (randColor == true) randColorBtn.textContent = "Random Colors";
    else randColorBtn.textContent = "Black";
})

const container = document.getElementById("container");
makeGrid(10);
