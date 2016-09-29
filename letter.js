// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
// constructor file

var game = require("./game.js");

exports.printWord = function(word){

	var spaceHolder = "";
	
	for (var n = 0; n < word.length; n++) {
		
		if (/[a-zA-Z]/.test(word[n])){
			spaceHolder += "_ ";
		} else {
			spaceHolder += "  ";
		}
	}

	return spaceHolder;
};

exports.checkSpaceHolder = function(alpha) {
	for (var n = 0; n < game.theWord.length; n++) {
		if (alpha == spaceHolder[n]){
			return true;
		}
	}	
};

