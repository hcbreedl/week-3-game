

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

		for (i = 0; i < wordToGuess.length; i++) {
				placeholder[i] = ' _ ';
			};

		document.onkeyup=function(event){

			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
		  
			alreadyGuessed.push(userChoice);

			

			for (i = 0; i < wordToGuess.length; i++) {
				if (userChoice === wordToGuess[i]) {
					placeholder[i] = userChoice;
					currentWord.push(wordToGuess[i]);
				 } 
			};

			guessesRemaining--;

			function arraysEqual(arr1, arr2) {
			    if(arr1.length !== arr2.length)
			        return false;
			    for(var i = arr1.length; i--;) {
			        if(arr1[i] !== arr2[i])
			            return false;
			    }

				    return true;
			};

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
				//display wordToGuess video
				var audio = new Audio('http://216.227.134.162/ost/pokemon-ten-years-of-pokemon/lcmjyyaprv/1-pokemon-theme-season-theme-.mp3');
					audio.play();
			}

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


		    
		    
		    var html = 
		        "<p><strong>Press any key to keep guessing!</strong></p><br>" +
		        "<p>Wins: " + wins + "</p><br>" +
		        "<p>Current Word: </p><br>" +
			    //Everthing pertaining to the placeholders and such
		        placeholder.join('') + "<p><br></p>" + 
		        "<p>Number of Guesses Remaining: " + guessesRemaining + "<p><br>" +
			    "<p>Letters Already Guessed: <br>" + alreadyGuessed.join('') + "</p><br>";

			document.querySelector("#game").innerHTML = html;
		};