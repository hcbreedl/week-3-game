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
				alert("YOU WIN!");
				wins++;
				guessesRemaining = 15;
				alreadyGuessed = [];
				placeholder = [];
				wordToGuess = words[Math.floor(Math.random() * words.length)];
				for (i = 0; i < wordToGuess.length; i++) {
				placeholder[i] = ' _ ';
				};
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
		        "<p>Press any key to get started!</p>" +
		        "<p>Wins: " + wins + "</p>" +
		        "<p>Current Word: </p>" +
			    //Everthing pertaining to the placeholders and such
		        placeholder + 
		        "<p>Number of Guesses Remaining: " + guessesRemaining + "<p>" +
			    "<p>Letters Already Guessed: " + alreadyGuessed + "</p>";

			document.querySelector("#game").innerHTML = html;
		};