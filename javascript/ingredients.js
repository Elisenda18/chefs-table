"use strict"

class Ingredients {
    constructor(canvas, x) {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.size = 150;
        this.y = - this.canvas.height;
        this.x = x;
        this.speed = 2;
        this.direction = 1;
    }

    update() {
        this.y = this.y + this.direction * this.speed;
    }

    draw() {

        // Bread
        const bread = new Image();
        bread.src = "./images/bread.png";
        this.ctx.drawImage(bread, this.x - this.size/2, this.y, this.size, this.size);

        // Cheese
        const cheese = new Image();
        cheese.src = "./images/cheese.png";
        this.ctx.drawImage(cheese, this.x - this.size/2, this.y, this.size, this.size); 

        // Chopping Board
        const board = new Image();
        board.src = "./images/choppingboard.png";
        this.ctx.drawImage(board, this.x - this.size/2, this.y, this.size, this.size); 

        // Cook Book
        const book = new Image();
        book.src = "./images/cookbook.png";
        this.ctx.drawImage(book, this.x - this.size/2, this.y, this.size, this.size); 

        // Milk
        const milk = new Image();
        milk.src = "./images/milk.png";
        this.ctx.drawImage(milk, this.x - this.size/2, this.y, this.size, this.size); 

        // Mushrooms
        const mushrooms = new Image();
        mushrooms.src = "./images/mushrooms.png";
        this.ctx.drawImage(mushrooms, this.x - this.size/2, this.y, this.size, this.size); 

        // Bread
        const bread = new Image();
        bread.src = "./images/bread.png";
        this.ctx.drawImage(bread, this.x - this.size/2, this.y, this.size, this.size); 

        // Pineapple
        const pineapple = new Image();
        pineapple.src = "./images/pineapple.png";
        this.ctx.drawImage(pineapple, this.x - this.size/2, this.y, this.size, this.size);

        // Salamai
        const salami = new Image();
        salami.src = "./images/salami.png";
        this.ctx.drawImage(salami, this.x - this.size/2, this.y, this.size, this.size); 

        // Salt & Pepper
        const salt = new Image();
        salt.src = "./images/salt&pepper.png";
        this.ctx.drawImage(salt, this.x - this.size/2, this.y, this.size, this.size); 

        // Spicy - Guindilla
        const spicy = new Image();
        spicy.src = "./images/spicy.png";
        this.ctx.drawImage(spicy, this.x - this.size/2, this.y, this.size, this.size); 

        // Serving Tool
        const tool = new Image();
        tool.src = "./images/tool.png";
        this.ctx.drawImage(tool, this.x - this.size/2, this.y, this.size, this.size); 

    }

    setDirection(direction) {
        this.direction = direction;
    }
}