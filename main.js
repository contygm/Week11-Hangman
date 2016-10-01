
var word = require("./word.js");
var inquirer = require('inquirer');


function hangman(){
	
	inquirer.prompt([{
		name: "guess",
		message: "Go on then, have a guess."
	}]).then(function(answers) {
			var guess = answers.guess.toLowerCase();
			
			// check guess
			word.checkGuess(guess);

			// win or loose, do you want to play again?
			if (!word.checkScore()){				
				inquirer.prompt([{
					name: "replay",
					type: 'confirm',
					message: "Would you like to play again?"
				}]).then(function(answers) {
					if(answers.replay){
						word.reSetUp();
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
word.setUp();
hangman();







