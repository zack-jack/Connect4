class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  /**
   * Gets the active player
   * @return  {Object}    Player - the active player.
   */
  get activePlayer() {
    return this.players.find(player => player.active);
  }

  /**
   * Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */
  createPlayers() {
    const players = [
      new Player("Player 1", 1, "#e74c3c", true),
      new Player("Player 2", 2, "#2980b9")
    ];
    return players;
  }

  /**
   * Gets game ready for play
   */
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }
}
