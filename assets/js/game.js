// JavaScript Document

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
	var guess = 9;
	var winDiv = document.getElementById("win");
	var lossDiv = document.getElementById("loss");
	var guessleftDiv = document.getElementById("guessleft");
	winDiv.innerHTML = ("<p>" + wins + "</p>");
	lossDiv.innerHTML = losses;
	guessleftDiv.innerHTML = guess;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
	

      // Determines which key was pressed.
      var userGuess = event.key;
	  
	  var guessDiv = document.getElementById("userChoice");
	  var holdGuess = document.createElement("p");
	  holdGuess.innerHTML = userGuess;
	  guessDiv.appendChild(holdGuess);
		//console.log(guessDiv);
	  guess--;
	  guessleftDiv.innerHTML = guess;

	  

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
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

       // var html =
//          //"<p>You chose: " + userGuess + "</p>" +
//          "<p>Wins: " + wins + "</p>" +
//          "<p>Losses: " + losses + "</p>" +
//		  "<p>Guesses remaining: " + guess + "</p>";
//
//
//        // Set the inner HTML contents of the #game div to our html string
//        document.querySelector("#game").innerHTML = html;
      }
    };
