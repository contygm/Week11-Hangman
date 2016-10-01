
var word = require("./word.js");
var game = require("./game.js");
var inquirer = require('inquirer');

function hangman(){
	
	inquirer.prompt([{
		name: "guess",
		message: "Go on then, have a guess."
	}]).then(function(answers) {
			var guess = answers.guess.toLowerCase();
			
			// check guess
			newGame.checkGuess(guess);

			// win or loose, do you want to play again?
			if (!newGame.checkScore()){				
				inquirer.prompt([{
					name: "replay",
					type: 'confirm',
					message: "Would you like to play again?"
				}]).then(function(answers) {
					if(answers.replay){
						newGame.reSetUp();
						hangman();
					} else {
						console.log("Farewell, Brave Warrior.");
						return false;
					}
				});					
			
			// keep going; haven't won or lost
			} else {
				hangman();
			}
		});
}

// play game

var newGame = new Word(game.getWord())
newGame.setUp();
hangman();







