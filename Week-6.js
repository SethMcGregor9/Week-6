
//plan for assignment
//Need classes for Card, Deck, Player. 
// Cards need card types via clubs, hearts, diamonds, and spades, also Numbers and Symbols.
// Deck is 52 cards and needs to be able to shuffle and deal 26 cards to each player
// Players needs to play 1 card each turn have a deck of 26 cards. 
// Need to display a score and a winner


class Card {
    constructor(rank, suit, value) {
       this.rank = rank;
       this.suit = suit;
       this.value = value;
    }
  }
  
  class Deck {
    
    constructor(){
      this._cards = [];
    };
  
    get cards() {
      return this._cards;
    }
    buildDeck() {
      this._populate();
      this._shuffle();
      return this._cards;
    }
  
    _populate() {
     const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
      const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
      for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
          this._cards.push(new Card(ranks[j], suits[i], values[j]));
        }
      }
    }
  
    _shuffle() {
      
      if (this._cards.length > 0){
      const shuffledDeck = this._cards.sort(() => Math.random() - 0.5)
      this._cards = [...shuffledDeck];
      }
    }
  }
  
  class Player {
    constructor(name) {
      this._playerName = name;
      this._playerScore = 0;
      this._playerDeck = [];
    }
  
    get name() {
      return this._playerName;
    }
  
    get deck() {
      return this._playerDeck;
    }
  
    get score() {
      return this._playerScore;
    }
  
    set deck(newDeck) {
      if (Array.isArray(newDeck)) {
        this._playerDeck = newDeck;
      }
    }
    set score(newScore) {
      if (!isNaN(newScore)) {
    this._playerScore = newScore;
      }
    }
  }
  
  class GameMaster {
  
    constructor() {
      this._players = [];
      this._deck = [];
    }
  
   start() {
         
         console.log("Game Master Menu")
             
        let input = prompt("0- Exit; 1- Play");
         while (input != '0') {
           switch (input) {
             case '0':
               exit;
             case '1': 
               this._createGame();
               break;
           }
           input = prompt("0- Exit; 1- Play");
         }
  }
  
  _createGame() {
    // I need to make 2 Player
    this._players[0] = new Player("Player 1");
    this._players[1] = new Player("Player 2");
  
    //Need to Creat a Deck and Populate cards. this is temporty.
  
    const cards = new Deck().buildDeck();
  
    // assign 26 cards to each Player
  
    this._players[0].deck = [...cards.slice(0, 26)];
    this._players[1].deck = [...cards.slice(26, 52)];
  
    //now need a way to deal cards from each player
  
    console.log("Dealing Hands")
    for(let i = 0; i < this._players[0].deck.length; i++) {
      if (this._players[0].deck[i].value > this._players[1].deck[i].value) {
        this._players[0].score +=1;
        // Showing who is the Winner each round
        
        let winningHand = `${this._players[0].deck[i].rank} of ${this._players[0].deck[i].suit}`;
        console.log(`Player 1 won with a ${winningHand}`);
      } else {
        this._players[1].score +=1;
        let winningHand = `${this._players[1].deck[i].rank} of ${this._players[0].deck[i].suit}`;
        console.log(`Player 2 won with a ${winningHand}`);
      }
    }
  
  // Finally Show the Winner
  
    console.log("Hands Finished")
  
    if(this._players[0].score > this._players[1].score) {
      console.log(`${this._players[0].name.toUpperCase()} WON THE WAR with a score of ${this._players[0].score}`);
    } else if (this._players[0].score < this._players[1].score) {
      console.log(`${this._players[1].name.toUpperCase()} WON THE WAR with a score of ${this._players[1].score}`);
    } else {
      console.log("PLAYER 1 AND PLAYER 2 HAVE TIED");
    }
    
  }
  
  }
  
  const game = new GameMaster();
  game.start();
  