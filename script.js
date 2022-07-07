

// Computer randomly returns either 'rock', 'paper', 'scissors'
function computerPlay() {
 let computerNumber = Math.floor (Math.random() *3);
 if (computerNumber===0) {
    return 'rock';
 } else if (computerNumber===1) {
    return 'paper';
 } else {
    return 'scissors';
 }
}

//Declare variables for computerSelection and playerSelection.
let computerSelection = computerPlay();
let playerInitialSelection = 'Scissors';
let playerSelection = playerInitialSelection.toLowerCase();

//If statements for all possible combinations.
function play() {

    //playrSelection === 'rock'
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'Lose!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'Win!';
    }

    //playrSelection === 'paper'
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Win!';
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return 'Tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'Lose!';
    }

    //playrSelection === 'scissors'
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Lose!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'Win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'Tie!';
    }
}

console.log(play());

