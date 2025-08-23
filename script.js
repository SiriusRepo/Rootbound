const grid = document.querySelector("#grid");

function ArrToLookup(arr) {
    const lookup = {};
    for (const item of arr) lookup[item] = true;
    return lookup;
}

const validBlocks = ArrToLookup(["root","water","mineral"]);

function RandomBetween(a, b) {
    return Math.random() * (b-a) + a;
}

function RandintBetween(a, b) {
    return Math.floor(RandomBetween(a,b+1));
}

function DrawBlock(X, Y, Type) {
    const block = document.createElement("div");
    block.classList.add("block");

    block.style.bottom = `calc(${Y} * var(--block-size) + 50%)`;
    block.style.left   = `calc(${X} * var(--block-size) + 50%)`;

    if (validBlocks[Type]) block.classList.add("type-" + Type);
    else return;

    grid.appendChild(block);
    return block;
}

function DrawGrid(GRID) {
    console.log("Drawing Grid:", GRID);
    grid.innerHTML = "<div id='grid-overlay'></div>";
    for (const [coords, Type] of Object.entries(GRID)) {
        const [X, Y] = coords.split(",").map(Number);
        DrawBlock(X, Y, Type);
    }
}

const GRID = {};
const range = 10;
const count = 50;
for (let i = 0; i < count; i++) {
    GRID[RandintBetween(-range, range) + "," + RandintBetween(-range, range)] = "root";
    GRID[RandintBetween(-range, range) + "," + RandintBetween(-range, range)] = "water";
    GRID[RandintBetween(-range, range) + "," + RandintBetween(-range, range)] = "mineral";
}
DrawGrid(GRID);