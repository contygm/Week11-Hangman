// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// constuctor file

var game = require("./game.js");
var letter = require("./letter.js");
var $ = require('jQuery');

var pastGuess = [];
exports.pastGuess = pastGuess;

exports.checkRepeat = function(alpha) {
	for (var i = 0; i <= pastGuess.length; i++){
		if (alpha == pastGuess[i]) {
			return true;
		} 
	}
};

exports.checkGuess = function(alpha) {
	var correct = 0;
	for (var n = 0; n < game.theWord.length; n++) {
		if (alpha == game.theWord[n].toLowerCase()){
			letter.spaceHolder = letter.spaceHolder.substr(0, n) + game.theWord[n] + letter.spaceHolder.substr(n+1);
			correct++;
		}
	}
	console.log(letter.spaceHolder);
	if (correct > 0) {return true};
};