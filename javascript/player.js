"use strict"

class Player {
    constructor(canvas, points) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.points = points;
        this.speed = 2;
        this.direction = 0;
        this.x = 250;
        this.y = 460;
        this.size = 150;
    }

    update() {
        this.x = this.x + this.direction * this.speed;
    }

    setDirection(direction) {
        this.direction = direction;
    }

    checkScreen() {
        //definir mejor las variables para que el codigo se entienda mejor

        if (this.x - this.size / 2 <= 0) {
          this.direction = 1;
        } else if (this.x + this.size / 2 >= this.width) {
          this.direction = -1;
        }
    }

    draw() {
        let chefImage = new Image();
        chefImage.src= "./images/chef-game-min.png";
        this.ctx.drawImage(
            chefImage,
            this.x,
            this.y,
            this.size,
            this.size
        );
    }

    catchIngredients(ingredient) {
        const catchRight = this.x + this.size / 2 > ingredient.x - ingredient.size / 2;
        const catchLeft = this.x - this.size / 2 < ingredient.x + ingredient.size / 2;
        const catchTop = this.y + this.size / 2 > ingredient.y - ingredient.size / 2;
        const catchBottom = this.y - this.size / 2 < ingredient.y + ingredient.size / 2;
    
        if (catchRight && catchLeft && catchTop && catchBottom) {
          return true;
        }
    
        return false;
    }
    
    addPoints() {
        this.points++;
        //falta ir contando los puntos que tiene cada ingrediente
    }
}