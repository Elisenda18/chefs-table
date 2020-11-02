"use strict"

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let gameBoard = new GameBoard(canvas); 
let player = new Player(canvas,0)

window.onload = () => {

    document.getElementById('start-button').addEventListener("click", () => {
        startGame();
    });
    
    function startGame() {
        gameBoard.draw();
        player.draw();    

    };
};
