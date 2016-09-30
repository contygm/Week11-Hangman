// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
// constructor file

var game = require("./game.js");

module.exports = {
	spaceholder: "",

	initialPrint: function(){
		for (var n = 0; n < game.theWord.length; n++) {
			
			if (/[a-zA-Z]/.test(game.theWord[n])){
				this.spaceholder += "_ ";
			} else {
				this.spaceholder += "  ";
			}
		}
		console.log(this.spaceholder);
	},

}
