"use strict"

class Player extends Component {

    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
        this.points = 0;
    }


    move() {
        document.onkeydown = event => {
            const key = event.keyCode;

            const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];

            if (possibleKeystrokes.includes(key)) {
              event.preventDefault();
              switch (key) {
                case 37:
                case 65:
                  if (this.x >= 10) this.x -= 20;
                  break;
                case 38:
                case 87:
                  if (this.y >= 10) this.y -= 20;
                  break;
                case 39:
                case 83:
                  if (this.x <= 490 - this.width) this.x += 20;
                  break;
                case 40:
                case 68:
                  if (this.y <= 690 - this.height) this.y += 20;
                  break;
              }
            }
          };

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
    }
}