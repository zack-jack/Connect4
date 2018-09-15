class Game {
  constructor() {
    this.board = new Board();
    this.players = createPlayers();
    this.ready = false;
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
}
