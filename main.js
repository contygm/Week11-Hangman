var game = require("./game.js");
var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require('inquirer');

var wins = 0;
var lives = 7;
var pastGuess = [];
var theWord = "";
var spaceholder = "";

function setUp(){
	theWord = game.getWord(theWord);
	console.log(theWord);
	spaceholder = letter.printWord(theWord);
	console.log(spaceholder);
}


// function hangman(){
	
// 	if (lives > 0){
// 		inquirer.prompt([{
// 			name: "guess",
// 			message: "Go on then, have a guess."
// 		}]).then(function(answers) {
// 				var guess = answers.guess.toLowerCase();
// 				word.checkGuess(guess);

// 				hangman();
// 			});
// 	} else {
// 		console.log("You lose.");
// 	}
// }

setUp();
hangman();







