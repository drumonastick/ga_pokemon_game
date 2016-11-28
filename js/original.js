/**
 * GA Games!
 * Website Pseudocode
 *
 *  =========================================
 *  START SCREEN
 *
 *  Enables selection of students or classes
 *  Start with just a few students to choose from- PJ Pirate, Tape Man, Javo Lion, Adrain, Nuro Bunny, Kristin
 *  Start a New game, or Join a game
 *
 *  -- Start New Game "Let the games begin"
 *  onclick: selects the students for battle, hides the START SCREEN, shows the BATTLE screen with students loaded.
 *
 *  Creates a fresh game, and somehow allows others to join (ID code?)
 *
 *  -- Join a Game
 *  Enables client player to join an established game (ID code?)
 *
 *
 *
 *  =========================================
 *  BATTLE SCREEN

*/
/* Check if roundsWon by either have resulted in Final battle win, or rounds continue
Currently have just first to two rounds will win, ie if roundsWon === 2,then WINZ. */
function battle () {
  var roundsNeededToWin = 2;
  var playerOneRoundsWon = 0;
  var playerTwoRoundsWon = 0;
  var battleWinner;

  /* continuous play rounds until one player reaches the winning total of (2) rounds */
  /* check if someone has won, then display winning team */
  while (playerOneRoundsWon < roundsNeededToWin && playerTwoRoundsWon < roundsNeededToWin) {
    /* continuing playing battleRounds and incrementing the wins between the players */
    var roundWinner = battleRound();

    /* when P1 has won the round */
    if (roundWinner === "Player 1") {
      playerOneRoundsWon++;
      jQuery("#actionStatus").html("Player Red wins this round!");

      /* display medals won depending on number of rounds won */
      if (playerOneRoundsWon === 1) {
        jQuery("#playerOneRoundOneBlank").hide();
        jQuery("#playerOneRoundOneWin").show();
      }
      else if (playerOneRoundsWon === 2) {
        jQuery("#playerOneRoundTwoBlank").hide();
        jQuery("#playerOneRoundTwoWin").show();
      }

      /* check if player has won the battle */
      if (playerOneRoundsWon === roundsNeededToWin) {
        battleWinner = "Red";
      }
    }
    /* when P2 has won the round */
    else if (roundWinner === "Player 2") {
      playerTwoRoundsWon++;
      jQuery("#actionStatus").html("Player Black wins this round!");

      /* display medals won depending on number of rounds won */
      if (playerTwoRoundsWon === 1) {
        jQuery("#playerTwoRoundOneBlank").hide();
        jQuery("#playerTwoRoundOneWin").show();
      }
      else if (playerTwoRoundsWon === 2) {
        jQuery("#playerTwoRoundTwoBlank").hide();
        jQuery("#playerTwoRoundTwoWin").show();
      }

      /* check if player has won the battle */
      if (playerTwoRoundsWon === roundsNeededToWin) {
        battleWinner = "Black";
      }
    }
  }
  /* if the while loop has been exited, then someone has won */
  jQuery("#actionStatus").append("<br/> Player " + battleWinner + " wins this battle!");
}


/* individual rounds of battle, function returns string of which player won this round */
function battleRound () {
  /* resets the rounds html display and variables */
  jQuery("#healthOne").html("10");
  jQuery("#healthTwo").html("10");
  var playerOneHealthPoints = 10;
  var playerTwoHealthPoints = 10;
  var noWinner = true;
  var winner;
  var turn = "player one";

  while (noWinner === true) {
    /* see if it's player One's turn */
    if (turn === "player one") {
      /* generate random damage points within 10 integers */
      var damagePoints = Math.floor(10*Math.random());
      /* subtract damage points from HP of P2*/
      playerTwoHealthPoints = playerTwoHealthPoints - damagePoints;

      /*check if P2 still has health, if yes, continue round, if  not then announce winner as P1 */
      /* first if: P2 has health left */
      if (playerTwoHealthPoints > 0) {
        /* display hp */
        jQuery("#healthTwo").html(playerTwoHealthPoints);
        /* round continues, enable turn for P2 on next instance of while loop */
        turn = "player two";
      }
      /* else: P2 has 0 or less hp */
      else{
        /* display hp as just 0 */
        jQuery("#healthTwo").html(0);
        /* round ends as p2 has no health left. set noWinner as false, and Winner = p1 */
        noWinner = false;
        winner = "Player 1";
        return(winner);
      }
    }

    /* otherwise, it's player Two's turn */
    else {
      /* generate random damage points within 10 integers */
      var damagePoints = Math.floor(10*Math.random());
      /* subtract damage points from HP of P2*/
      playerOneHealthPoints = playerOneHealthPoints - damagePoints;

      /*check if P1 still has health, if yes, continue round, if  not then announce winner as P2 */
      /* first if: P1 has health left */
      if (playerOneHealthPoints > 0) {
        /* display hp */
        jQuery("#healthOne").html(playerOneHealthPoints);
        /* round continues, enable turn for P1 on next instance of while loop */
        turn = "player one";
      }
      /* else: P1 has 0 or less hp */
      else{
        /* display hp as just 0 */
        jQuery("#healthOne").html(0);
        /* round ends as p1 has no health left. set noWinner as false, and Winner = p2 */
        noWinner = false;
        winner = "Player 2";
        return(winner);
      }
    }
  }
}

jQuery("#actionButton").click(battle);


/*Within each round
create vars for each student's life, starting at 10hp => pokemon1hp, pokemon2hp.
"maths.random" to firstly select one of three of their attacks, and also for damage points.
subtract damage points from opponents HP, and check if they have run out of hp (< 0).
If they continue to live, continute playing, with the next pokemon's attack, or
Else the round is won, the winner is shown and the roundWon count gets incremented by 1.

 *  =========================================
 *  MEET & GREET GLADIATORS SCREEN
 *
 *  Simply lays out all the students in a grid (2 col by 3 rows regardless)
 *  Includes their name and linkedin profile links
 *  Button link to retuern to the start of the game
 */
