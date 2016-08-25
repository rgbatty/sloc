class DisplayHandler {
    constructor(displayData) {
        this.context = displayData.context;
        this.grid = displayData.grid;
        this.tileSize = 16;
    }

    draw() {
        this.clear();
        this.generateRects();
        this.drawWalls();
    }

    clear() {
        this.context.clearRect(0, 0, this.context.width, this.context.height);
    }

    generateRects() {
        var dh = this;
        this.grid.cells.forEach(function(cell) {
            dh.context.rect(cell.x * dh.tileSize, cell.y * dh.tileSize, dh.tileSize, dh.tileSize);
        });
        dh.context.stroke();
    }

    drawWalls() {
        var dh = this;
        this.grid.cells.forEach(function(cell) {
            if(cell.value > 0) {
                dh.context.fillRect(cell.x * dh.tileSize, cell.y * dh.tileSize, dh.tileSize, dh.tileSize);
            }
        });
    }
}

module.exports = DisplayHandler;