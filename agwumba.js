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

class Player{
    constructor(playerName){
      this.playerName = playerName;
    }
}

class Game{ 
    constructor(){
      this.players = [] //amount of players in the game
      // this.getRounds() //amount of rounds played. i know i'll have to use a while loop to loop around the function that will start the game 
      // this.getWinner() //this will give us the winner of the game. its either, we use a function to get winner or we assign a value to winner and equate is to this.winner.
    }
  
    logPlayer(player){
      if (this.players.length < 2){
        this.players.push(player);
      }
      else{
        console.log("Only the chosen few can partake of this sacred game!")
      }
    }
}

// class Randoms{

// }
  
    const gameDeck = new Deck()
    // console.log(gameDeck.cards)
    gameDeck.shuffleGame();
    // console.log(gameDeck.cards)
  
    let player1 = gameDeck.cards.slice(0,26)
    let player2 = gameDeck.cards.slice(26,52)
    // console.log('player 1 has ', player1.length, ' cards')
    // console.log(player2)
    console.log(player1[0])