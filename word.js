// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// constuctor file


var pastGuess = [];
exports.pastGuess = pastGuess;

exports.checkRepeat = function(letter) {
	for (var i = 0; i <= pastGuess.length; i++){
		if (letter == pastGuess[i]) {
			return true;
		} 
	}
};

exports.checkGuess = function(letter) {
	var correct = 0;
	for (var n = 0; n < theWord.length; n++) {
		if (letter == theWord[n].toLowerCase()){
			spaceHolder = spaceHolder.substr(0, n) + theWord[n] + spaceHolder.substr(n+1);
			correct++;
		}
	}
	console.log(spaceHolder);
	if (correct > 0) {return true};
};