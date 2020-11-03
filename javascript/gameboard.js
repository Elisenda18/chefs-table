"use strict"

class GameBoard {
    constructor(canvas) {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    draw() {
        const img = new Image();
        img.src = "./images/gameboard2.png" ;
        this.ctx.drawImage(img, 0, 0, 600, 800);
    }
}