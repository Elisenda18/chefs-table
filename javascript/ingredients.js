"use strict"

class Ingredient extends Component {
    constructor(game, ingredients) {
        super(game);
        this.game = game;
        this.x = Math.floor(Math.random()* 540 +30);
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.ingredients = ingredients;
        this.img = ingredients.img;
        this.name = ingredients.name;
        this.points = ingredients.points;
        this.speed = 3;
        this.direction = 1;

    }

    draw() {
        const img = new Image();
        const currentImg = this.ingredients[Math.floor(Math.random() * this.ingredients.length)].img;
        img.scr = currentImg;
        this.game.ctx.drawImage(
            img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    update() {
        this.y = this.y + this.direction * this.speed;
    }

    setDirection(direction) {
        this.direction = direction;
    }
}