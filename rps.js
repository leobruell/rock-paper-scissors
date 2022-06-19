function computerPlay() {
    let val = Math.random()
    let computerRPS; 
    if (val < .33) {computerRPS = 'Rock'}
    else if (val < .67) {computerRPS = 'Paper'}
    else {computerRPS = 'Scissors'}
    return computerRPS; 
}
function gamePlay(player, computer){
    player = player.toLowerCase()
    computer = computer.toLowerCase()
    if (player == 'rock'){
        if (computer == 'scissors'){return 'You Win! Rock beats Scissors'}
        else if (computer == 'paper'){return 'You Lose! Paper beats Rock'}
        else if (computer == 'rock'){return 'Tie! You both played Rock'}
        else {return 'error!'}
    }
    else if (player == 'scissors'){
        if (computer == 'scissors'){return 'Tie! You both played Scissors'}
        else if (computer == 'paper'){return 'You Win! Scissors beats paper'}
        else if (computer == 'rock'){return 'You Lose! Rock beats Scissors'}
        else {return 'error!'}
    }
    else if (player == 'paper'){
        if (computer == 'scissors'){return 'You Lose! Scissors beats Paper'}
        else if (computer == 'paper'){return 'Tie! You both played Paper'}
        else if (computer == 'rock'){return 'You Win! Paper beats Rock'}
        else {return 'error!'}
    }
}

function game5(){
    let pWins = 0;
    let cWins = 0; 
    let ties = 0; 
    for (let i = 0; i < 5; i++){
        let computerOut = computerPlay();
        let playerOut = prompt("Rock, Paper, or Scissors?");
        let result = gamePlay(playerOut, computerOut)
        console.log(result)
        if (result.includes('Win')){pWins ++}
        else if (result.includes('Lose')) {cWins ++}
        else if (result.includes('Tie')){ties++}
    }
    return `Game Results: You played 5 games of Rock-Paper-Scissors. You won ${pWins} times. The computer won ${cWins} times. You tied ${ties} times`
}
console.log(game5())