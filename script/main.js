// 0 = Rock, 1 = Paper, 2 = Scissors

// VARIABLE DECLARATIONS
let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();
let humanScore = 0;
let computerScore = 0;

// generates a random number from 0 to 2
function randomizedChoice() {
    return Math.floor( Math.random() * 3 );
}

// returns a random number
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
// NOTE: make the prompt insist if user didn't put any choice

// translates the worded choice into number for easier comparison
function translateHumanChoice( humanChoice ) {
    switch( humanChoice ) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2;
        default:
            return 3;
    }
}

// checks the different scenarios for a player to win
// each item will return show true if any of the condition
// is correct
const PLAYER_WIN_SCENARIOS = [
    humanSelection === 0 && computerSelection === 2,
    humanSelection === 1 && computerSelection === 0,
    humanSelection === 2 && computerSelection === 1,
]

// plays one round
function playRound( humanScore, humanSelection, computerScore, computerSelection ) {

    // reiterates through different scenarios a player might win
    for (let i = 0; i < PLAYER_WIN_SCENARIOS.length; i++) {
        if ( PLAYER_WIN_SCENARIOS[i] ) {
            humanScore++;
            let endRound = `Player: ${humanScore}\nComputer Score: ${computerScore}`;
            console.log(endRound);
            return;
        } 
    }

    // checks if there is a draw
    if ( humanSelection === computerSelection) {
        let endRound = `Player: ${humanScore}\nComputer Score: ${computerScore}`;
        console.log(endRound);
        return;
    }

    // if all cases are false, then it is automatically the computer's win
    computerScore++;
    let endRound = `Player: ${humanScore}\nComputer Score: ${computerScore}`;
    console.log(endRound);
    return;
}

// starts a round
playRound( humanScore, humanSelection, computerScore, computerSelection );
console.log(humanSelection, computerSelection);

