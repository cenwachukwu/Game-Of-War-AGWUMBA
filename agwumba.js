class Card {
    constructor(cardValue, suits, ranking) {
      this.cardValue = cardValue
      this.suits = suits
      this.ranking = ranking
    }
}

class Deck {
    constructor() {
        this.length = 52;
        // this.length = //the number of cards - should start at 52
        this.cards = [] //an array of cards in the deck
        // this.draw = draw //return a random card from the cards array
        this.getDeck()
      }
} 