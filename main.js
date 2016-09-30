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

			hangman();
		});
}

setUp();
hangman();







