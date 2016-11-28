// variables to keep track of game statistics

var battleWinner;
var roundsNeededToWin = 2;
var WinnerOfRound;
var playerOne;
var playerTwo;
var playerOneRoundsWon = 0;
var playerTwoRoundsWon = 0;
var turn = "player one";
var playerOneHealthPoints = 10;
var playerTwoHealthPoints = 10;
var profilePicOne = "ngai_doug.jpg";
var profilePicTwo = "gradyuk_sergio.jpg";
var teamRedVolunteers;
var teamBlackVolunteers;
//var volunteerPool = [];

// Calls on Student generator and amends HTMl to display students
function reapVolunteersForTribute () {
  // Find the two teams selected from radio buttons. Assign the corresponding arrays.
  teamRedVolunteers = jQuery('input[name=teamRed]:radio:checked').val();
  teamBlackVolunteers = jQuery('input[name=teamBlack]:radio:checked').val();

  // For the two class teams selected, reap one volunteer student from each. Can handle the same class, as the same actual array is called on.
  playerOne = volunteerForTribute(teamRedVolunteers);
  playerTwo = volunteerForTribute(teamBlackVolunteers);

  jQuery("#playerPhotoRed").attr({
    src:playerOne.photoPath,
    alt:playerOne.firstName + " " + playerOne.lastName
  });
  jQuery("#playerPhotoBlack").attr({
    src:playerTwo.photoPath,
    alt:playerTwo.firstName + " " + playerTwo.lastName
  });

  // For the two students, also pre-display their HTML to the gladiators screen, but at this point, this whole panel is hidden. This will save finding these students later from the array.
  jQuery("#gladiatorsListRed").append("<li class='gladiatorRow'><img src='" + playerOne.photoPath + "' alt='" + playerOne.firstName + " " + playerOne.lastName + "'><img class='liLogo' src='img/graphic_assets/linkedin_logo.png' alt='linkedin logo'><a href='" + playerOne.linkedIn + "' target='_blank'>" + playerOne.firstName + " " + playerOne.lastName + "</a></li>");

  jQuery("#gladiatorsListBlack").append("<li class='gladiatorRow'><img src='" + playerTwo.photoPath + "' alt='" + playerTwo.firstName + " " + playerTwo.lastName + "'><img class='liLogo' src='img/graphic_assets/linkedin_logo.png' alt='linkedin logo'><a href='" + playerTwo.linkedIn + "' target='_blank'>" + playerTwo.firstName + " " + playerTwo.lastName + "</a></li>");
}

// RANDOM STUDENT SELECTOR
// Returns a student object, within a given student array
function volunteerForTribute (volunteerValue) {

  // First checks which student array is suitable, based on the radiobutton value argument, then sets the var to this student array for random selection.
  var studentArray;

  if (volunteerValue === "uxdi10") {
    studentArray = studentsUXDi10;
  }
  else if (volunteerValue === "uxdi11") {
    studentArray = studentsUXDi11;
  }
  else if (volunteerValue === "uxdi13") {
    studentArray = studentsUXDi13;
  }
  else if (volunteerValue === "fewd25") {
    studentArray = studentsFEWD25;
  }

  // Finds length of the given student array, then random generates for an array index.
  var volunteer = studentArray[Math.floor(studentArray.length * Math.random())];
  // Checks whether the student has already been selected during this [entire browser session].
  // If they have, then continues looping until an unselected student is found.
  while (volunteer.volunteerForTribute === true) {
    volunteer = studentArray[Math.floor(studentArray.length * Math.random())];
  }
  // An unselected student has been found, and can be returned (ie volunteered for tribute)
  volunteer.volunteerForTribute = true;
  return volunteer;
}

//Begin the game from the Start screen (by selecting the first pair of students, hiding the start screen div, and showing the game div)
jQuery("#beginGamesButton").click( function () {
  // Using common function to start the first round
  nextRound();
  jQuery("#startScreen").hide();
  jQuery("#gameScreen").show();
});

function attackTurn () {
  var attackLevel;
  var damagePoints;
  var attackName;
  var attackEffectLevel;

  /* see if it's player One's turn */
  if (turn === "player one") {
    //refresh the actionStrip display
    jQuery("#attackButtonRed").hide();
    //set the tine profile pic
    jQuery("#actionProfilePic").attr({
      src:playerOne.photoPath,
      alt:playerOne.firstName + " " + playerOne.lastName
    });
    jQuery("#actionProfilePic").show();

    // Randomly select one of the three attacks for the player. attackLevel should only have integer values of [1, 2, 3].
    attackLevel = Math.floor(3*Math.random()) + 1;

    // If cases for each attackLevel [1, 2, 3], then assigns attack variables for display
    if (attackLevel === 1){
      attackName = playerOne.firstAttack;
      damagePoints = playerOne.firstDamage;
      attackEffectLevel = "not very effective!";
    }
    else if (attackLevel === 2){
      attackName = playerOne.secondAttack;
      damagePoints = playerOne.secondDamage;
      attackEffectLevel = "fairly effective!";
    }
    //captures attackLevel 3 or otherwise
    else {
      attackName = playerOne.thirdAttack;
      damagePoints = playerOne.thirdDamage;
      attackEffectLevel = "super effective!";
    }

    //display the attack and damage points dealt by this player
    jQuery("#attackMaker").html(playerOne.firstName + " used");
    jQuery("#attackName").html(attackName + "  " + damagePoints + " pts!");
    jQuery("#attackStrength").html("It's " + attackEffectLevel);

    /* subtract damage points from HP of P2*/
    playerTwoHealthPoints = playerTwoHealthPoints - damagePoints;

    /*check if P2 still has health, if yes, continue round, if  not then announce winner as P1 */
    /* first if: P2 has health left */
    if (playerTwoHealthPoints > 0) {
      /* display hp */
      jQuery("#healthTwo").html(playerTwoHealthPoints);
      /* round continues, enable turn for P2 on next instance of attackButton */
      turn = "player two";
      jQuery("#attackButtonBlack").show();
    }
    /* else: P2 has 0 or less hp */
    else {
      /* display hp as just 0 */
      jQuery("#healthTwo").html(0);
      /* round ends as p2 has no health left. set Winner = p1 */
      WinnerOfRound = "Player 1";
      announceWinner();
    }
  }

  /* otherwise, it's player Two's turn */
  else {
    //refresh the actionStrip display for P2
    jQuery("#attackButtonBlack").hide();
    //set the tine profile pic
    jQuery("#actionProfilePic").attr({
      src:playerTwo.photoPath,
      alt:playerTwo.firstName + " " + playerTwo.lastName
    });
    jQuery("#actionProfilePic").show();

    // Randomly select one of the three attacks for the player. attackLevel should only have integer values of [1, 2, 3].
    attackLevel = Math.floor(3*Math.random()) + 1;

    // If cases for each attackLevel [1, 2, 3], then assigns attack variables for display
    if (attackLevel === 1){
      attackName = playerTwo.firstAttack;
      damagePoints = playerTwo.firstDamage;
      attackEffectLevel = "not very effective!";
    }
    else if (attackLevel === 2){
      attackName = playerTwo.secondAttack;
      damagePoints = playerTwo.secondDamage;
      attackEffectLevel = "fairly effective!";
    }
    //captures attackLevel 3 or otherwise
    else {
      attackName = playerTwo.thirdAttack;
      damagePoints = playerTwo.thirdDamage;
      attackEffectLevel = "super effective!";
    }

    //display the attack and damage points dealt by this player
    jQuery("#attackMaker").html(playerTwo.firstName + " used");
    jQuery("#attackName").html(attackName + "  " + damagePoints + " pts!");
    jQuery("#attackStrength").html("It's " + attackEffectLevel);

    /* subtract damage points from HP of P2*/
    playerOneHealthPoints = playerOneHealthPoints - damagePoints;

    /*check if P1 still has health, if yes, continue round, if  not then announce winner as P2 */
    /* first if: P1 has health left */
    if (playerOneHealthPoints > 0) {
      /* display hp */
      jQuery("#healthOne").html(playerOneHealthPoints);
      /* round continues, enable turn for P1 on next instance of attackButton */
      turn = "player one";
      jQuery("#attackButtonRed").show();
    }
    /* else: P1 has 0 or less hp */
    else {
      /* display hp as just 0 */
      jQuery("#healthOne").html(0);
      /* round ends as p1 has no health left. set Winner = p2 */
      WinnerOfRound = "Player 2";
      announceWinner();
    }
  }
}

function announceWinner () {
  // Hide the attackButton
  jQuery("#attackButtonRed").hide();
  jQuery("#attackButtonBlack").hide();

  // Show the roundWinnerAnnounce button
  jQuery("#roundWinnerAnnounce").show();
}

//Check if someone has won the round, if so update the round counter
//If someone has won, check if the whole battle is over, if not, move onto next round by switch the view and button
function roundWinner () {
  // Clear up the actionStrip
  jQuery("#attackMaker").html("");
  jQuery("#attackName").html("");
  jQuery("#attackStrength").html("");
  jQuery("#roundWinnerAnnounce").hide();

  /* when P1 has won the round */
  if (WinnerOfRound === "Player 1") {
    /* increment the rounds won by this player */
    playerOneRoundsWon++;
    jQuery("#attackName").html(playerOne.firstName+" wins this round!");

    /* display medals won depending on number of rounds won */
    if (playerOneRoundsWon === 1) {
      jQuery("#playerOneRoundOneBlank").hide();
      jQuery("#playerOneRoundOneWin").show();
      jQuery("#nextRoundButton").show();
    }
    else if (playerOneRoundsWon === 2) {
      //update the round counter
      jQuery("#playerOneRoundTwoBlank").hide();
      jQuery("#playerOneRoundTwoWin").show();
      // Show Meet our Gladators button
      jQuery("#meetAndGreetGladiatorsButton").show();
    }
  }
  /* when P2 has won the round */
  else if (WinnerOfRound === "Player 2") {
    playerTwoRoundsWon++;
    jQuery("#attackName").html(playerTwo.firstName+" wins this round!");

    /* display medals won depending on number of rounds won */
    if (playerTwoRoundsWon === 1) {
      jQuery("#playerTwoRoundOneBlank").hide();
      jQuery("#playerTwoRoundOneWin").show();
      jQuery("#nextRoundButton").show();
    }
    else if (playerTwoRoundsWon === 2) {
      jQuery("#playerTwoRoundTwoBlank").hide();
      jQuery("#playerTwoRoundTwoWin").show();
      // Show Meet our Gladators button
      jQuery("#meetAndGreetGladiatorsButton").show();
    }
  }
}

//show new players
function nextRound () {
  // Generate new students for battle, and reset the variables
  reapVolunteersForTribute();
  turn = "player one";
  playerOneHealthPoints = 10;
  playerTwoHealthPoints = 10;

  // Reset displays to html
  jQuery("#actionProfilePic").hide();
  jQuery("#attackName").html("");
  jQuery("#attackStrength").html("");
  jQuery("#healthOne").html(playerOneHealthPoints);
  jQuery("#healthTwo").html(playerTwoHealthPoints);
  jQuery("#attackName").html(playerOne.firstName + " " + playerOne.lastName + "  &  " + playerTwo.firstName + " " + playerTwo.lastName);
  jQuery("#attackStrength").html("Prepare for battle!");

  //show attackButton, hide the nextRound button
  jQuery("#nextRoundButton").hide();
  jQuery("#attackButtonRed").show();
}

// Switches to the final Gladiators panel, and searches for students for every array written.
function mgGladiators () {
  // Hides the whole gameScreen panel
  jQuery("#gameScreen").hide();

  // Show the entire mgGladiatorsScreen panel, alreay with students in HTML
  jQuery("#mgGladiatorsScreen").show();

}

// Finds students who have volunteered as tribute within a given array
// Displays adds HTML for each one
function findGladiators (studArray) {
  for (var i=0; i<studArray.length; i++) {
    if (studArray[i].volunteerForTribute === true) {
      // Create HTML ul li rows for each student that volunteered
      // each row is an <a> tag, with the student's name
      jQuery("#gladiatorsListRed").append("<li class='gladiatorRow'><img src='" + studArray[i].photoPath + "' alt='" + studArray[i].firstName + " " + studArray[i].lastName + "'><img class='liLogo' src='img/graphic_assets/linkedin_logo.png' alt='linkedin logo'><a href='" + studArray[i].linkedIn + "' target='_blank'>" + studArray[i].firstName + " " + studArray[i].lastName + "</a></li>");
    }
  }
}

//buttons initiate various functions to continue the game
jQuery("#attackButtonRed").click(attackTurn);
jQuery("#attackButtonBlack").click(attackTurn);
jQuery("#roundWinnerAnnounce").click(roundWinner);
jQuery("#nextRoundButton").click(nextRound);
jQuery("#meetAndGreetGladiatorsButton").click(mgGladiators);


// // Add event listener for attack student
//
// var $studentRed = $('#playerPhotoRed');
// var $button = ('button .actionButton');
//
// $button.on('click', function(){
//   alert('wow');
//   // $studentRed.animate({
//   //   position: relative,
//   //   left: 100px
//   // }, 1000);
// });
