"use strict"

class Background {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.backgroundImg = new Image();
    }

    draw() {
        this.backgroundImg.src = "./images/gameboard2-min.png";
        this.backgroundImg.addEventListener("load", () => {
            //console.log("se carga la imagen");
            this.ctx.drawImage(
                this.backgroundImg,
                this.x,
                this.y,
                600,
                600
            );
        }); 
    }
}