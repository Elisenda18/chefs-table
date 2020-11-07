
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
        this.isGameOver = false;
        this.isGameWon = false;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
    }

    start() {

        const loop = () => {
            if (Math.random() > 0.99) {
                this.ingredients.push(new Ingredient(this, ingredients));
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

    updateCanvas() {
        this.chef.update();
        this.ingredients.forEach(function (ingredient) {
                ingredient.update();
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawCanvas() {
        this.drawBackground();
        this.drawChef();
        this.drawIngredients();
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

    drawIngredients() {
        this.ingredients.forEach(function (ingredient) {
            ingredient.draw();
        });
    }

    checkAllCatchIngredients() {
        this.chef.checkScreen();
        this.ingredients.forEach((ingredient, index) => {
            if (this.chef.catchIngredients(ingredient)) {
                this.chef.addPoints();
                if(this.chef.points === 12) {
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
