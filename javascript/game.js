"use stric";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.player = new Player(this.canvas, 0, 3);
        this.ingredients = [];
        this.knives = [];
        this.points = 0;
        this.lives = 3;
        this.isGameOver = false;
    }

    startLoop() {

       const loop = () => {

            if (Math.random() > 0.95) {
                const x = Math.random() * this.canvas.width;
                const selectedIngredient = this.selectRandomIngredient();
                console.log(selectedIngredient);
                this.ingredients.push(new Ingredient(this.canvas, x, selectedIngredient));
            }

            if (Math.random() > 0.98) {
                const x = Math.random() * this.canvas.width;
                this.knifes.push(new Knives(this.canvas, x));
            }

            this.checkAllCatchIngredients();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            if(!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        };

         window.requestAnimationFrame(loop);
    }

    selectRandomIngredient() {
        const randomIndex = Math.floor(Math.random()* dataIngredients.length);
        return dataIngredients[randomIndex];
    }

    updateCanvas() {
        this.player.update();

        this.ingredients.forEach(function (ingredient) {
                ingredient.update();
        });

        this.knives.forEach(function (knife) {
            knife.update();
    });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    
    drawCanvas() {

        // Draw player
        this.player.draw();

        //Draw Ingredients
       
       this.ingredients.forEach((ingredient) => {
            ingredient.draw();
        });

        // Draw Knifes
        this.knives.forEach(function (knife) {
            knife.draw();
        });
    }

    checkAllCatchIngredients() {
        this.player.checkScreen();

        //Check ingredients catched
        this.ingredients.forEach((ingredient, index) => {
            if (this.player.catchIngredients(ingredient)) {
                this.player.addPoints();
                this.ingredient.splice(index, 1);
            }
        });

        //Check knifes collided
        this.knives.forEach((knife, index) => {
            if (this.player.catchIngredients(knife)) {
                this.player.loseLive();
                this.knives.splice(index, 1);
            } if (this.player.lives === 0) {
                this.isGameOver= true;
                this.isGameOverCallback();
            }
        });
    }

    gameOverCallback(callback) {
        this.isGameOver = callback;
    } 
}
