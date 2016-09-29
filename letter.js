// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
// constructor file

var game = require("./game.js");


var spaceHolder = "";
exports.spaceHolder = spaceHolder;



exports.printWord = function(){
	console.log("hello");
	console.log(spaceHolder);
	var theWord = game.theWord;


	for (var n = 0; n < theWord.length; n++) {
		console.log("hello2");
		console.log(spaceHolder);

		if (/[a-zA-Z]/.test(theWord[n])){
			spaceHolder += "EE";
			
			console.log("hello3");
			console.log(spaceHolder);
		} else {
			spaceHolder += "AA";
			console.log("hello4");
			console.log(spaceHolder);
		}
	}
	console.log("hello5");
	console.log(spaceHolder);
};

exports.checkSpaceHolder = function(alpha) {
	for (var n = 0; n < game.theWord.length; n++) {
		if (alpha == spaceHolder[n]){
			return true;
		}
	}	
};

