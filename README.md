# Chefs-Table
Being a chef is not easy, if you miss an ingredient you migth end up with a completely different dish and some angry customers. The object of the game is to help Chef Cocô to get all the ingredients he needs to cook a dish.

# MVP: DOM - CANVAS
Chef Cocô can move in 2 directions and has to get all the ingredients he needs to prepare his dish. The game is won whenever the chef gets all the ingredients he needs. The game is over when the chef gets by accident a knife instead of an ingredient. Let's see what dish can prepare Chef Cocô by the end of the game :)

# DATA STRUCTURE
1. index.html
2. main.js
3. game.js
4. player.js
5. ingredients.js
6. canvas.js

### 1. index.html file

### 2. Main file

- buildDom
- createStartScreen / removeStartScreen
- createGameScreen / removeGameScreen
- createGameOverScreen / removeGameOverScreen
- createWinScreen / removeWinScreen
- startGame / endGame

### 3. Game Constructor

**Properties**
- canvas
- ctx
- player
- ingredients
- gameIsOver
- gameIsWon
- timeScore
- pause

**Methods**
- start
- startLoop
- checkCollision
- checkOtherSide
- checkIfBonusWon
- checkTime
- win
- gameWon / gameOver
- printLives
- printTime

