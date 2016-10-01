// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
// constructor file

var game = require("./game.js");

var Letter = function(word) {
	this.theWord = word;
	this.spaceholder = "",

	this.initialPrint = function(){
		this.spaceholder = "";
		console.log(this.theWord);
		for (var n = 0; n < this.theWord.length; n++) {
			
			if (/[a-zA-Z]/.test(this.theWord[n])){
				this.spaceholder += "_ ";
			} else {
				this.spaceholder += "  ";
			}
		}
		console.log(this.spaceholder);
	},

	
	this.changeSpaces = function(x){
		if (x > 0){
			var y = x*2;
			var temp = this.spaceholder.substr(0, y) + game.theWord[x] + this.spaceholder.substr(y+1);
			this.spaceholder = temp;
		} else {
			var temp = this.spaceholder.substr(0, x) + game.theWord[x] + this.spaceholder.substr(x+1);
			this.spaceholder = temp;
		}
		
	}

}

module.exports = Letter;