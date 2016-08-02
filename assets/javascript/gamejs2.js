var words = {
	charmander: ['c','h','a','r','m','a','n','d','e','r'],
	squirtle: ['s','q','u','i','r','t','l','e'],
	venosaur: ['v','e','n','o','s','a','u','r'],
	pikachu: ['p','i','k','a','c','h','u'],
	eevee: ['e','e','v','e','e'],
	gengar: ['g','e','n','g','a','r'],
	mewtwo: ['m','e','w','t','w','o'],
	charizard: ['c','h','a','r','i','z','a','r','d'],
}

var gameInfo = {
	wins: 0,
	guessesRemaining: 15,
	alreadyGuessed: [],
	placeholder: [],
	currentWord: [],
}

var wordToGuess = words[Math.floor(Math.random() * words.length)];

for (i = 0; i < wordToGuess.length; i++) {
	gameInfo.placeholder[i] = ' _ ';
};

document.onkeyup=function(event){

	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
		  
	gameInfo.alreadyGuessed.push(userChoice);

	for (i = 0; i < gameInfo.wordToGuess.length; i++) {
		if (userChoice === gameInfo.wordToGuess[i]) {
			gameInfo.placeholder[i] = userChoice;
			gameInfo.currentWord.push(gameInfo.wordToGuess[i]);
		} 
	};

	gameInfo.guessesRemaining--;

	function arraysEqual(arr1, arr2) {
		if(arr1.length !== arr2.length)
		    return false;
			for(var i = arr1.length; i--;) {
			    if(arr1[i] !== arr2[i])
			        return false;
				}
		return true;
	};

	if (arraysEqual(gameInfo.placeholder, gameInfo.wordToGuess)) {
				alert("YOU WIN! Hit OK to play the Pokemon Theme! Careful! Once it starts, it will not stop! Gotta Guess them all!!!!");
				gameInfo.wins++;
				gameInfo.guessesRemaining = 15;
				gameInfo.alreadyGuessed = [];
				gameInfo.placeholder = [];
				gameInfo.wordToGuess = gameInfo.words[Math.floor(Math.random() * words.length)];
				for (i = 0; i < gameInfo.wordToGuess.length; i++) {
				gameInfo.placeholder[i] = ' _ ';
				};
				//display wordToGuess video
				var audio = new Audio('http://216.227.134.162/ost/pokemon-ten-years-of-pokemon/lcmjyyaprv/1-pokemon-theme-season-theme-.mp3');
					audio.play();
	}

	if (gameInfo.guessesRemaining === 0) {
				alert("Game Over!");
				gameInfo.guessesRemaining = 15;
				gameInfo.alreadyGuessed = [];
				gameInfo.currentWord = [];
			 	gameInfo.wordToGuess = gameInfo.words[Math.floor(Math.random() * words.length)];
			 	for (i = 0; i < gameInfo.wordToGuess.length; i++) {
				gameInfo.placeholder[i] = ' _ ';
				};
	}

			    var html = 
		        "<p><strong>Press any key to keep guessing!</strong></p><br>" +
		        "<p>Wins: " + gameInfo.wins + "</p><br>" +
		        "<p>Current Word: </p><br>" +
			    //Everthing pertaining to the placeholders and such
		        gameInfo.placeholder.join('') + "<p><br></p>" + 
		        "<p>Number of Guesses Remaining: " + gameInfo.guessesRemaining + "<p><br>" +
			    "<p>Letters Already Guessed: <br>" + gameInfo.alreadyGuessed.join('') + "</p><br>";

			document.querySelector("#game").innerHTML = html;
		};