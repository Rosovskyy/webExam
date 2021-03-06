const createField = (height, width) => {
    return new Array(height).fill(0).map(v => new Array(width).fill(0));
};

const mapField = (field, func) => {
    let newField = createField(field.length, field[0].length);
    field.map((l, y) => l.map((v, x) => {
        newField[y][x] = func(x, y, v)
    }));
    return newField;
};
const mapCreateField = (height, width, func) => {
    let newField = createField(height, width);
    newField.map((l, y) => l.map((v, x) => {
        newField[y][x] = func(x, y, v)
    }));
    return newField;
}

class Field {
    constructor(height, width, cellSize = 10) {
        this.height = height;
        this.width = width;
        this.tiles = createField(height, width);
        this.cellSize = cellSize;
        this.birthChance = 0.2  ;
    }

    randomFill() {
        this.tiles = mapCreateField(this.height, this.width, () => Math.random() < this.birthChance ? 1 : 0);
        this.showField();
    }

    getNumNeighbours(x, y) {
        let num = 0;
        mapCreateField(3, 3, (i, j) => {
            let cy = y + i - 1, cx = x + j - 1;
            if (!(cx === x && cy === y))
                num += (this.tiles[cy] || [])[cx] ? 1 : 0;
        });
        return num;
    }

    getNewTile(x, y) {
        let numNeighbours = this.getNumNeighbours(x, y);
        return numNeighbours === 3 ? 1 : numNeighbours === 2 ? this.tiles[y][x] : 0;
    }

    process() {
        this.tiles = mapField(this.tiles, (x, y) => this.getNewTile(x, y));
        this.showField();
    }

    play(interval = 100) {
        this.interval = setInterval(() => this.process(), interval);
    }

    stop() {
        this.interval && clearInterval(this.interval);
    }

    createTile() {
        let tile = document.createElement("div");
        tile.style.width = tile.style.height = this.cellSize + "px";
        tile.classList.add("tile");
        return tile;
    }

    static createLine() {
        let line = document.createElement("div");
        line.style.display = "flex";
        line.classList.add("line");
        return line;
    }

    linkWithContainer(container) {
        this.container = container;
        this.tiles.map(Field.createLine).map(
            (line, i) => container.appendChild(line) && this.tiles[i].map(v => line.appendChild(this.createTile()))
        );
        this.showField();
    }

    showField() {
        if (!this.container) return;
        let tiles = this.container.getElementsByClassName("tile");
        mapField(this.tiles, (x, y, v) => tiles[y * this.width + x].style.background = v ? "black" : "white");
    }
}

const createFieldContainer = (cellSize = 10) => {
    let width = Math.floor(window.innerWidth / cellSize);
    let height = Math.floor(window.innerHeight / cellSize);
    console.log(width, height);
    let container = document.createElement("div");
    document.body.appendChild(container);
    let field = new Field(height, width);
    field.randomFill();
    field.linkWithContainer(container);
    field.play();
    return field;
};
const createField_test = (func) => {
    const field = func(5, 6);
    return field.length === 5 && field[0].length === 6;
};
const mapField_test = () => {
    const field = mapField(createField(5, 6), (x, y) => x + y);
    return field[0][0] === 0 && field[4][3] === 7;
};
const getNumNeighbours_test = (Field) => {
    let field = new Field(5, 5);
    field.tiles[0][1] = field.tiles[0][2] = 1;
    return field.getNumNeighbours(0, 0) === 1 && field.getNumNeighbours(1, 1) === 2 &&
        field.getNumNeighbours(0, 1) === 1 && field.getNumNeighbours(3, 3) === 0;
};
const getNewTile_test = (Field) => {
    let field = new Field(5, 5);
    field.tiles[0][1] = field.tiles[1][2] = field.tiles[1][1] = 1;
    return field.getNewTile(2, 1) && !field.getNewTile(4, 4);
};
const createTile_test = (Field) => {
    let tile = (new Field()).createTile();
    return tile instanceof Element && tile.classList.contains("tile");
};
const linkWithContainer_test = (Field) => {
    let container = document.createElement("div");
    let field = new Field(5, 4);
    field.linkWithContainer(container);
    return container.querySelectorAll(".tile").length === 20 && container.querySelectorAll('.line').length === 5;
};

console.log("createField_test", createField_test(createField));
console.log("mapField_test", mapField_test(mapField));
console.log("getNumNeighbours_test", getNumNeighbours_test(Field));
console.log("getNewTile_test", getNewTile_test(Field));
console.log("createTile_test", createTile_test(Field));
console.log("linkWithContainer_test", linkWithContainer_test(Field));
createFieldContainer(10);