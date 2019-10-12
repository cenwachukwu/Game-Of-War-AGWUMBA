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
    
    getDeck() {
        const cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K','A'];
        const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
        const ranking = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
          for (let j = 0; j < cardValue.length; j++) {
            const newCard = new Card(cardValue[j], suits[i], ranking[j])
            this.cards.push(newCard);
          }
          // return ('newCard')
        }
    
    }
    // const gameDeck = new Deck()

    shuffleGame() {
        var shuffledDeck = []
        for (let i = 0; i < 52; i++) {
          var deckSize = this.cards.length;
          var randomNumber = Math.floor(Math.random() * deckSize);
          var shuffledCard = this.cards.splice(randomNumber, 1)[0];
          shuffledDeck.push(shuffledCard);
        }
        this.cards = shuffledDeck;
    }
} 