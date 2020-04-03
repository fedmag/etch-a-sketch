

function makeGrid (rows) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", rows);
    for (let i = 0; i < (rows * rows); i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseout", function () {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor;
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

const container = document.getElementById("container");
makeGrid(10);