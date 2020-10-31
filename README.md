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
- pause

**Methods**
- start
- startLoop
- checkCollision
- win
- gameWon / gameOver
- printIngredients

### 4. Player Constructor

**Properties**
- canvas
- ctx
- x position
- y position
- width
- height
- ingredients
- image
- direction

**Methods**
- draw
- move
- collidedWithObstacle
- catchedBonus
- addIngredient

### 5. Ingredients Constructor

**Properties**
- canvas
- ctx
- x position
- y position
- width
- height
- speed
- direction
- image

**Methods**
- draw
- move

## States and States Transitions
- startScreen
  - Start the game
  - Goes to gameScreen when Start button is clicked
- gameScreen
  - Goes to gameoverScreen if ingredients < total recipe ingredients
      - [Add to MVP] Goes to gameoverScreen if Chef collided with a knife
  - Goes to winScreen if ingredients = total recipe ingredients
- gameoverScreen
  - Shows Game Over message and Restart button
  - Goes back to Game Screen when Restart button is clicked
- winScreen
  - Shows Win message, final dish recipe and Restart button
  - Goes back to Game Screen when Restart button is clicked
  
## Tasks
  1. Setup git & GitHub
  2. Create and connect scripts in HTML: main.js, player.js, ingredients.js, canvas.js
  3. BuildDom in main.js
  4. Find all png images: background, chef and ingredients
  4. Create Canvas class - background board/image
  5. Create Player class
  6. Create Ingredients class
  7. Create Game class
  8. Create loop in game.js
  9. Create 4 screens in main.js
  10. Create screen transitions in main.js
  11. Move obstacles in game.js
  12. Move player in game.js
  13. Check Collisions  in game.js
  14. Check game result in game.js
  15. Create ingredients scoreboard in main.js
  16. Add audios, img and fonts
  
## Backlog - once MVP is done
  1. Add obstacles (= knifes) that will end up the game if they collide with the Chef
  2. Add game difficulty by setting diferent ingredients speed
  
## Links

### Trello

### Slides
URls for the project presentation (slides) - Coming soon1 -
