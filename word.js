// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// constuctor file


var game = require("./game.js");
var letter = require("./letter.js");

var Word = function(alpha){
	this.pastGuess = [],
	this.lives = 7,

	this.setUp = function(){
		game.getWord();
		this.printStats();
		letter.initialPrint();
	}
	this.reSetUp = function(){
		this.lives = 7;
		this.pastGuess = [];
		game.getWord();
		this.printStats();
		letter.initialPrint();
	},

	this.checkRepeat = function(){
		for (var i = 0; i < this.pastGuess.length; i++){
			if (alpha == this.pastGuess[i]) {
				return true;	
			}
		}
	},

	this.checkSpaces = function(){
		for (var n = 0; n < letter.spaceholder.length; n++) {
			if (alpha == letter.spaceholder[n].toLowerCase()){
				return true;
			}
		}	
	},

	this.correctGuess = function(){
		var correct = 0;
		for (var n = 0; n < game.theWord.length; n++) {			
			if (alpha == game.theWord[n].toLowerCase()){
				letter.changeSpaces(n);
				correct++;
			}
		};		
		if (correct > 0) {return correct;};
	},

	this.printStats = function(){
		console.log("");
		console.log("STATS")
		console.log("Lives: " + this.lives);
		console.log("Past Guesses: " + this.pastGuess);
		console.log("");
	},

	this.checkScore = function(){
		if (this.lives <= 0){
			console.log("You loose!");
			return false;
		} else if (!letter.spaceholder.includes("_")){
			console.log("You win!");
			return false;
		} else {
			return true;
		}
	},

	this.checkGuess = function(){
		if (!/[a-z]/.test(alpha)) {
			console.log("Select an alpha key.");
		} 

		else if (this.checkRepeat(alpha) || this.checkSpaces(alpha)){
			console.log("You guessed that already! Try again.");
		} 

		else if (this.correctGuess(alpha)) {
			
			console.log("You got one!");
			this.printStats();
			console.log(letter.spaceholder);	
		}

		else {		

			this.pastGuess.push(alpha);
			this.lives--;
			console.log("Nope! Try again!");
			this.printStats();
			console.log(letter.spaceholder);
		}

	}
}

module.exports = Word;
