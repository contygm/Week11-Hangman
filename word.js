// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// constuctor file


var game = require("./game.js");
var letter = require("./letter.js");
var main = require("./main.js");

module.exports = {
	pastGuess: [],

	lives: 7,

	checkRepeat: function(alpha){
		for (var i = 0; i < this.pastGuess.length; i++){
			if (alpha == this.pastGuess[i]) {
				return true;	
			}
		}
	},

	checkSpaces: function(alpha){
		for (var n = 0; n < letter.spaceholder.length; n++) {
			if (alpha == letter.spaceholder[n].toLowerCase()){
				return true;
			}
		}	
	},

	correctGuess: function(alpha){
		var correct = 0;
		for (var n = 0; n < game.theWord.length; n++) {			
			if (alpha == game.theWord[n].toLowerCase()){
				letter.changeSpaces(n);
				correct++;
			}
		};		
		if (correct > 0) {return correct;};
	},

	printStats: function(){
		console.log("");
		console.log("STATS")
		console.log("Lives: " + this.lives);
		console.log("Past Guesses: " + this.pastGuess);
		console.log("");
	},

// ------------
	playAgain: function(){

	},

	checkScore: function(){

	},
// -------------

	checkGuess: function(alpha){
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

// ------------------- 
			// checkWin(); probs checkScore instead
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

