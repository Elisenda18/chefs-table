"use strict"

class Player {
    constructor(canvas, ingredients) {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.size = 200;
        this.x = (this.canvas.width/2) - 60;
        this.y = 600;
        this.speed = 1; 
        this.direction = 0;
        this.ingredients = 0;
    }

    update() {
        this.y = this.y + this.direction * this.speed;
    }

    draw() {
        const img = new Image();
        img.src = "./images/chef.png";
        this.ctx.drawImage(img, this.x, this.y, this.size, this.size);
    }

    setDirection() {
        this.direction = direction;
    }

    checkScreen(){
        if(this.x - this.width/ 2 <= 0){
            this.x = this.width/2;
        } else if (this.x + (this.width + this.width/2) >= this.canvas.width){
            this.x = this.canvas.width - (this.width * 1.5)
        }
    }

    checkCacthIngredient(ingredient) {
        const catchRight = this.x + this.size / 2 > ingredient.x - ingredient.size / 2;
        const catchLeft = this.x - this.size / 2 < ingredient.x + ingredient.size / 2;
        const catchTop = this.y + this.size / 2 > ingredient.y - ingredient.size / 2;
        const catchBottom = this.y - this.size / 2 < ingredient.y + ingredient.size / 2;
    
        if (collideRight && collideLeft && collideTop && collideBottom) {
          return true;
        }
    
        return false;
    }
    
    addIngredients() {
        this.ingredients++;
      }


}