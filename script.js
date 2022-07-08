
//Set variables for points to start with 0
let playerPoint = 0;
let computerPoint = 0;

function game() {

    function playRound() {

        // Computer randomly returns either 'rock', 'paper', 'scissors'
        function computerPlay() {
            const computerArray = ['rock', 'paper', 'scissors']
            return computerArray[Math.floor (Math.random() *3)];
            }

        const computerSelection = computerPlay();
        const playerInitialSelection = prompt('Rock Paper or Scissors?', ' ');
        const playerSelection = playerInitialSelection.toLowerCase();

        //If statements for all possible combinations.

        //playerSelection === 'rock'
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            return 'Tie!';

        } else if (playerSelection === 'rock' && computerSelection === 'paper'){
            computerPoint++
            return 'Lose!';

        } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            playerPoint++
            return 'Win!';
        }

        //playerSelection === 'paper'
        if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerPoint++
            return 'Win!';

        } else if (playerSelection === 'paper' && computerSelection === 'paper'){
            return 'Tie!';

        } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            computerPoint++
            return 'Lose!';
        }

        //playerSelection === 'scissors'
        if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerPoint++
            return 'Lose!';

        } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            playerPoint++
            return 'Win!';

        } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
            return 'Tie!';
        }
    }

    //Show result in console
        console.log(playRound());
        console.log(computerPoint);
        console.log(playerPoint);
}

//Play the function game until either player or computer to reach 5 points.
do {
    game()
} while(computerPoint < 5 && playerPoint < 5);

//Console log the final winner when either player or computer reached 5 points.
if (computerPoint === 5) {
    console.log('You got 5 points! You win!');
} else {
    console.log('Computer wins! Try again!');
}


