// 0 = Rock, 1 = Paper, 2 = Scissors

// VARIABLE INITIALIZATION
let computerSelection;
let humanSelection;
var humanScore = 0;
var computerScore = 0;

// generates a random number from 0 to 2
function randomizedChoice() {
    return Math.floor( Math.random() * 3 );
}

// returns a random computer number
function getComputerChoice() {
    return randomizedChoice();
}

// gets the choice of the player
function getHumanChoice() {
    // make the user input case insensitive
    let humanChoice = prompt('CHOOSE ONE: Rock, Paper, or Scissors?').toLowerCase();
    let translated = translateHumanChoice( humanChoice );
    return translated;
}

// translates the worded choice into number for easier comparison
function translateHumanChoice( humanChoice ) {
    switch( humanChoice ) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2;
        case '':                    // no choice given
            return 3;
        default:                    // cancel button was clicked
            return 4;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let runningGame = 1;
    let endRound;

    while ( runningGame < 6 ) {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();

        // if user didn't inputted any value
        // it will end the entire game
        if ( humanSelection === 3 || humanSelection === 4) {
            break;
        }

        let roundNum = `Round ${runningGame}`;

        // starts a round
        let humanWin = playRound( humanSelection, computerSelection );
        
        console.log(roundNum);
        if ( humanWin === 2 ) {         // DRAW
            endRound = `Player: ${humanScore}\nComputer Score: ${computerScore}`;
            console.log(endRound);
        } else if ( humanWin ) {        // PLAYER WIN
            ++humanScore;
            endRound = `Player: ${humanScore}\nComputer Score: ${computerScore}`;
            console.log(endRound);
        } else {                        // COMPUTER WIN
            ++computerScore;
            endRound = `Player: ${humanScore}\nComputer Score: ${computerScore}`;
            console.log(endRound);
        }
        
        ++runningGame;
    }
}

// plays one round
function playRound( humanSelection, computerSelection ) {
    // checks the different scenarios for a player to win
    // each item will return show true if any of the condition
    // is correct
    let playerWinScenarios = [
        humanSelection === 0 && computerSelection === 2,
        humanSelection === 1 && computerSelection === 0,
        humanSelection === 2 && computerSelection === 1,
        ]

    // reiterates through different scenarios a player might win
    for (let i = 0; i < playerWinScenarios.length; i++) {
        if ( playerWinScenarios[i] ) {
            // ++humanScore; 
            return true;
        } 
    }

    // checks if there is a draw
    if ( humanSelection === computerSelection) {
        return 2;
    }

    // if all cases are false, then it is automatically the computer's win
    // ++computerScore;
    return false;
}

// start game
playGame();