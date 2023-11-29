class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  
  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    for (let i = 0; i < this.cards.length; i++ ) {
      let shuffle = Math.floor(Math.random() * this.cards.length);
      let temp = this.cards[i]
      this.cards[i] = this.cards[shuffle];
      this.cards[shuffle] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }    
  }
  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
