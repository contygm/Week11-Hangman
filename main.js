var game = require("./game.js");
var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require('inquirer');

function setUp(){
	game.getWord();
	word.printStats();
	letter.initialPrint();
}

function hangman(){
	
	inquirer.prompt([{
		name: "guess",
		message: "Go on then, have a guess."
	}]).then(function(answers) {
			var guess = answers.guess.toLowerCase();
			
			word.checkGuess(guess);

			if (!word.checkScore()){				
				inquirer.prompt([{
					name: "replay",
					type: 'confirm',
					message: "Would you like to play again?"
				}]).then(function(answers) {
					if(answers.replay){
						setUp();
						hangman();
					} else {
						console.log("Farewell, Brave Warrior.");
						return false;
					}
				});					
			} else {
				hangman();
			}
		});
}

setUp();
hangman();







