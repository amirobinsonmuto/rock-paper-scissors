
    
//global functions

    let playerPoint = 0;
    let computerPoint = 0;
    let computerSelection =""
    const messageStart = "Click on rock paper or scissors!"
    const messageTie = "It's a tie in this round!";
    const messageWin = "You won in this round!";
    const messageLose = 'You lost in this round!';
    const messageGameEndWin = 'You won this entire game! Play again by clicking the refresh button.';
    const messageGameEndLost = 'You lost this entire game! Try again by clicking the refresh button.';

//functions to call

    function computerPlay() {
    const computerArray = ['rock', 'paper', 'scissors']
    return computerArray[Math.floor (Math.random() *3)];
    }

    function endEvent () {
        if (playerPoint === 5) {
+
            //make the buttons unclickable. Currently hiding the buttons. 

            document.getElementById("rock").classList.add('hidden');
            document.getElementById("paper").classList.add('hidden');
            document.getElementById("scissors").classList.add('hidden');

            document.getElementById("message").textContent = messageGameEndWin;
            document.getElementById("refresh").classList.remove('hidden');

        } else if (computerPoint === 5) {

            //make the button unclikable. Currently hiding the buttons.

            document.getElementById("rock").classList.add('hidden');
            document.getElementById("paper").classList.add('hidden');
            document.getElementById("scissors").classList.add('hidden');

            document.getElementById("message").textContent = messageGameEndLost;
            
            document.getElementById("refresh").classList.remove('hidden');
            
        } else {
            //do nothing
        }
    }
    
    function refresh () {
                playerPoint = 0;
                computerPoint = 0;
    
                document.getElementById("message").textContent = messageStart;
        
                document.getElementById("playerPointDisplay").textContent = `Player Point is ${playerPoint}`;
                document.getElementById("computerPointDisplay").textContent = `Computer Point is ${computerPoint}`;
        
                document.getElementById("rock").classList.remove('hidden');
                document.getElementById("paper").classList.remove('hidden');
                document.getElementById("scissors").classList.remove('hidden');

                document.getElementById("refresh").classList.add('hidden');
    }

//main function 

    const btnRock = document.querySelector('#rock');
    btnRock.addEventListener('click', () => {

        computerSelection = computerPlay();
        console.log(computerSelection);

        if(computerSelection === 'rock') {
            document.getElementById("message").textContent = messageTie;
        } else if(computerSelection === 'paper') {
            document.getElementById("message").textContent = messageLose;
            computerPoint++;
        } else {
            document.getElementById("message").textContent = messageWin;
            playerPoint++;
        }

        document.getElementById("playerPointDisplay").textContent = `Player Point is ${playerPoint}`;
        document.getElementById("computerPointDisplay").textContent = `Computer Point is ${computerPoint}`;
        endEvent();
    })

    const btnPaper = document.querySelector('#paper');
    btnPaper.addEventListener('click', () => {

        computerSelection = computerPlay();
        console.log(computerSelection);

        if(computerSelection === 'rock') {
            document.getElementById("message").textContent = messageWin;
            playerPoint++;
        } else if(computerSelection === 'paper') {
            document.getElementById("message").textContent = messageTie;
        } else {
            document.getElementById("message").textContent = messageLose;
            computerPoint++;
        }

        document.getElementById("playerPointDisplay").textContent = `Player Point is ${playerPoint}`;
        document.getElementById("computerPointDisplay").textContent = `Computer Point is ${computerPoint}`;
        endEvent();
    })

    const btnScissors = document.querySelector('#scissors');
    btnScissors.addEventListener('click', () => {

        computerSelection = computerPlay();
        console.log(computerSelection);

        if(computerSelection === 'rock') {
            document.getElementById("message").textContent = messageLose;
            computerPoint++;
        } else if(computerSelection === 'paper') {
            document.getElementById("message").textContent = messageWin;
            playerPoint++;
        } else {
            document.getElementById("message").textContent = messageTie;
        }

        document.getElementById("playerPointDisplay").textContent = `Player Point is ${playerPoint}`;
        document.getElementById("computerPointDisplay").textContent = `Computer Point is ${computerPoint}`;
        endEvent();
    })

    const refreshBtn = document.querySelector('#refresh');
    refreshBtn.addEventListener('click', refresh);
