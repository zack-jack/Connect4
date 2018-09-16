const game = new Game();

/**
 * Listens for click on `#begin-game` and
 * calls startGame() on game object
 */
document.getElementById("begin-game").addEventListener("click", function() {
  game.startGame();

  /* Hides start button */
  this.style.display = "none";

  /* Shows the game play area */
  document.getElementById("play-area").style.opacity = "1";
});

/**
 * Listen for keyboard presses
 */
document.addEventListener("keydown", function(event) {
  game.handleKeydown(event);
});
