// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// constuctor file


var game = require("./game.js");

var Word = function(word){
	this.theWord = word;
	this.pastGuess = [],
	this.lives = 7,

	this.reSetUp = function(){
		this.lives = 7;
		this.pastGuess = [];
		this.theWord = game.getWord();
		this.printStats();
	},

	this.checkRepeat = function(alpha, spaces){
		for (var n = 0; n < spaces.length; n++) {
			if (alpha == spaces[n].toLowerCase()){
				return true;
			}
		}

		for (var i = 0; i < this.pastGuess.length; i++){
			if (alpha == this.pastGuess[i]) {
				return true;	
			}
		}	
	},

	this.wrongGuess = function(alpha){
		for (var n = 0; n < this.theWord.length; n++) {			
			if (alpha == this.theWord[n].toLowerCase()){
				return false;
			}
		};		
	},

	this.printStats = function(){
		console.log("");
		console.log("STATS")
		console.log("Lives: " + this.lives);
		console.log("Past Guesses: " + this.pastGuess);
		console.log("");
	},

	this.checkScore = function(spaces){
		if (this.lives <= 0){
			console.log("You loose!");
			return false;
		} else if (!spaces.includes("_")){
			console.log("You win!");
			return false;
		} else {
			return true;
		}
	},

	this.checkGuess = function(alpha, spaces){
		if (!/[a-z]/.test(alpha)) {
			console.log("Select an alpha key.");
			return false;
		} 

		else if (this.checkRepeat(alpha, spaces)){
			console.log("You guessed that already! Try again.");
			return false;
		} 

		else if (this.wrongGuess(alpha)) {			
			this.pastGuess.push(alpha);
			this.lives--;
			console.log("Nope! Try again!");
			this.printStats();
			console.log(spaces);
		}

		else {		
			console.log("You got one!");
			this.printStats();			
			return true;
		}

	}
}

module.exports = Word;
