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
        //   return ('newCard')
        }
    }

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


class Game{ 
    constructor(){
      this.player1 = []
      this.player2 = []
      this.dealCards()
    }

    dealCards() {
        this.player1 = gameDeck.cards.slice(0,26)
        this.player2 = gameDeck.cards.slice(26,52)
        return (this.player1, this.player2)
    }

    startGame() {
        gameDeck.length = 52;
        while (gameDeck.length > 0){
            let cardPlay1 = this.player1.shift()
            console.log(cardPlay1)
            let cardPlay2 = this.player2.shift()
            console.log(cardPlay2)

            if (cardPlay1.ranking > cardPlay2.ranking){
                this.player1.push(cardPlay1, cardPlay2)
                console.log ('Player 1 has won this round')
            }
            else if (cardPlay2.ranking > cardPlay1.ranking) {
                this.player2.push(cardPlay1, cardPlay2)
                console.log ('Player 2 has won this round')
            }

            else if (cardPlay2.ranking = cardPlay1.ranking) {
                cardPlay1 = this.player1.splice(0, 5);
                cardPlay2 = this.player2.splice(0, 5);
                console.log (cardPlay2)
                if (cardPlay2[4].ranking > cardPlay1[4].ranking){
                    this.player2.push(cardPlay1, cardPlay2)
                    console.log('Player 2 has won this round')
                }
                else{
                    this.player1.push(cardPlay1, cardPlay2)
                    console.log('Player 1 has won this round')
                }
            }

            // else {
            //     console.log ('I think you just beat the game')//splice//pop//concat 3 cards to cardplay 1 and 2, then do that for the//
            //     //the fourth card and it's the fouth card that will be compared, as we have coompared the other//
            //     //guys//
            // }
            gameDeck.length--;
        }
    }

    endGame() {
        if (playGame.player1.length > playGame.player2.length) {
            console.log(`Player 1 has ${playGame.player1.length} cards, while player 2 has ${playGame.player2.length} cards`)
            console.log('Player 1 has vanquished player 2')
        }
        else {
            console.log(`Player 2 has ${playGame.player2.length} cards, while player 1 has ${playGame.player1.length} cards`)
            console.log('Player 2 has vanquished player 1')
        }
    }
}
const gameDeck = new Deck()
// // class Randoms{
console.log(gameDeck.cards)
gameDeck.shuffleGame();
console.log(gameDeck.cards)
const playGame = new Game()
playGame.dealCards();
console.log(playGame.player1)
console.log(playGame.player2)
playGame.startGame();
playGame.endGame();

// // let player1 = gameDeck.cards.slice(0,26)
// // let player2 = gameDeck.cards.slice(26,52)
// // console.log('player 1 has ', player1.length, ' cards')

// console.log(player1[0])