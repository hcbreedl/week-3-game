
//Game Needed Variables
//=====================
		var wins = 0;
		var guessesRemaining = 15;
		var alreadyGuessed = [];
		var words = [
		 		['c','h','a','r','m','a','n','d','e','r'],
				['s','q','u','i','r','t','l','e'],
				['v','e','n','o','s','a','u','r'],
				['p','i','k','a','c','h','u'],
				['e','e','v','e','e'],
				['g','e','n','g','a','r'],
				['m','e','w','t','w','o'],
				['c','h','a','r','i','z','a','r','d']
				];
		var wordToGuess = words[Math.floor(Math.random() * words.length)];
		
		var placeholder = [];
		var currentWord = [];

//Loop to generate placeholders for letters
//=========================================
		for (i = 0; i < wordToGuess.length; i++) {
				placeholder[i] = ' _ ';
			};

//onkeyup to kick the guessing off!
//=================================
		document.onkeyup=function(event){

			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
		    
		    //adds userChoice to alreadyGuessed array
			alreadyGuessed.push(userChoice);

//loop replacing the guessed letter with the placeholder
//IF the letter guessed is part of the wordToGuess
//======================================================
			for (i = 0; i < wordToGuess.length; i++) {
				if (userChoice === wordToGuess[i]) {
					placeholder[i] = userChoice;
					currentWord.push(wordToGuess[i]);
				 } 
			};

			//decreases guessesRemaining
			guessesRemaining--;

// I think i need to move this function somewhere else... Higher?
//Checks to see if the current word is equal to wordToGuess
//===============================================================
			function arraysEqual(arr1, arr2) {
			    if(arr1.length !== arr2.length)
			        return false;
			    for(var i = arr1.length; i--;) {
			        if(arr1[i] !== arr2[i])
			            return false;
			    }

				    return true;
			};

//If you win...
//=============
			if (arraysEqual(placeholder, wordToGuess)) {
				alert("YOU WIN! Hit OK to play the Pokemon Theme! Careful! Once it starts, it will not stop! Gotta Guess them all!!!!");
				wins++;
				guessesRemaining = 15;
				alreadyGuessed = [];
				placeholder = [];
				wordToGuess = words[Math.floor(Math.random() * words.length)];
				for (i = 0; i < wordToGuess.length; i++) {
				placeholder[i] = ' _ ';
				};
				//display wordToGuess video (want to add later).  Something like a pokeball gif hehe
				var audio = new Audio('http://216.227.134.162/ost/pokemon-ten-years-of-pokemon/lcmjyyaprv/1-pokemon-theme-season-theme-.mp3');
					audio.play();
			}

//If you run out of guesses...
//============================
			if (guessesRemaining === 0) {
				alert("Game Over!");
				guessesRemaining = 15;
				alreadyGuessed = [];
				currentWord = [];
			 	wordToGuess = words[Math.floor(Math.random() * words.length)];
			 	for (i = 0; i < wordToGuess.length; i++) {
				placeholder[i] = ' _ ';
				};
			}


		    
//What to display to the html
//===========================		    
		    var html = 
		        "<p><strong>Press any key to keep guessing!</strong></p><br>" +
		        "<p>Wins: " + wins + "</p><br>" +
		        "<p>Current Word: </p><br>" +
			    //Everthing pertaining to the placeholders and such
		        "<p id=\"placeholder\">" + placeholder.join('') + "</p>" + "<p><br></p>" + 
		        "<p>Number of Guesses Remaining: " + guessesRemaining + "<p><br>" +
			    "<p>Letters Already Guessed: <br>" + alreadyGuessed.join('') + "</p><br>";

			document.querySelector("#game").innerHTML = html;
		};