

function game() {

    for (let i = 0; i<5; i++) {

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
            //result
            console.log(playRound());
    }
}

game();


