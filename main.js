var fs = require('fs');
var game = require("./game.js");
var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require('inquirer');

var wins = 0;
var lives = 7;
var pastGuess = [];
var theWord = game.getWord();
var spaceholder = letter.printWord(theWord);

exports.pastGuess = pastGuess;
exports.theWord = theWord;
exports.spaceholder = spaceholder;
exports.lives = lives;

function printStats(){
	
	console.log("");
	console.log("STATS")
	console.log("Lives: " + lives);
	console.log("Past Guesses: " + pastGuess)
	console.log("--------------")
	console.log(spaceholder)
	console.log("");
}


function hangman(){
	
	if (lives > 0){
		inquirer.prompt([{
			name: "guess",
			message: "Go on then, have a guess."
		}]).then(function(answers) {
				var guess = answers.guess.toLowerCase();
				console.log(guess);
				word.checkGuess(guess);
				printStats();

				hangman();
			});
	}
}

console.log(theWord);
printStats();
hangman();







