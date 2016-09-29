var fs = require('fs');
var game = require("./game.js");
var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require('inquirer');
var $ = require('jQuery');

var wins = 0;
var lives = 7;



// function hangman(event) {
// 	var guess = String.fromCharCode(event.keyCode).toLowerCase();
	
// 	// is it an alpha key?
// 	if (!/[A-Z]/.test(guess)) {
// 		console.log("Select an alpha key.");
// 	} 

// 	// have they guessed that already?
// 	else if (word.checkRepeat(guess)){
// 		console.log("You guessed that already! Try again.");
// 	} 

// 	else if (letter.checkSpaceHolder(guess)) {
// 		console.log("You got that one right already!");
// 	}

// 	// check if right
// 	else if (word.checkGuess(guess)) {
// 		console.log("You got one!");
		
// 		// checkWin();
// 	}

// 	// wrong guess
// 	else {
// 		word.pastGuess.push(guess);
		
// 		// updateLives();

// 		console.log("You've already used these! <br>" + word.pastGuess);
// 		console.log("Nope! Try again!");
		
// 	}

// }

function setHangman(){

	if (lives > 0){
		inquirer.prompt([{
			name: "guess",
			message: "Go on then, have a guess."
		}]).then(function(answers) {
				var guess = answers.guess;

				// setHangman();
			});
	}
}

game.getWord();
letter.printWord();
// setHangman();







