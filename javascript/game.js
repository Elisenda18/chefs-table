
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.player;
        this.ingredients = [];
        this.points = 0;
        this.isGameOver = false;
        this.isGameWon = false;
        //this.background = undefined;
       // this.backgroundImg = new Image();
    }

    startLoop() {

        this.player = new Player(this.canvas, 0);
        this.background = new Background(this.canvas);

        const loop = () => {
            if (Math.random() > 0.99) {
                const x = Math.random() * this.canvas.width;
                this.ingredients.push(new Ingredient(this.canvas, x, this.selectRandomIngredient()));
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
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    
    drawCanvas() {

        // Draw player
        this.player.draw();

        //Draw canvas Background 
        this.background.draw();

        // Draw Ingredients
       /* this.ingredients.forEach((ingredient) => {
            ingredient.draw();
        });
        */
    }

   /*
    drawBackground() {
        this.backgroundImg.src = "./chefs-table/images/gameboard2-min.png";
            this.ctx.drawImage(
                this.backgroundImg,
                this.x,
                this.y,
                600,
                600
            );
    }
    */

    checkAllCatchIngredients() {
        this.player.checkScreen();
        this.ingredients.forEach((ingredient, index) => {
            if (this.player.catchIngredients(ingredient)) {
                this.player.addPoints();
                if(this.player.points === 12) {
                    this.isGameWon = true;
                    this.onGameWon();
                } else {
                    this.isGameOver = true;
                    this.onGameOver();
                };
            }
        });
    }

    gameOverCallback(callback) {
        this.onGameOver = callback;
    }
    
    gameWonCallback(callback) {
        this.onWonOver = callback;
    }
}
