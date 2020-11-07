"use strict"

class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.chef = new Player();
        this.chefImage = new Image();
        this.ingredients = [];
        this.points = 0;
        this.background = undefined;
        this.backgroundImg = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 600;
        this.height = 800;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
        this.createIngredients();
    }

    start() {
        this.drawBackground();
        this.drawChef();

        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawChef();
            this.chef.move();

            for (let i = 0; i < this.ingredients.length; i++) {
                this.ingredients[i].move();
                this.ingredients[i].draw();
                this.chef.catchIngredients(this.ingredients[i]);
            }
        }, 1000);
    }

    createIngredients() {
        if (Math.floor(Math.random() * 15) % 2 === 0) {
            this.ingredients.push(new Ingredient(this, ingredients));
        }

        setTimeout(() => {
            this.createIngredients();
        }, 5000);
    }

    drawBackground() {
        this.backgroundImg.src = "./images/gameboard-min.png";
        this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawChef() {
        this.chefImage.src= "./images/chef-game-min.png";
        this.ctx.drawImage(
            this.chefImage,
            250,
            460,
            150,
            150
        );
    }
}
