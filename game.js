var StarWars = [
	"Han Solo","Chewbacca the Wookiee",
	"Obi Wan Kenobi","Jar Jar Binks",
	"Count Dooku","Jabba the Hutt",
	"Leia Organa","Kylo Ren",
	"Anakin Skywalker","Darth Vader",
	
	"Luke Skywalker","Mace Windu",
	"Padme Amidala","The Phantom Menace",
	"Attack of the Clones","Revenge of the Sith",
	"A New Hope","The Empire Strikes Back",
	"Return of the Jedi","The Force Awakens",

	"Alderaan","Coruscant",
	"Dantooine","Naboo",
	"Tatooine","The Clone Wars",
	"George Lucas","Galactic Empire",
	"Rebel Alliance","Death Star",

	"Emperor Palpatine","Purple Lightsaber",
	"Jedi Master Yoda","Qui Gon Jinn",
	"May the Force Be With You","The Jedi Order",
	"There is no try","Never tell me the odds",
	"In a galaxy far far away","I am your Father",

	"Fear is the path to the dark side","Be mindful of your thoughts",
	"I sense great fear in you Skywalker","You were the chosen one",
	"Now I am the master","I find your lack of faith disturbing",
	"A powerful Sith you will become","I am C3PO Human Cyborg Relations",
	"Hard to see the Dark Side is","Laugh it up fuzz ball"
]


var theWord = StarWars[Math.floor(Math.random() * 50)];

function printWord() {
	for (var n = 0; n < theWord.length; n++) {
		if (/[a-zA-Z]/.test(theWord[n])){
			spaceHolder += "_";
		} else {
			spaceHolder += "\u00A0";
		}
	}
	document.getElementById("word").innerHTML= spaceHolder;
};

function resetWord (){
	theWord = StarWars[Math.floor(Math.random() * 50)];
	pastGuess = [];
	spaceHolder = "";
	lives = 7;
	document.getElementById("lives").innerHTML= lives + " Errors";
	document.getElementById("lastGuess").innerHTML= "Your last guess was: <br>";
	document.getElementById("pastGuess").innerHTML= "You've already used these! <br>" + pastGuess;
};