"use strict"

const main = () => {
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html
    };

    const buildSplashScreen = () =>{
        buildDom(`
            <section class="splash-screen">
                <h1>Chef's Table</h1>
                <br>
                <button id = "game"> Start Game</button>
            </section>
        `);
        const startButton = document.querySelector("#game");
        startButton.addEventListener("click",buildGameScreen)
    };

    const buildGameScreen = () => {
        buildDom(`
         <section class="game-screen"> 
            <div class="game-intro">
             <h1>Chef's Table</h1>
                <p>Use the left and right arrow keys to move Chef Cocô from one side to another of the kitchen table!</p>
                <br />
            </div>

            <div id="game-board">
              <canvas id="canvas" width="600" height="600" border="1px solid black"></canvas>
            </div>
         </section> 
            
        `);

        const width = document.querySelector(".game-screen").offsetWidth;
        const height = document.querySelector(".game-screen").offsetHeight;

        const canvasElement = document.querySelector("canvas");

        const game = new Game(canvasElement);
        game.gameOverCallback(buildGameOver);
        game.gameWonCallback(buildGameWon);

        game.startLoop();

        const setPlayerDirection = (event) => {
            if (event.code === "ArrowRight") {
              game.player.setDirection(1);
            } else if (event.code === "ArrowLeft") {
              game.player.setDirection(-1);
            }
        };
        document.addEventListener("keydown", setPlayerDirection);

    };

    const buildGameOver = () => {
        buildDom(`
            <section class="game-over">
                <h1>Game Over</h1>
                <button id = "game"> TRY AGAIN</button>
                <div class= "pointer"> </div>
            </section>
            
        `)
    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click",buildGameScreen)
     
    };


    const buildGameWon = () => {
        buildDom(`
            <section class="game-over">
                <h1>You WON!</h1>
                <button id = "game"> TRY AGAIN</button>
                <div class= "pointer"> </div>
            </section>
            
        `)
    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click", buildGameScreen)
    };


    buildSplashScreen();
}

window.addEventListener("load", main);
