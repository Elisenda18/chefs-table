"use strict";

class Ingredient {
    constructor(canvas, x, ingredients) {
        this.x = x;
        this.y = 20;
        this.size = 100;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.ingredients = ingredients;
        this.img = ingredients.img;
        this.name = ingredients.name;
        this.points = ingredients.points;
        this.speed = 1;
        this.direction = 1;

    }

    draw() {
        const img = new Image();
        img.src = this.img;
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