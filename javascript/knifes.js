"use strict";

class Knives {
    constructor(canvas, x) {
        this.x = x;
        this.y = 20;
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.speed = 2;
        this.direction = 1;

    }

    draw() {
        const img = new Image();
        img.src = "./images/knife.jpg";
        this.ctx.drawImage(
            img,
            this.x,
            this.y,
            this.size,
            this.size
        );
    }

    update() {
        this.y = this.y + this.direction * this.speed;
    }

    setDirection(direction) {
        this.direction = direction;
    }
}

