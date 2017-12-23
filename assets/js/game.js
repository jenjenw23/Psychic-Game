// JavaScript Document

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
	var guess = 9;
	var winDiv = document.getElementById("win");
	var lossDiv = document.getElementById("loss");
	var guessleftDiv = document.getElementById("guessleft");
	var computerGuess = "a";
	winDiv.innerHTML = ("<p>" + wins + "</p>");
	lossDiv.innerHTML = losses;
	guessleftDiv.innerHTML = guess;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
	// Randomly chooses a choice from the options array. This is the Computer's guess.
	  if (guess === 9) { 
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	  console.log("computer guess is " + computerGuess);
	  }	
	
      // Determines which key was pressed.
      var userGuess = event.key;
	  console.log(userGuess);
	  
	  var guessDiv = document.getElementById("userChoice");
	  var holdGuess = document.createElement("p");
	  holdGuess.innerHTML = userGuess;
	  guessDiv.appendChild(holdGuess);
	  guess--;
	  guessleftDiv.innerHTML = guess;
    
      // This logic determines the outcome of the game (win/loss), and increments the appropriate number
      if (guess < 9) {

        if ((userGuess != computerGuess) && (guess === 0)) {
          losses++;
		  guessDiv.innerHTML = " ";
		  guess = 9;
	  	  lossDiv.innerHTML = losses;
        } else if (userGuess === computerGuess) {
          wins++;
		  guess = 9;
		  guessDiv.innerHTML = " ";
		  winDiv.innerHTML = ("<p>" + wins + "</p>");
        }
      }
    };
