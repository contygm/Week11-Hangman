module.exports = {
	StarWars: [
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
	"Hard to see the Dark Side is","Laugh it up fuzz ball" ],

	theWord: "",

	getWord: function(){
		this.theWord = this.StarWars[Math.floor(Math.random() * 50)];
		console.log(this.theWord);
	}
}















