// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// constuctor file
// var fs = require('fs');
// var game = require("./game.js");
// var letter = require("./letter.js");
// var main = require("./main.js");


// function checkRepeat(alpha) {
// 	for (var i = 0; i <= main.pastGuess.length; i++){
// 		if (alpha == main.pastGuess[i]) {
// 			return true;
// 		}
// 	}
// };

// function checkSpaceHolder (alpha) {
// 	for (var n = 0; n < main.theWord.length; n++) {
// 		if (alpha == main.spaceholder.toLowerCase()){
// 			return true;
// 		}
// 	}	
// };

// function correctGuess(alpha) {
// 	var correct = 0;
// 	for (var n = 0; n < main.theWord.length; n++) {
// 		if (alpha == main.theWord[n].toLowerCase()){
// 			var temp = main.spaceholder.substr(0, n) + main.theWord[n] + main.spaceholder.substr(n+1);
// 			main.spaceholder = temp;
// 			correct++;
// 		}
// 	}
// 	if (correct > 0) {return true};

// };

// exports.printStats = function(){
	
// 	console.log("");
// 	console.log("STATS")
// 	console.log("Lives: " + main.lives);
// 	console.log("Past Guesses: " + main.pastGuess);
// 	console.log("");
// }

// exports.checkGuess = function(alpha){
// 	console.log(main.spaceholder)
// 	console.log(main.theWord);
// 	// is it an alpha key?
// 	if (!/[a-z]/.test(alpha)) {
// 		console.log("Select an alpha key.");
// 	} 

// 	// have they guessed that already?  
// 	else if (checkRepeat(alpha) || checkSpaceHolder(alpha)){
// 		console.log("You guessed that already! Try again.");
// 	} 

// 	// check if right
// 	else if (correctGuess(alpha)) {
// 		console.log("You got one!");

// 		printStats();
		
// 		// checkWin();
// 	}

// 	// wrong guess
// 	else {
// 		main.pastGuess.push(alpha);
// 		main.lives--;
// 		printStats();

// 		console.log("Nope! Try again!");
		
// 	}

// }