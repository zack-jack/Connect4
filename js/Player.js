class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /**
   * Creates token objects for player
   * @param   {integer}   num - Number of token objects to be created
   * @return  {array}     tokens - an array of new token objects
   */
  createTokens(num) {
    const tokens = [];

    /*
    for (let i=0; i<num; i++) {
      let token = new Token(index, this);
      tokens.push(token);
    }
    */

    tokens.forEach((num, index) => {
      let token = new Token(index, this);
      tokens.push(token);
    });

    return tokens;
  }
}
