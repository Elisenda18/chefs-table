"use strict"

class Ingredient extends Component {
    constructor(game, ingredients) {
        super(game);
        this.game = game;
        this.x = Math.floor(Math.random()* 540 +30);
        this.y = 100;
        this.width = 100;
        this.height = 100;
        this.ingredients = ingredients;
        this.img = ingredients.img;
        this.name = ingredients.name;
        this.points = ingredients.points;
    }

    draw() {
        const img = new Image();
        const currentImg = this.ingredients.img[Math.random() * ingredients.length];
        img.scr = currentImg;
        this.game.ctx.drawImage(
            img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    move() {
        if (Math.floor(Math.random() * 20) % 3 === 0) {
            this.y +=5;
        }
    }
}