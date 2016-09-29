// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
// constructor file

var spaceHolder = "";

exports.printWord = function() {
	for (var n = 0; n < theWord.length; n++) {
		if (/[a-zA-Z]/.test(theWord[n])){
			spaceHolder += "_";
		} else {
			spaceHolder += "\u00A0";
		}
	}
	console.log(spaceHolder);
};

exports.checkSpaceHolder = function(letter) {
	for (var n = 0; n < theWord.length; n++) {
		if (letter == spaceHolder[n]){
			return true;
		}
	}	
};

